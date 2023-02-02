import { Request } from 'express';
import { ValidateResponse } from './model.validator';

export const validateCreateClientProfileRequest = (
  req: Request
): ValidateResponse => {
  const { name, description, status } = req.body;

  if (!name) {
    return {
      isValid: false,
      message: 'Name is required'
    };
  }

  if (!description) {
    return {
      isValid: false,
      message: 'Description is required'
    };
  }

  if (!status) {
    return {
      isValid: false,
      message: 'Status is required'
    };
  }

  return {
    isValid: true
  };
};

export const validateInviteClientAdminRequest = (
  req: Request
): ValidateResponse => {
  const { email, companyId } = req.body;

  if (!email || !email.trim()) {
    return {
      isValid: false,
      message: 'Email is required'
    };
  }

  if (!companyId || !companyId.trim()) {
    return {
      isValid: false,
      message: 'companyId is required'
    };
  }

  return {
    isValid: true
  };
};
