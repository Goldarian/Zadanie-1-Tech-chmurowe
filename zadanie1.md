3. (max. 30%)
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
