import auth from "basic-auth";
import compare from "tsscmp";
import { Request, Response } from "express";
import FriendsFacade from "../facades/FriendsFacade";

let facade: FriendsFacade;

const authMiddleware = async function (
    req: Request,
    res: Response,
    next: Function
) {
    if (!facade) {
        facade = new FriendsFacade(req.app.get("db")); //Observe how you have access to the global app-object via the request object
    }

    var credentials = auth(req);

    let status =
        credentials && (await check(credentials.name, credentials.pass, req));

    if (status) {
        next();
    } else {
        res.statusCode = 401;
        res.setHeader("WWW-Authenticate", 'Basic realm="example"');
        res.json({ errors: [{ message: "Access denied" }] });
    }
};

async function check(userName: string, pass: string, req: any) {
    const verifiedUser = await facade.getVerifiedUser(userName, pass);
    if (verifiedUser) {
        req.credentials = {
            userName: verifiedUser.email,
            role: verifiedUser.role,
        };
        return true;
    }
    return false;
}
export default authMiddleware;
