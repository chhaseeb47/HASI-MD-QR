FROM node:lts-buster

  
RUN git clone https://github.com/Faouz995/zokouqr  /root/zokouqr
WORKDIR /root/zokouqr


COPY package.json .
RUN npm i -g pm2
RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
