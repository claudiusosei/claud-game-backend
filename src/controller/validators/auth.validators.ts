import { Request, Response } from 'express';
import { ValidateResponse } from './model.validator';

export const validateCreateUserRequest = (req: Request): ValidateResponse => {
  const { givenName, familyName, email, role, password, confirmPassword } =
    req.body;

  if (!givenName) {
    return {
      isValid: false,
      message: 'GivenName is required'
    };
  }

  if (!familyName) {
    return {
      isValid: false,
      message: 'FamilyName is required'
    };
  }

  if (!email || !email.trim()) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  if (!role) {
    return {
      isValid: false,
      message: 'Role is required'
    };
  }

  if (!password) {
    return {
      isValid: false,
      message: 'Password is required'
    };
  }

  if (!confirmPassword) {
    return {
      isValid: false,
      message: 'Confirm Password is required'
    };
  }

  return {
    isValid: true
  };
};

export const validateLoginUserRequest = (req: Request): ValidateResponse => {
  const { email, password } = req.body;

  if (!email) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  if (!password) {
    return {
      isValid: false,
      message: 'Password is required'
    };
  }

  return {
    isValid: true
  };
};

export const validateForgotPasswordRequest = (
  req: Request
): ValidateResponse => {
  const { email } = req.body;

  if (!email) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  return {
    isValid: true
  };
};

export const validateChangePasswordRequest = (
  req: Request
): ValidateResponse => {
  const { newPassword, code, email } = req.body;
  if (!code) {
    return {
      isValid: false,
      message: 'Code is required'
    };
  }

  if (!email) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  if (!newPassword || !newPassword.trim()) {
    return {
      isValid: false,
      message: 'Password is required'
    };
  }

  return {
    isValid: true
  };
};
