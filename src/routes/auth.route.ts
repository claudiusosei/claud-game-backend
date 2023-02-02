import {
  changePassword,
  createUserProfile,
  forgotPassword,
  loginUser
} from '@/controller/auth.controller';
import { Router } from 'express';

const auth = Router();

auth.post('/auth/login', loginUser);

auth.post('/auth/sign-up', createUserProfile);

auth.post('/auth/forgot-password', forgotPassword);

auth.post('/auth/change-password', changePassword);

export default auth;
