FROM node:14-alpine
# Ustawienie folderu roboczego na /app
WORKDIR /app 
# Skopiowanie plików package do folderu roboczego
COPY package*.json ./
# Zainstalowanie zależności
RUN npm install
# Skopiowanie reszty plików do folderu roboczego 
COPY . .
# Ustawienie portu na 3000 i autora
ENV PORT=3000 \
    AUTHOR="Kacper Staniek" 
# Otworzenie portu 3000
EXPOSE 3000
# Healthcheck sprawdzający co 30 sekund, czy nawiązywane jest połączenie
HEALTHCHECK --interval=30s --timeout=10s \
    CMD curl -f http://localhost:3000 || exit 1

CMD [ "npm", "start" ]
