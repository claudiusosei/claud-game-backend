#  We are using the latest Node.js distribution with Long Term Support (LTS) as of 11/04/2020.
FROM public.ecr.aws/docker/library/node:16.13

# Create app directory
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4001
CMD [ "yarn", "start" ]