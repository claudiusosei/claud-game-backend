import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
    id: string;
    name: string;
  };
}
