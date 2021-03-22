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
2. 2. Każda strona jest napisana w osobnym pliku, zaś app.js obsługuje ich deklarację i poruszanie się pomiędzy nimi.
3. App.js zawiera: 
	createNavigator - obsługa ekranów, sposobu nawigacji po między nimi oraz ich rozmieszczenia jak i domyślnie wyświetlanej strony(initialRouteName)
	Platform - możliwość ustawienia przykładowo nawigacji pod konkretną platformę(Android, iOS)
	createDrawerNavigator/createBottomTabNavigator - konkretne metody(paski, listy itp.) poruszania się po stronach, pierwszy to nawigacja na dolnym pasku, 	drugi to wysuwana z lewej strony lista 
4. W plikach SpreadOp.js, RestPam.js oraz Hook.js znajdziemy zawartość stron, oparte na komponencie View, Text do wyświetlania treści, można też użyć opcji navigationOptions do ustalenia tytułu strony
5. Plik styles.js to style, wygląd, dostosowany dla każdej strony z konkretnymi odniesieniami.

							Sprawozdanie nr.3
							
1.Do zadania wykorzystano Expo. Na telefonie poprzez aplikację Expo GO.
2.2. Aplikacja posiada 3 ekrany główne, trzeci jest podzielony na kolejne 3. 

						Screeny aplikacji z telefonu - 1 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/listcontainer.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/search.jpg)

Pierwszy ekran - sortowanie i filtrowanie danych; 100 liczb pseudolosowych:

Sortowanie poprzez strzałkę w prawym górnym rogu, filtrowanie przez wyszukiwanie(czy wpisana liczba zawiera się w którejś z wylosowanych).

Pliki do 1 ekranu:

ListContainer-główny "pojemnik", do wyświetlenia wszystkiego na ekranie i do niego podpięte są kolejne komponenty, tu znajdziemy też funkcje losowania liczb czy warunki sortowania

List - określa sposób wyświetlania listy i pobiera jej elementy, tu również podpięty jest kolejny komponent

ListControls - komponent obsługujący zmiany stanu listy(filtrowanie czy sortowanie), przekazywany do list, pobierający komponenty ListFilter i ListSort

ListFilter - komponent określający/sterujący filtrowaniem listy, tu też zdefiniowana wyszukiwarka

ListSort - podobnie jak wyżej, komponent sterujący sortowaniem listy, zdefiniowany przycisk do sortowania

						Screeny aplikacji z telefonu - 2 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/lazy.jpg)

Drugi ekran - leniwe ładowanie na przykładzie pseudolosowych liter(podpisanych numeracją)
Leniwe ładowanie działa w sposób, w którym na początku ładowana jest określona ilość danych, a gdy jest potrzeba wyświetlenia kolejnych(wykona się konkretna akcja), są one "doładowywane". 
Pliki do 2 ekranu:
ListContainerLazy - ponownie główny "pojemnik", pobiera listę i funkcję i wyświetla ekran
ListLazy - określa sposób wyświetlania listy i przekazuje do ListContainerLazy, właściwość onEndReached wykorzystana do leniwego ładowania
api - określona funkcja losowania liter(i ich numeracji) oraz ilość danych do załadowania

						Screeny aplikacji z telefonu - 3 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/first.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/second.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki3/lab3_screeny/third.jpg)

Trzeci ekran - progres krokowy, podział na 3 ekrany, elementy ActivityIndicator
Na każdym ekranie znajduje się element ActivityIndicator różnorako wystylizowany, przyciski na górze ekranu są odpowiedzialne za przenoszenie się pomiędzy stronami.
Pliki:
StepProgress - ustawienie ekranów za pomocą react-navigation, ich rozmieszczenia jak i np. domyślnej strony
First - wygląd pierwszego ekranu, element AcitivityIndicator oraz opcje navigationOptions(tytuł headera, przyciski do zmiany strony na poprzednią/kolejną)
Second - podobnie jak wyżej, odpowiednio dostosowane opcje navigationOptions pod drugi ekran oraz inaczej wystylizowany element AcitivityIndicator
Third - jak wyżej
ProgressBar - zdefiniowany pasek progresu(zmieniający się w zależności od ekranu, na którym się znajdujemy)
ProgressBarComponent - komponent definiujący pasek pod androida
