import { Authenticator } from '../services/Authenticator';
import { UserBusiness } from './../business/UserBusiness';
import { HashManager } from './../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';
import { UserDatabase } from './../data/UserDatabase';
import { BaseDatabase } from './../data/BaseDatabase';
import { Request, Response } from "express";
import { SignupInputDTO, LoginInputDTO } from '../model/User';

export class UserController {
    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    );

    async signup(req: Request, res: Response) {
        try {
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };
            
            const response = await UserController.UserBusiness.signup(input);

            res.status(200).send({  response, message: "User created sucessfully!" });

        } catch (err) {
            res.status(err.code || 400).send({ message: err.message })
        };

        await BaseDatabase.destroyConnection();
    };

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const input: LoginInputDTO = { email, password };

            const token = await UserController.UserBusiness.login(input);

            res.status(200).send(token);

        } catch (err) {
            res.status(err.code || 400).send({ message: err.message })
        };

        await BaseDatabase.destroyConnection();
    };
};