							Sprawozdanie nr.4
							
1. Do zadania wykorzystano Expo. Na telefonie poprzez aplikację Expo GO.
2. Aplikacja posiada 5 ekranów. 
3. Obsługa danych wprowadzanych przez użytkownika + modale.

						Screeny aplikacji z telefonu - 1 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/1ekran.jpg)

Pierwszy ekran - "przegląd" możliwości komponentu 'TextInput':

Na tym ekranie mamy do czynienia z różnymi typami inputów.

Plik:

TextInput(1 ekran)- znajdziemy tu inputy różnego typu: 

klasyczny, 

wykropkowany(do haseł, secureTextEntry),

returnKeyType(określa jak ma być wyświetlany klucz), 

input z placeholderem(tekst wyświetlany domyślnie, przed wpisywaniem), 

input z opcją onChangeText i onSubmitEditing(onChangeText zwraca od razu wpisywany tekst do wskazanego miejsca, onSubmitEditing zwraca tekst we wskazane miejsce po wciśnięciu przycisku wyślij) i zastosowana do nich opcja onFocus

						Screeny aplikacji z telefonu - 2 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/2ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/2ekran_2.jpg)

Drugi ekran - komponenty Select

Pliki:

SelectingOptions(2 ekran) - wykorzystany komponent Select, deklaracja dwóch zmiennych do list rozwijanych z opcjami do wyboru oraz kolejne zmienne do zmiany stanów(inne opcje zależnie od wyborów), wyświetlanie wszystkiego na 2 ekranie

Select - deklaracja działania i wyglądu komponentu select

						Screeny aplikacji z telefonu - 3 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/3ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/3ekran_2.jpg)

Trzeci ekran - obsługa przełącznika 'Switch', modal z pseudolosową liczbą

Na ekranie znajduje się przełącznik Switch, który otwiera modal, na modalu wyświetlana jest pseudolosowa liczba oraz kolejny przełącznik, aby zamknąć modal.

Pliki:

EkrSwitch(3 ekran) - wykorzystuje komponent Switch, znajdziemy tu zmienne wykorzystywane do zmiany stanów, <Modal> do obsługi i wyświetlania modalu oraz <Switch>, aby użyć przełącznik switch, znajdziemy też wyrażenie do losowania pseudolosowej liczby,

Switch - deklaracja działania i wyglądu komponentu switch

						Screeny aplikacji z telefonu - 4 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/4ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/4ekran_2.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/4ekran_3.jpg)

Czwarty ekran - wybór daty i czasu oraz alert z wybranymi parametrami czasowymi

Na ekranie znajdują się dwa przyciski, jeden po wciśnięciu wyświetla kalendarz oraz po tym zegar do wyboru daty i czasu, natomiast drugi służy do wyświetlenia wybranych parametrów na alercie.

Plik:

DateTime - wyświetlanie wszystkiego opisanego wyżej, użyte komponenty DateTimePicker do daty i czasu oraz Alert do wyświetlania alertu

						Screeny aplikacji z telefonu - 5 ekran
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/5ekran.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/5ekran_2.jpg)
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/lab4/lab4_screeny/5ekran_3.jpg)

Piąty ekran - aktywny modal + pasywne powiadomienia(ToastAndroid)

Na ekranie znajduje się odnośnik do aktywnego modala, na którym wyświetlany jest element ActivityIndicator, poniżej znajduje się tekst do zliczania wciśnięć oraz tekst, który po kliknięciu wyświetli powiadomienie.

Pliki:

PassiveNotifications(5 ekran) - wykorzystując dodatkowe komponenty, wyświetlamy opisane wyżej elementy,  użycie funkcji setTimeout() na czas trwania Promise(w tym czasie wyświetlany aktywny modal) 
Notification - komponent, określający działanie i własności powiadomienia(ToastAndroid)
Acitivity - komponent, który określa wygląd i działanie modala wraz z własnościami, razem z elementem AcitivityIndicator
