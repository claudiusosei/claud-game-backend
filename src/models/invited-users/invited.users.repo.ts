import { InvitedUserModel, InvitedUserOptional } from './invited.users.schema';
import { InvitedUser } from '@/types/dto/invited.user.dto';

const create = async (data: InvitedUser) => {
  const newUser = new InvitedUserModel({
    ...data,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  await newUser.save();

  return newUser;
};

const findOne = async (data: InvitedUserOptional) => {
  return await InvitedUserModel.findOne({ ...data });
};

const findOneById = async (id: string) => {
  return await InvitedUserModel.findById(id);
};

const update = async (id: string, data: InvitedUserOptional) => {
  await InvitedUserModel.findByIdAndUpdate(id, {
    ...data
  });
};

const findMany = async (
  filter: any,
  projection: any
): Promise<Array<InvitedUser>> => {
  try {
    const users = await InvitedUserModel.find({ ...filter }, { ...projection });

    return users.map((u) => {
      return {
        ...u.toObject(),
        id: u.id
      };
    });
  } catch (err) {
    throw err;
  }
};

export default {
  create,
  findOne,
  update,
  findMany,
  findOneById
};
