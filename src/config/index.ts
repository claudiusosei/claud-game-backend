import config from '@/types/common/config';
import pkg from '../../package.json';

require('dotenv').config();

const CONFIG: any = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.authors,
    HOST: process.env.APP_HOST,
    BASE_URL: process.env.API_BASE_URL,
    PORT: process.env.PORT || 4001,
    ENV: process.env.NODE_ENV
  },
  DB: {
    URL: process.env.MONGODB_URL
  }
};

export default CONFIG;
