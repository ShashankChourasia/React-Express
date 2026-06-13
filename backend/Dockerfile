# Use Node.js LTS image
FROM node:18-alpine  

# Set working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first to optimize caching
COPY package.json package-lock.json ./  
RUN npm install  

# Copy the entire backend folder into the container
COPY . . 

# Set working directory to backend
WORKDIR /app 

# Expose the port the app runs on
EXPOSE 3000  

# Start the application
CMD ["node", "app.js"]
