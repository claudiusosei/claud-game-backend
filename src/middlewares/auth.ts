import { isResourceAccessAllowedAuth } from '@/boundaries/auth-service/api';
import { RequestWithUser } from '@/types/request/requestWithUser';
import { decodeJWT } from '@/utils/jwt';
import { Response, NextFunction } from 'express';

export const isAuthenticated = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization: bearerToken } = req.headers;

    if (!bearerToken) {
      return res.status(401).send({
        message: 'Please make sure your request has an Authorization header.'
      });
    }

    const [, authToken] = bearerToken.split(' ');
    console.log(authToken);
    const payload = await decodeJWT(authToken);

    req.user = {
      email: payload.email,
      role: payload.role,
      name: payload.givenName,
      id: payload.id
    };
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      message:
        'Please make sure your request has an correct Authorization header.'
    });
  }
};

export const isResourceAccessAllowed = (
  resource: string,
  accessType: string
) => {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const response = await isResourceAccessAllowedAuth({
        resource,
        accessType
      });

      if (response.isGranted) {
        res.locals.accessType = accessType;
        next();
      } else {
        return res.status(401).send({
          message: 'Access to the end-point is not allowed'
        });
      }
    } catch (error) {
      return res.status(401).send({
        message: 'Access to the end-point is not allowed'
      });
    }
  };
};
