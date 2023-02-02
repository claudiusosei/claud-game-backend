import {
  createClientProfile,
  getClientProfile,
  inviteClientAdmin,
  updateClientStatus
} from '@/controller/client.controller';
import { isResourceAccessAllowed } from '@/middlewares/auth';
import { Router } from 'express';

const client = Router();

client.post('/client/profile/create', createClientProfile);
client.post('/client/profile/get', getClientProfile);
client.post('/client/profile/update/status', updateClientStatus);
client.post('/invite/client/admin', inviteClientAdmin);

export default client;
