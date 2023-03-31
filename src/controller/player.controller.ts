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
        var playerID = 0;
        if (fetchAllRecors?.length > 0) {
            playerID = parseInt(fetchAllRecors[fetchAllRecors?.length - 1].playerID) + 1;
        } else {
            playerID = 1;
        }
        var requestParameter = {
            playerID: playerID.toString()
        }
        const createNewPlayer = await playergameRepo.createNewPlayGame(requestParameter);
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
        return res.status(200).send({ playerID: playerID.toString() });
    } catch (error) {
        return res.status(400).send({
            message: error.message ? error.message : 'Request failed'
        });
    }
};

export const updatePlayerDetails = async (req: any, res: any) => {
    try {
        var data: any = Object.keys(req.body)
        console.log(" datat ", data)
        const updateDetails = await playergameRepo.update(JSON.parse(data))
        return res.status(200).send({ statue: 200, "message": "your recored updated successfully!!!" });

    } catch (error) {
        return res.status(400).send({
            message: error.message ? error.message : 'Request failed'
        });
    }
}