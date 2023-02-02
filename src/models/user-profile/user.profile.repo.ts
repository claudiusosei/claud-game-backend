import { UserProfileModel, UserProfileOptional } from './user.profile.schema';
import { UserProfile } from '@/types/dto/user.profile.dto';

const create = async (data: UserProfile) => {
  const newUser = new UserProfileModel({
    ...data,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  await newUser.save();

  return newUser;
};

const findOne = async (data: UserProfileOptional) => {
  return await UserProfileModel.findOne({ ...data });
};

const findOneById = async (id: string) => {
  return await UserProfileModel.findById(id);
};

const update = async (id: string, data: UserProfileOptional) => {
  await UserProfileModel.findByIdAndUpdate(id, {
    ...data
  });
};

const findMany = async (
  filter: any,
  projection: any
): Promise<Array<UserProfile>> => {
  try {
    const users = await UserProfileModel.find({ ...filter }, { ...projection });

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
