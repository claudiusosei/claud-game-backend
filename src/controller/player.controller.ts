import playergameRepo from '@/models/player-games/playergame.repo';
import { PlayerGamesRequestParameters } from '@/types/dto/playergames.dto';
import { Request, Response } from 'express';

export const createNewPlayRoom = async (req: Request, res: Response) => {
    try {
        var data: any = Object.keys(req.body)
        const createNewUserData = await playergameRepo.createNewPlayGame(JSON.parse(data))
        // const validateResponse = validateCreateClientProfileRequest(req);
        // if (!validateResponse.isValid) {
        //   return res.status(400).send({
        //     message: validateResponse.message
        //   });
        // }

        // const { name, description, email, status } = req.body;

        // await ClientProfileRepo.create({
        //   name,
        //   description,
        //   status: status,
        //   creatorUserId: email
        // });
        return res.status(200).send({ "message": "Data inserted successfully" });
    } catch (error) {
        console.log("errorr ", error)
        return res.status(400).send({
            message: error.message ? error.message : 'Request failed'
        });
    }
};

export const fetchAllPlayersList = async (req: Request, res: Response) => {
    try {
        const fetchAllRecors = await playergameRepo.fetchAllRecords()
        // const validateResponse = validateCreateClientProfileRequest(req);
        // if (!validateResponse.isValid) {
        //   return res.status(400).send({
        //     message: validateResponse.message
        //   });
        // }

        // const { name, description, email, status } = req.body;

        // await ClientProfileRepo.create({
        //   name,
        //   description,
        //   status: status,
        //   creatorUserId: email
        // });
        return res.status(200).send(fetchAllRecors);
    } catch (error) {
        return res.status(400).send({
            message: error.message ? error.message : 'Request failed'
        });
    }
};

export const updatePlayerDetails = async (req: any, res: any) => {
    try {

        console.log("req.body ==>  ", req.body)
        const updateDetails = await playergameRepo.update(req.body.playerID, req.body)

        console.log("updateDetails after update ", updateDetails)
        return res.status(200).send({ statue: 200, "message": "your recored updated successfully!!!" });

    } catch (error) {
        return res.status(400).send({
            message: error.message ? error.message : 'Request failed'
        });
    }
}