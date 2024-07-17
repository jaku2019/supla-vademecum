---
layout: doc
prev:
  text: 'Wprowadzenie'
  link: '/pl/cloud'
next:
  text: 'Smartfony'
  link: '/pl/cloud/smartfony'
---

# Moja Supla

W sekcji `Moja Supla` wyświetlają się wszystkie urządzenia przypisane do konta Supla (urządzenie może być przypisane do jednego konta jednocześnie).


## Rejestracja urządzeń

Urządzenie można dodać do konta Supla na dwa sposoby: manualnie lub za pomocą kreatora w aplikacji mobilnej SUPLA. W przypadku tego pierwszego należy



1. Włączyć rejestrację urządzeń w Cloud
2. Uzupełnić dane na urządzeniu, które ma zostać dodane (adres serwera i inne potrzebne informacje można wyświetlić klikając logo Supla w lewym górnym rogu)
3. Uruchomić ponownie urządzenie
4. Wyłączyć rejestrację po pojawieniu się nowego urządzenia w sekcji `Moja Supla`.

:::warning <i/>
W przypadku niewyłączenia rejestracji urządzeń, dezaktywuje się ona automatycznie po upływie 24 godzin od momentu włączenia. 
:::

:::tip <i/>
Metoda manualnego wprowadzania danych może różnić się w zależności od urządzenia, jednak zazwyczaj ogranicza się do edycji kilku linijek kodu lub przełączenia sprzętu w tryb konfiguracyjny i uzupełnienia odpowiednich pól. 
:::

Większość urządzeń można jednak dodać za pomocą kreatora dodawania urządzeń w aplikacji SUPLA. W tym celu należy:
1. Uruchomić aplikację SUPLA
2. Wybrać pozycję z `Menu` -> `Dodaj urządzenie`
3. Po pojawieniu się ekranu powitalnego kliknąć `Dalej` 
4. Na ekranie wprowadzania ustawień sieci Wi-Fi wybrać sieć, do której ma zostać podłączone urządzenie. Domyślnie będzie to sieć, z jaką jest połączony telefon, można jednak wybrać dowolną z listy. Istnieje również możliwość manualnego wpisania nazwy sieci. Należy też podać hasło do sieci Wi-Fi.
5. Dalej, po wyświetleniu stosownej informacji, należy upewnić się, że urządzenie jest w trybie konfiguracyjnym. Po kliknięciu przycisku `Start` może pojawić się prośba o zalogowanie na konto Supla Cloud (poprzez podanie maila oraz hasła do Clouda) - jest to potrzebne, aby włączyć rejestrację urządzeń, jeśli nie została włączona manualnie.
6. Telefon powinien znaleźć sieć Wi-Fi emitowaną przez urządzenie. Należy w nią kliknąć i poczekać na okno podsumowania. Aplikacja powinna wyświetlać informację o dodaniu urządzenia do Clouda.

## Dane urządzenia

Przypisane do konta urządzenia wyświetlają się w formie kafelków, na których prezentują podstawowe informacje; są to:



1. **Nazwa urządzenia**
2. **GUID** - unikalny numer urządzenia
3. **AUTHKEY** - unikalny numer identyfikacyjny urządzenia
4. **WerOpr** - wersja software’u na urządzeniu 
5. **Lokalizacja**, do której przypisane jest urządzenie
6. **Stan urządzenia** - Online/Offline.

Po kliknięciu w wybrany kafelek wyświetlają się szczegółowe dane urządzenia. W górnej, zielonej sekcji planszy zawarte są podstawowe informacje dostępne na każdym urządzeniu, bez względu na funkcje jego kanałów:



1. Nazwa i status urządzenia
2. Pole do ustawienia spersonalizowanej nazwy urządzenia (zmienia nazwę urządzenia widoczną w Cloudzie)
3. GUID - unikalny numer urządzenia
4. Data rejestracji urządzenia
5. Data ostatniego połączenia urządzenia
6. Przełącznik do wyłączenia urządzenia
7. Lokalizację urządzenia - można ją zmienić klikając w kafelek i wybierając pożądaną; wybrana lokalizacja jest również domyślną lokalizacją kanałów urządzenia
8. ID dostępu, które mają przypisany dostęp do urządzenia
9. Przycisk do przełączania urządzenia w tryb konfiguracyjny - urządzenie zacznie rozgłaszać sieć Wi-Fi

## Kanały

Wszystko co wyświetla się na liście poniżej zielonej sekcji jest nazywane w Supli kanałami. Przekaźniki, czujniki temperatury, liczniki energii… - wszystko. Każdy kanał jest widoczny jako osobny kafelek i w zależności od możliwości urządzenia ma przypisaną odpowiednią funkcję. Przykładowo urządzenie posiadające dwa przekaźniki wyświetli w Cloudzie w swoim widoku dwa kanały przekaźnika, którym można przypisać wybrane funkcje (np. włącznik zasilania czy otwieranie bramy). Analogicznie inne rodzaje kanałów mogą mieć ustawione różne, zależne od ich konfiguracji, funkcje. 


## ID i zmiana konfiguracji kanałów

Każdy kanał posiada niepowtarzalny numer identyfikacyjny (ID), który można sprawdzić w Cloudzie. Po wejściu w szczegóły widać też numer kanału - jest to identyfikacja kolejności kanałów w danym urządzeniu. Jeśli zmieni się rodzaj danego numeru kanału, to Cloud powiadomi o konflikcie kanałów. Aby urządzenie dalej łączyło się z Cloudem, należy usunąć problematyczny kanał. W jego miejsce pojawi się nowy. Alternatywnie można usunąć całe urządzenie i zarejestrować je ponownie. W takim wypadku zostanie utracona konfiguracja historii, nazw oraz ikon kanałów wybranego urządzenia.
