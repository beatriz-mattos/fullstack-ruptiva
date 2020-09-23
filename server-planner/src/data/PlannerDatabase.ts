import { Planner } from "../model/Planner";
import { BaseDatabase } from "./BaseDatabase";

export class PlannerDatabase extends BaseDatabase {
    protected TABLE_NAME: string = "Planner_Data";

    public async createTask(planner: Planner): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${this.TABLE_NAME} (id, text, day, created_at)
                VALUES (
                    '${planner.getId()}',
                    '${planner.getText()}',
                    '${planner.getDay()}',
                    '${planner.createdAt()}'
                )
            `)
        } catch (err) {
            throw new Error(err.sqlMessage || err.message);
        }
    };

    public async getPlannerById(id: string): Promise<Planner | undefined> {
        try {
            const result = await super.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({ id: id })

            return Planner.toPlannerModel(result[0]);

        } catch(err) {
            throw new Error(err.sqlMessage || err.message);
        }
    };
};
