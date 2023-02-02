import { Request, Response } from 'express';
import {
  validateCreateClientProfileRequest,
  validateInviteClientAdminRequest
} from './validators/client.validators';
import ClientProfileRepo from '../models/client-profile/client.profile.repo';
import invitedUsersRepo from '@/models/invited-users/invited.users.repo';
import { UserType } from '@/types/common/user';
import { RequestWithUser } from '@/types/request/requestWithUser';

/**
 * Create Client Profile
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 */
export const createClientProfile = async (req: Request, res: Response) => {
  try {
    const validateResponse = validateCreateClientProfileRequest(req);
    if (!validateResponse.isValid) {
      return res.status(400).send({
        message: validateResponse.message
      });
    }

    const { name, description, email, status } = req.body;

    await ClientProfileRepo.create({
      name,
      description,
      status: status,
      creatorUserId: email
    });

    return res.status(200).send({
      message: 'Client Profile created!'
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Update Client Status
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 */
export const updateClientStatus = async (req: Request, res: Response) => {
  try {
    const { email, status } = req.body;

    const clientProfile = await ClientProfileRepo.findOne({
      creatorUserId: email
    });

    console.log(clientProfile);

    if (!clientProfile) {
      return res.status(400).send({
        message: 'Client Profile not present'
      });
    }

    await ClientProfileRepo.update(email, {
      status: status
    });

    return res.status(200).send({
      message: 'Client Status updated!'
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Get Client Profile
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 */
export const getClientProfile = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    console.log(email);

    const clientProfile = await ClientProfileRepo.findOne({
      creatorUserId: email
    });

    console.log(clientProfile);

    if (!clientProfile) {
      return res.status(400).send({
        message: 'Client Profile not present'
      });
    }

    return res.status(200).send({
      message: 'Client Profile created!',
      profile: {
        name: clientProfile.name,
        description: clientProfile.description,
        id: clientProfile.id,
        email: email,
        status: clientProfile.status
      }
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Invite Client Admin
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 */
export const inviteClientAdmin = async (
  req: RequestWithUser,
  res: Response
) => {
  try {
    const validateResponse = validateInviteClientAdminRequest(req);
    if (!validateResponse.isValid) {
      return res.status(400).send({
        message: validateResponse.message
      });
    }

    const { email, description, companyId } = req.body;

    await invitedUsersRepo.create({
      email: email,
      type: UserType.CLIENT_ADMIN,
      invitedByUser: req.user.id,
      invitedByEntityId: companyId,
      description: description ? description : 'Invite for Client Admin',
      createdAt: new Date()
    });

    return res.status(200).send({
      message: 'Invite created successfully'
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};
