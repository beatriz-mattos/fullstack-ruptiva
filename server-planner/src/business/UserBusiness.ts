import { User, LoginInputDTO, SignupInputDTO } from './../model/User';
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from './../error/NotFoundError';
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) {};

    public async signup(input: SignupInputDTO) {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new InvalidParameterError("Missing some input")
        };

        if (email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email")
        };

        if (input.password.length < 8) {
            throw new InvalidParameterError("Your password must contain at least 8 characters")
        };

        const id = this.idGenerator.generate();
        const cryptedPassword = await this.hashManager.hash(password);

        await this.userDatabase.createUser(
            new User(id, name, email, cryptedPassword)
        );

        const accessToken = this.authenticator.generateToken({id});

        return { accessToken };
    };

    public async login(input: LoginInputDTO) {
        const { email, password } = input;
        
        if (!email || !password) {
            throw new InvalidParameterError("Missing some input")
        };

        const user = await this.userDatabase.getUserByEmail(email);

        if (!user) {
            throw new NotFoundError("User not found")
        };

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword());

        if (!isPasswordCorrect) {
            throw new InvalidParameterError("Invalid password")
        };

        const accessToken = this.authenticator.generateToken({id: user.getId()});

        return { accessToken };
    };
};