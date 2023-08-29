FROM node:18

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install

# Variável de ambiente para desabilitar a sandbox do Chrome 
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Instale o Chromium separadamente
RUN apt-get update && apt-get install -y chromium

# ... (parte posterior do Dockerfile)

# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]

# ... (parte anterior do Dockerfile)

