FROM node:alpine

# Cria diretório da aplicação
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando default (sobrescrito no docker-compose)
CMD ["npm", "run", "dev"]