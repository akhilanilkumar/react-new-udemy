# Use an official Node.js runtime as a parent image
FROM node:latest
LABEL authors="Akhil Anilkumar"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application code to the container
COPY . .

# Build the React application (adjust this command if you use a different build tool)
RUN npm run build

# Expose a port (adjust if necessary)
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]

