# aplikacje-mobilne-Kohnke-185ic
# Autor: Michał Kohnke

						   	Sprawozdanie nr.1

						  Screen aplikacji z telefonu
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab1/lab1_screeny/appka.jpg)

							Opis
1. Do zadania wykorzystano Expo. Na telefonie poprzez aplikację Expo GO.
2. W konstruktorze przypisane zostały operacje, które można wykonać(również ich ułożenie w aplikacji) jak i pole wynikowe i pole do obliczeń.
3. Do obliczeń wykorzystywana jest funkcja eval, która potrafi ocenić wpisywane wyrażenie, w wyniku której powstaje wartość liczbowa.
4. Funkcja validate() - odpowiedzialna za sprawdzenie wykorzystywanego znaku.
5. Zaś funkcja operate() już wykorzystuje i działa na wcześniej zadeklarowanych operacjach ustawiając je w odpowiednim miejscu w wyrażeniu.
6. Funkcja render to już tworzenie widoku dla elementów kalkulatora na zasadzie wierszy i kolumn.
7. Znajdziemy również styles - dostosowanie widoku, wielkość czcionki, rozmieszczenie, kolory itp.

							Sprawozdanie nr.2

						  Screeny aplikacji z telefonu
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki2/lab2_screeny/1ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki2/lab2_screeny/2ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki2/lab2_screeny/3ekran.jpg)

							Opis
1. Do zadania wykorzystano Expo. Na telefonie poprzez aplikację Expo GO.
2. Każda strona jest napisana w osobnym pliku, zaś app.js obsługuje ich deklarację i poruszanie się pomiędzy nimi.
3. App.js zawiera: 
	createNavigator - obsługa ekranów, sposobu nawigacji po między nimi oraz ich rozmieszczenia jak i domyślnie wyświetlanej strony(initialRouteName)
	Platform - możliwość ustawienia przykładowo nawigacji pod konkretną platformę(Android, iOS)
	createDrawerNavigator/createBottomTabNavigator - konkretne metody(paski, listy itp.) poruszania się po stronach, pierwszy to nawigacja na dolnym pasku, 	drugi to wysuwana z lewej strony lista 
4. W plikach SpreadOp.js, RestPam.js oraz Hook.js znajdziemy zawartość stron, oparte na komponencie View, Text do wyświetlania treści, można też użyć opcji navigationOptions do ustalenia tytułu strony
5. Plik styles.js to style, wygląd, dostosowany dla każdej strony z konkretnymi odniesieniami.
