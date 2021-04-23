							Sprawozdanie nr.7
							
1. Sprawozdanie składa się z dwóch aplikacji. 
2. Wykorzystanie bazy danych w aplikacji mobilnej.
3. Obsługa bazy danych poprzez moduł 'react-native-sqlite-storage'.
4. Folder 'pages' zawiera komponenty aplikacji.
5. Do stworzenia bazy danych do wariantu drugiego użyty program DB Browser for SQLite.

						Wariant pierwszy:
            
Tworzenie bazy w momencie uruchomienia aplikacji.
            
						Ekran główny
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_1.jpg)

						Rejestracja kontaktu - komponent NewContact
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_2.jpg)

						Aktualizowanie danych kontaktu - komponent UpdateUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_3.jpg)

						Wyświetlenie danych konkretnego kontaktu - komponent ViewUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_4.jpg) 

						Wyświetlenie danych wszystkich kontaktów - komponent ViewAllUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_5.jpg) 

						Usuwanie kontaktu - komponent DeleteUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/1_6.jpg)

            Wariant drugi:
            
            Wykorzystanie istniejącej już bazy danych user_db.db. Ścieżka do bazy(utworzone assets): lab7_2\android\app\src\main\assets\www
            
						Ekran główny
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_1.jpg)

						Wyświetlenie danych użytkowników(wprowadzonych przy tworzeniu bazy danych) - komponent ViewAllUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_3.jpg)

						Rejestracja nowego użytkownika - komponent RegisterUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_2.jpg)

						Aktualizowanie danych użytkownika - komponent UpdateUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_4.jpg) 

						Wyświetlenie danych konkretnego użytkownika(w tym przypadku zaktualizowanego chwilę wcześniej) - komponent ViewUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_6.jpg) 

						Usuwanie użytkownika - komponent DeleteUser
![alt text](https://github.com/MichalKohnke/aplikacje-mobilne-Kohnke-185ic/blob/master/labki7/lab7_screeny/2_5.jpg)


