interface config {
  APP: {
    NAME: string;
    VERSION: string;
    DESCRIPTION: string;
    AUTHORS: string;
    HOST?: string;
    BASE_URL?: string;
    PORT?: string | number;
    ENV?: string;
  };
  DB: {
    URL?: string;
  };
  AUTH: {
    JWT_SECRET: string;
  };
  AUTH_SERVICE: {
    URL: string;
  };
  SMTP: {
    HOST: string;
    PORT: number;
    AUTH_USER: string;
    AUTH_PASS: string;
    FROM: string;
  };
}

export default config;
