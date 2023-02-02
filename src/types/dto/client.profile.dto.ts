export interface ClientProfile {
  name: string;
  description: string;
  status: string;
  creatorUserId: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
