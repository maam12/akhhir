import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    
    const token = req.cookies.token;// Assuming the token is stored with the key "token"
    console.log(token, "token waaaye");

    if (!token) return res.status(403).send("Access denied please login waaye");

    try {
        const decoded = jwt.verify(token, "secreeet");
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(403).send("Access denied please login xaaancde");
    }
};
