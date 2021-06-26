import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";



interface IAuthenticateUserService {
	email: string;
	password: string;
}

class AuthenticateUserService {

	async execute({ email, password }: IAuthenticateUserService) {
		const usersRepositories = getCustomRepository(UsersRepositories);


		//Verifica se email existe
		const user = await usersRepositories.findOne({
			email
		});

		if (!user) {
			throw new Error("Email/Password incorrect")
		}

		//Verifica se senha esta correta
		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error
		}

		//Gerar token
		const token = sign(
			{
				email: user.email,
			},
			"29710d8808f7f1cb2a2175a61b602213",
			{
				subject: user.id,
				expiresIn: "1d",
			}
		);

		return token;
	}
}

export { AuthenticateUserService }