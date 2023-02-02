import mongoose from 'mongoose';
import { InvitedUser } from '@/types/dto/invited.user.dto';

export interface InvitedUserOptional {
  id?: string;
  email?: string;
  type?: string;
  invitedByUser?: string;
  invitedByEntityId?: string;
  description?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface InvitedUserDocument extends InvitedUser, mongoose.Document {}

const invitedUserSchema = new mongoose.Schema({
  email: {
    type: String
  },
  type: {
    type: String
  },
  description: {
    type: String
  },
  invitedByUser: {
    type: String
  },
  invitedByEntityId: {
    type: String
  },
  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});

export const InvitedUserModel = mongoose.model<InvitedUserDocument>(
  'InvitedUser',
  invitedUserSchema
);
