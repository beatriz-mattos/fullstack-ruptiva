export class Planner {
    constructor(
        private id: string,
        protected text: string,
        protected day: string,
        protected created_at: string
    ) {};

    public getId = () => this.id;
    public getText = () => this.text;
    public getDay = () => this.day;
    public createdAt = () => this.created_at;

    public static toPlannerModel(planner?: any): Planner | undefined {
        return (
            planner &&
            new Planner(
                planner.id,
                planner.text,
                planner.day,
                planner.created_at
            )
        );
    };
};

export interface PlannerInputDTO {
    text: string,
    day: string
};