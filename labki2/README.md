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