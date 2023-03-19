const jwt = require('jsonwebtoken');

exports.loggedin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]; // Lấy token từ header Authorization
    jwt.verify(token, 'mysecretkey', (err, decoded) => { // Giải mã và xác thực token
        if (err) {
            return res.status(401).json({
                success: 0,
                message: 'Access Denied! Unauthorized User',
            });
        } else {
            req.user = decoded; // Lưu thông tin người dùng vào biến req.user để sử dụng ở các middleware hoặc route khác
            next();
        }
    });
}


exports.isAdmin = (req, res, next) => {
    // Lấy token từ header
    const authHeader = req.headers.authorization;
    console.log('test header', authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    console.log('test token', token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Giải mã JWT và lấy ra payload (id và role)

        jwt.verify(token, 'mysecretkey', (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: 0,
                    message: 'Invalid Token...',
                });
            }
            console.log('11', decoded.chuc_vu)
            const chuc_vu = decoded.chuc_vu;
            console.log('tesst chhuc vu', chuc_vu)
            if (chuc_vu === 2) {
                next();
            }
            else {
                return res.status(405).json({
                    success: 0,
                    message: 'Access Denied! You are not Admin',
                })
            }
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};


exports.isAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.user = req.session.user
        res.redirect('/home');
    } else {
        next();
    }
}

// exports.isAdmin = (req, res, next) => {
//     const chuc_vu = req.decoded;
//     console.log('tesy', chuc_vu)

//     if (chuc_vu === 2) next();
//     else {
//         return res.status(405).json({
//             success: 0,
//             message: 'Access Denied! You are not Admin',
//         })
//     }

// };
