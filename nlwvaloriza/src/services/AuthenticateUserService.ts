import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";

import { UsersRepositories } from "../repositories/UsersRepositories";



interface IAuthenticateUserService {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateUserService) {
        const usersRepositories = getCustomRepository(UsersRepositories);


        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

    }
}

export { AuthenticateUserService }