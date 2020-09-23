import { PlannerDatabase } from "../data/PlannerDatabase";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { PlannerInputDTO } from "../model/Planner";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class PlannerBusiness {
    constructor(
        private plannerDatabase: PlannerDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ) {};

    public async createTask(input: PlannerInputDTO) {
        const { text, day } = input;

        if (!text || !day) {
            throw new InvalidParameterError("Missing some input")
        };

        
    };
};