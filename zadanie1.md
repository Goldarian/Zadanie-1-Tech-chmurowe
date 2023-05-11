**Zadanie 1 Kacper Staniek 6.3Ti**
Aby zainstalować projekt należy:
1. Pobrać repozytorium.
2. W folderze z projektem dodać nowy folder "node_modules".
3. Uruchomić program Visual Code Studio.
4. Otworzyć folder z projektem.
5. W terminalu wpisać npm init, aby pobrały się niezbędne zależności.

**3.**
Należy podać polecenia niezbędne do:
a. zbudowania opracowanego obrazu kontenera:
docker build -t zadanie1 .
b. uruchomienia kontenera na podstawie zbudowanego obrazu:
docker run -p 3000:3000 --name zad1 zadanie1
c. sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera
(patrz: punkt 1a):
Informacja pojawia się od razu po wystartowaniu serwera.
d. sprawdzenia, ile warstw posiada zbudowany obraz.
docker history zadanie1

W repozytorium znajduje się plik Przeglądarka.pmg, w którym znajduje się wynik działania.

**1. Program serwera**

const express = require('express'); //import bibliorek
const moment = require('moment-timezone');

const app = express(); //nowa instancja aplikacji Express

const PORT = 3000; // Port na którym nasłuchuje serwer

const autor = 'Kacper Staniek'; //zmienna z informacją o autorze


app.listen(PORT, () => {
  console.log(`Serwer wystartował na porcie ${PORT} przez ${autor} o godzinie ${new Date()}`); //logi
}); 

//Wyświetlenie adresu IP z datą i czasem na podstawie tego adresu
app.get('/', (req, res) => {
  const IPklienta = req.ip;
  const czas = moment().tz(moment.tz.guess()).format('MMMM Do YYYY, h:mm:ss a z');
  res.send(`Adres IP: ${IPklienta}.<br>Data i czas: ${czas}.`);
});

**2. Dockerfile**

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
