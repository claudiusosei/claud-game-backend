import mongoose from 'mongoose';
import { ClientProfile } from '@/types/dto/client.profile.dto';

export interface ClientProfileOptional {
  id?: string;
  creatorUserId?: string;
  status?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

export interface ClientProfileDocument
  extends ClientProfile,
    mongoose.Document {}

const clientSchema = new mongoose.Schema({
  creatorUserId: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String
  },
  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});

export const ClientProfileModel = mongoose.model<ClientProfileDocument>(
  'ClientProfile',
  clientSchema
);
