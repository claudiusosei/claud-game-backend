import {
  changePasswordAuth,
  checkUserExists,
  createUserAuth,
  forgotPasswordAuth,
  loginAuth
} from '@/boundaries/auth-service/api';
import { Request, Response } from 'express';
import UserProfileRepo from '../models/user-profile/user.profile.repo';
import {
  validateChangePasswordRequest,
  validateCreateUserRequest,
  validateForgotPasswordRequest,
  validateLoginUserRequest
} from './validators/auth.validators';

/**
 * Create user
 *
 * @param {Request} req
 * @param {Response} res
 */
export const createUserProfile = async (req: Request, res: Response) => {
  try {
    const validateResponse = validateCreateUserRequest(req);
    if (!validateResponse.isValid) {
      return res.status(400).send({
        message: validateResponse.message
      });
    }

    const { givenName, familyName, email, role, password } = req.body;

    const checkUserExistsResponse = await checkUserExists({ username: email });

    if (checkUserExistsResponse.userExists) {
      return res.status(400).send({
        message: 'User exists'
      });
    }

    const createUserAuthResponse = await createUserAuth({
      username: email,
      role: role,
      password: password,
      email: email
    });

    await UserProfileRepo.create({
      userId: createUserAuthResponse.user.id,
      givenName,
      familyName
    });

    return res.status(200).send({
      message: 'User created!',
      token: createUserAuthResponse.token
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Login.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const loginUser = async (req: Request, res: Response) => {
  try {

    const validateResponse = validateLoginUserRequest(req);

    if (!validateResponse.isValid) {
      return res.status(400).send({ message: validateResponse.message });
    }

    const { email, password } = req.body;

    const checkUserExistsResponse = await checkUserExists({ username: email });

    if (!checkUserExistsResponse.userExists) {
      return res.status(400).send({ message: 'User not present' });
    }

    const loginResponse = await loginAuth({
      username: email,
      password: password
    });

    return res.status(200).send({
      message: 'LoggedIn',
      token: loginResponse.token
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Forgot Password
 *
 * @param {Request} req
 * @param {Response} res
 */
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const validateResponse = validateForgotPasswordRequest(req);
    if (!validateResponse.isValid) {
      return res.status(400).send({
        message: validateResponse.message
      });
    }

    const { email } = req.body;

    const checkUserExistsResponse = await checkUserExists({ username: email });

    if (!checkUserExistsResponse.userExists) {
      return res.status(400).send({
        message: 'User not present'
      });
    }

    const forgotPasswordResponse = await forgotPasswordAuth({
      username: email
    });

    return res.status(200).send({
      message: forgotPasswordResponse.message
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};

/**
 * Change Password
 *
 * @param {Request} req
 * @param {Response} res
 */
export const changePassword = async (req: Request, res: Response) => {
  try {
    const validateResponse = validateChangePasswordRequest(req);
    if (!validateResponse.isValid) {
      return res.status(400).send({
        message: validateResponse.message
      });
    }

    const { newPassword, code, email } = req.body;

    const checkUserExistsResponse = await checkUserExists({ username: email });

    if (!checkUserExistsResponse.userExists) {
      return res.status(400).send({
        message: 'User not present'
      });
    }

    const changePasswordResponse = await changePasswordAuth({
      username: email,
      code: code,
      newPassword: newPassword
    });

    return res.status(200).send({
      message: changePasswordResponse.message
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message ? error.message : 'Request failed'
    });
  }
};
