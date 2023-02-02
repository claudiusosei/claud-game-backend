import mongoose from 'mongoose';

export interface ClientProfileOptional {
  playerID?: string;
  age: string;
  gender: string;
  handedness: string,
  questionnaire: string,
  level_1_attemps: string,
  level_1_Q1_ans: string,
  level_1_Q2_ans: string,
  level_2_attemps: string,
  level_2_Q1_ans: string,
  level_2_Q2_ans: string,
  level_3_attemps: string,
  level_3_Q1_ans: string,
  level_3_Q2_ans: string,
  level_4_attemps: string,
  level_4_Q1_ans: string,
  level_4_Q2_ans: string,
  level_5_attemps: string,
  level_5_Q1_ans: string,
  level_5_Q2_ans: string,
  level_6_attemps: string,
  level_6_Q1_ans: string,
  level_6_Q2_ans: string,
  level_7_attemps: string,
  level_7_Q1_ans: string,
  level_7_Q2_ans: string,
  level_8_attemps: string,
  level_8_Q1_ans: string,
  level_8_Q2_ans: string,
  level_9_attemps: string,
  level_9_Q1_ans: string,
  level_9_Q2_ans: string,
  level_10_attemps: string,
  level_10_Q1_ans: string,
  level_10_Q2_ans: string,
  level_11_attemps: string,
  level_11_Q1_ans: string,
  level_11_Q2_ans: string
}

export interface PlayerGamesDocument extends mongoose.Document { }

const playeGameSchema = new mongoose.Schema({
  playerID: {
    type: String
  },
  age: {
    type: String
  },
  gender: {
    type: String
  },
  handedness: {
    type: String
  },
  questionnaire: {
    type: String
  },
  level_1_attemps: {
    type: String
  },
  level_1_Q1_ans: {
    type: String
  },
  level_1_Q2_ans: {
    type: String
  },
  level_2_attemps: {
    type: String
  },
  level_2_Q1_ans: {
    type: String
  },
  level_2_Q2_ans: {
    type: String
  },
  level_3_attemps: {
    type: String
  },
  level_3_Q1_ans: {
    type: String
  },
  level_3_Q2_ans: {
    type: String
  },
  level_4_attemps: {
    type: String
  },
  level_4_Q1_ans: {
    type: String
  },
  level_4_Q2_ans: {
    type: String
  },
  level_5_attemps: {
    type: String
  },
  level_5_Q1_ans: {
    type: String
  },
  level_5_Q2_ans: {
    type: String
  },
  level_6_attemps: {
    type: String
  },
  level_6_Q1_ans: {
    type: String
  },
  level_6_Q2_ans: {
    type: String
  },
  level_7_attemps: {
    type: String
  },
  level_7_Q1_ans: {
    type: String
  },
  level_7_Q2_ans: {
    type: String
  },
  level_8_attemps: {
    type: String
  },
  level_8_Q1_ans: {
    type: String
  },
  level_8_Q2_ans: {
    type: String
  },
  level_9_attemps: {
    type: String
  },
  level_9_Q1_ans: {
    type: String
  },
  level_9_Q2_ans: {
    type: String
  },
  level_10_attemps: {
    type: String
  },
  level_10_Q1_ans: {
    type: String
  },
  level_10_Q2_ans: {
    type: String
  },
  level_11_attemps: {
    type: String
  },
  level_11_Q1_ans: {
    type: String
  },
  level_11_Q2_ans: {
    type: String
  }
});

export const PlayeGamesModel = mongoose.model<PlayerGamesDocument>('playersgame', playeGameSchema);
