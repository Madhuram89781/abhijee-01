FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

ENV PORT=3231
ENV MONGO_URI=mongodb://mongo:27017/eduapp

EXPOSE 3231

CMD ["npm", "start"]
