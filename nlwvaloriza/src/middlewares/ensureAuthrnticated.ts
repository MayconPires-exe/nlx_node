import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
	sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

	//gerar token
	const authtoken = request.headers.authorization

	//validar token prenchido
	if (!authtoken) {
		return response.status(401).end();
	}

	const [, token] = authtoken.split(" ")

	//validar token 
	try {
		const { sub } = verify(token, "29710d8808f7f1cb2a2175a61b602213") as IPayload;

		//recuperar informações do User
		request.user_id = sub

		return next();

	} catch (err) {
		return response.status(401).end();
	}

}