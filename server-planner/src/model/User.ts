export class User {
    constructor(
        private id: string,
        protected name: string,
        protected email: string,
        protected password: string
    ) {};

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
    public getPassword = () => this.password;

    public static toUserModel(user?: any): User | undefined {
        return (
            user &&
            new User(
                user.id,
                user.name,
                user.email,
                user.password
            )
        );
    };
};

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
};

export interface LoginInputDTO {
    email: string,
    password: string
};