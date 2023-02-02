import mongoose from 'mongoose';
import { UserProfile } from '@/types/dto/user.profile.dto';

export interface UserProfileOptional {
  id?: string;
  userId?: string;
  familyName?: string;
  givenName?: string;
  companyId?: string;
  brandId?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface UserProfileDocument extends UserProfile, mongoose.Document {}

const userSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  familyName: {
    type: String
  },
  givenName: {
    type: String
  },
  companyId: {
    type: String
  },
  brandId: {
    type: String
  },
  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});

export const UserProfileModel = mongoose.model<UserProfileDocument>(
  'UserProfile',
  userSchema
);
