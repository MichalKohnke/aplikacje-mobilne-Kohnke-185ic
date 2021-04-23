							Sprawozdanie nr.6
							
1. Do zadania wykorzystano Expo. Na telefonie poprzez aplikację Expo GO.
2. Aplikacja posiada 6 ekranów. 
3. Obsługa obrazów + tryb offline.

						Screeny aplikacji z telefonu - 1 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen1.jpg)

Pierwszy ekran - komponent Image, ładowanie dwóch obrazków:

Użycie tego komponentu pozwala wyświetlić obrazy, w tym przypadku jeden wyświetlony za pomocą właściwości 'uri', a drugi z użyciem metody require().

Plik:

LoadingImage(1 ekran) - sposób z 'uri' wykorzystuje adres do zdjęcia(https wymagane), zaś w sposobie z require() podajemy lokalną sciezkę do pliku. 

						Screeny aplikacji z telefonu - 2 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen2.jpg)

Drugi ekran - komponent Slider, zmiana rozmiaru obrazka:

Plik:

Resizing(2 ekran):
-poprzez useState ustawiamy domyślną wielkość obrazka,
-komponent Slider pozwala na bieżąco modyfikować wymiary zdjęcia za pomocą suwaka, posiada wartości minimumValue i maximumValue

						Screeny aplikacji z telefonu - 3 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen3.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen4.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen5.jpg)

Trzeci ekran - leniwe ładowanie obrazka oraz renderowanie wybranego zestawu ikon

Pliki:

LazyLoading(3 ekran) - wykorzystuje poniższe komponenty, wyświetlając przycisk, który załaduje nam "leniwie" obraz oraz poniżej wybrany zestaw ikon za pomocą komponentu Picker, wykorzystując ikony zdefiniowane i pogrupowane w pliku icon-names.json 

LazyImage - obsługuje leniwe ładowania obrazka

Button - definiuje wygląd i działanie przycisku

						Screeny aplikacji z telefonu - 4 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen6.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen7.jpg)

Czwarty ekran - detekcja łączności z siecią

Plik:

StateNetwork(4 ekran) - wykorzystuje komponent NetInfo, dzięki któremu możemy sprawdzić stan połączenia z siecią("Connected", gdy jesteśmy podłączeni przez WiFi oraz "Disconnected" w przeciwnym wypadku) 

						Screeny aplikacji z telefonu - 5 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen8.jpg)

Piąty ekran - obsługa zapisu danych aplikacji za pomocą AsyncStorage

Pliki:

StoringData(5 ekran) - możemy wprowadzić dane i zapisać je za pomocą przycisku 'Add' lub wyczyścić dane przyciskiem 'Clear' 

Button2 - definiuje wygląd i działanie przycisku

						Screeny aplikacji z telefonu - 6 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen9.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab6/lab6_screeny/screen10.jpg)

Szósty ekran - obsługa synchronizacji danych aplikacji

Pliki:

Synchronizing(6 ekran) - wyświetlenie przełączników, zdefiniowanie komunikatu zapisu danych offline, przeprowadzone zmiany w trybie offline pozostaną zapamiętane, gdy z powrotem będziemy online

store - zajmuje się obsługą stanu przełączników oraz stanu połączenia z siecią
