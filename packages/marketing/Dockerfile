# 1. Base image (Node.js)
FROM node:18-alpine

# 2. სამუშაო დირექტორიის შექმნა და გადართვა
WORKDIR /app

# 3. პაკეტების კოპირება და დაყენება
COPY package.json package-lock.json ./
RUN npm install

# 4. კოდის კოპირება და build
COPY . .
RUN npm run build

# 5. პორტის გახსნა (თუ საჭიროა)
EXPOSE 3000

# 6. კონტეინერის გაშვების ბრძანება
CMD ["npm", "start"]
