const jwt = require('jsonwebtoken');
const roleEnum = require('../helpers/roleEnum');
const envConfig = process.env;


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt_token

    if (token) {
        jwt.verify(token, envConfig.TOKEN_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid token" });
            }
            req.user = decoded;
            return next();
        });
    }
    else {
        return res.status(401).json({ message: "Please Login To Continue." });
    }
}

const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

const checkRole = (req, res, next) => {
    const payload = parseJwt(req.cookies.jwt_token)
    if (payload.role != req.body.role) {
        return res.status(403).json({ message: "Access Denied" });
    }
    else {
        return next();
    }
}

// const authorize = (roles = []) => {
//     if (typeof roles === "string") {
//         roles = [roles];
//     }
//     return [

//         (req, res, next) => {
//             if (roles.length && !roles.includes(req.body.role)) {
//                 return res.status(403).json({ message: "Access Denied" });
//             }
//             else {
//                 return next();
//             }
//         }
//     ]
// }


module.exports = { requireAuth, checkRole };