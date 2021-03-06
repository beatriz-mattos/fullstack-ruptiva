import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
    protected TABLE_NAME: string = "Planner_User";

    public async createUser(user: User): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${this.TABLE_NAME} (id, name, email, password)
                VALUES (
                '${user.getId()}', 
                '${user.getName()}', 
                '${user.getEmail()}',
                '${user.getPassword()}'
                )
            `);

        } catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    };

    public async getUserByEmail(email: string): Promise<User | undefined> {
        try {
            const result = await super.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({ email: email })

            return User.toUserModel(result[0]);

        } catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    };
};