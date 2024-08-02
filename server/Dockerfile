FROM node

# Setting the working directory
WORKDIR /app

# Copy dependencies
COPY ./package.json .

# Install dependencies
RUN npm i

# Copy the rest of the project
COPY . .

# Build the project
RUN npm run build

# Run the app
CMD [ "npm", "start" ]
