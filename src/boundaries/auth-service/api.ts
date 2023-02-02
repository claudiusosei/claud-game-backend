import CONFIG from '@/config';
import axios from 'axios';
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  CreateUserAuthRequest,
  CreateUserAuthResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  ResourceAccessAllowedRequest,
  ResourceAccessAllowedResponse,
  UserExistsRequest,
  UserExistsResponse
} from './model';

const createUserAuth = async (
  payload: CreateUserAuthRequest
): Promise<CreateUserAuthResponse> => {
  const createUserAuthAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/sign-up`,
    payload
  );

  return createUserAuthAxiosResponse.data as CreateUserAuthResponse;
};

const checkUserExists = async (payload: UserExistsRequest): Promise<UserExistsResponse> => {
  const checkUserExistsAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/user-exists`,
    payload
  );

  return checkUserExistsAxiosResponse.data as UserExistsResponse;
};

const loginAuth = async (payload: LoginRequest) => {
  const loginAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/login`,
    payload
  );

  return loginAxiosResponse.data as LoginResponse;
};

const forgotPasswordAuth = async (payload: ForgotPasswordRequest) => {
  const forgotPasswordAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/forgot-password`,
    payload
  );

  return forgotPasswordAxiosResponse.data as ForgotPasswordResponse;
};

const changePasswordAuth = async (payload: ChangePasswordRequest) => {
  const changePasswordAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/change-password`,
    payload
  );

  return changePasswordAxiosResponse.data as ChangePasswordResponse;
};

const isResourceAccessAllowedAuth = async (
  payload: ResourceAccessAllowedRequest
) => {
  const isResourceAccessAllowedAxiosResponse = await axios.post(
    `${CONFIG.AUTH_SERVICE.URL}/api/v1/auth/isResourceAccessAllowed`,
    payload
  );

  return isResourceAccessAllowedAxiosResponse.data as ResourceAccessAllowedResponse;
};

export {
  createUserAuth,
  checkUserExists,
  loginAuth,
  forgotPasswordAuth,
  changePasswordAuth,
  isResourceAccessAllowedAuth
};
