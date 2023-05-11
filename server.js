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
