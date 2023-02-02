export interface InvitedUser {
  email: string;
  type: string;
  description: string;
  invitedByUser: string;
  invitedByEntityId: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
