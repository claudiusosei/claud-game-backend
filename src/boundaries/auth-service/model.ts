export interface CreateUserAuthRequest {
  username: string;
  role: string;
  password: string;
  email: string;
}

export interface UserDetails {
  username: string;
  role: string;
  id: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: UserDetails;
}

export interface CreateUserAuthResponse extends AuthResponse { }

export interface UserExistsRequest {
  username: string;
}

export interface UserExistsResponse {
  message: string;
  userExists: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse extends AuthResponse { }

export interface ForgotPasswordRequest {
  username: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ResourceAccessAllowedRequest {
  resource: string;
  accessType: string;
}

export interface ResourceAccessAllowedResponse {
  message: string;
  isGranted: boolean;
}

export interface ChangePasswordRequest {
  username: string;
  newPassword: string;
  code: string;
}

export interface ChangePasswordResponse {
  message: string;
}
