import { IdGenerator } from './../services/IdGenerator';
import { Authenticator } from './../services/Authenticator';
import { HashManager } from './../services/HashManager';
import { PlannerDatabase } from './../data/PlannerDatabase';
import { PlannerBusiness } from '../business/PlannerBusiness';
import { Request, Response } from "express";
import { PlannerInputDTO } from '../model/Planner';
import { BaseDatabase } from '../data/BaseDatabase';

export class PlannerController {
    private static PlannerBusiness = new PlannerBusiness(
        new PlannerDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    );

    async createTask(req: Request, res: Response) {
        try {
            const input: PlannerInputDTO = {
                text: req.body.text,
                day: req.body.day
            };

            const response = await PlannerController.PlannerBusiness.createTask(input);

            res.status(200).send({response, message: "Task created sucessfully!"});

        } catch(err) {
            res.status(err.code || 400).send({ message: err.message })
        };

        await BaseDatabase.destroyConnection();
    };
};