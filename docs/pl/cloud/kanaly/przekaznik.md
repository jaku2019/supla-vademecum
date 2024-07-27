---
layout: doc
lastupdated: tru
---
## Przekaźnik


### Otwieranie furtki

Funkcja otwieranie furtki umożliwia sterowanie impulsem, tzn. załączanie przekaźnika na krótki, ustawiany w Cloudzie czas, po naciśnięciu przycisku `Otwórz`

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Czas załączenia przekaźnika** - czas, na jaki przekaźnik ma się załączyć (długość impulsu przekaźnika)
* **Czujnik otwarcia** - istnieje możliwość wybrania czujnika, który monitoruje stan furtki i gdy jest otwarta pokazuje furtkę jako otwartą (bez niego nie da się sprawdzić faktycznego stanu furtki)

<table>
  <tr>
   <td>
<strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Otwórz
   </td>
  </tr>
</table>


Dostępne zakładki: `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`


### Otwieranie/zamykanie bramy wjazdowej

Funkcja otwieranie/zamykanie bramy wjazdowej umożliwia sterowanie impulsem, tzn. załączanie przekaźnika na krótki, ustawiany w Cloudzie czas. Dodatkowo umożliwia sparowanie dwóch czujników otwarcia, dzięki czemu może rozróżniać stan bramy (otwarty, częściowo otwarty, zamknięty). Poza tym ma kilka usprawnień, które umożliwią zautomatyzowanie bramy.

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Czas załączenia przekaźnika** - czas, na jaki przekaźnik ma się załączyć (długość impulsu przekaźnika). Wymagana długość impulsu zależy od napędu
* **Czujnik otwarcia** - czujnik (np. kontaktron) sprawdzający stan pełnego otwarcia bramy (zwarty tylko gdy brama całkowicie otwarta)
* **Czujnik pośredniego otwarcia** - czujnik (np. kontaktron) sprawdzający stan częściowego otwarcia bramy (zwarty tylko gdy brama zamknięta)
* **Liczba prób otwarcia** - po zleceniu otwarcia bramy system poczeka 60 sekund, aby sprawdzić czy brama się otworzyła. Jeśli nie, to ponowi operację. Wybrany parametr określa maksymalną liczbę prób ponowienia polecenia przez system. Zaleca się, aby ustawić weryfikację stanu bramy na 5
* **Liczba prób zamknięcia **- po zleceniu zamknięcia bramy system poczeka 60 sekund, aby sprawdzić czy brama się zamknęła. Jeśli nie, to ponowi operację. Wybrany parametr określa maksymalną liczbę prób ponowienia polecenia przez system. Zaleca się, aby ustawić weryfikację stanu bramy na 5

!Jeśli Twoje czujniki działają odwrotnie niż przedstawiono powyżej, to pamiętaj, że w ich ustawieniach możesz włączyć odwróconą logikę



* **Sposób weryfikacji** - aktywny - pierwsza zmiana stanu czujnika na docelowy przerywa ponawianie prób, pasywny - raz na 60s sprawdzany jest stan czujnika, ponawianie przerwane jest w momencie, gdy czujnik osiągnie docelowy stan
* **Zamykaj automatycznie** - włączenie spowoduje automatyczne zamykanie bramy po zadanym czasie
* **Zamknij po** - ustawienie czasu od otwarcia, po jakim brama ma się zamknąć; możliwe opóźnienie o maksymalnie 1 minutę
* **Harmonogram aktywności** - opcjonalne ustawienie dni tygodnia i godzin, w których automatyczne zamykanie bramy ma być aktywne
* **Ustawienia integracji** - ustawienie widoczności i działania bramy w Google Home, więcej na ten temat w dziale Funkcje Clouda.

!Uwaga Dla poprawnego działania integracji z Google Home musi być zainstalowany <span style="text-decoration:underline;">przynajmniej</span> czujnik otwarcia bramy.

!Ze względu na wysoką jakość i niezawodność jako czujnik otwarcia forumowicze polecają Satela B-3.

!Jeśli nie wiesz jak podłączyć moduł bramowy do swojego napędu, sprawdź forum.supla.org


<table>
  <tr>
   <td colspan="4" ><strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Otwórz
   </td>
   <td>Zamknij
   </td>
   <td>Otwórz / zamknij
   </td>
   <td>Skopiuj stan z innego kanału
   </td>
  </tr>
</table>


Dostępne zakładki: `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`


### Otwieranie/zamykanie bramy garażowej

Funkcja otwieranie/zamykanie bramy garażowej umożliwia sterowanie impulsem, tzn. załączanie przekaźnika na krótki, ustawiany w Cloudzie czas. Dodatkowo umożliwia sparowanie dwóch czujników otwarcia, dzięki czemu może rozróżniać stan bramy (otwarty, częściowo otwarty, zamknięty). Poza tym ma kilka usprawnień, które umożliwią zautomatyzowanie bramy.

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Czas załączenia przekaźnika** - czas, na jaki przekaźnik ma się załączyć (długość impulsu przekaźnika). Wymagana długość impulsu zależy od napędu
* **Czujnik otwarcia** - czujnik (np. kontaktron) sprawdzający stan pełnego otwarcia bramy (zwarty tylko gdy brama całkowicie otwarta)
* **Czujnik pośredniego otwarcia** - czujnik (np. kontaktron) sprawdzający stan częściowego otwarcia bramy (zwarty tylko gdy brama zamknięta)
* **Liczba prób otwarcia** - po zleceniu otwarcia bramy system poczeka 60 sekund, aby sprawdzić czy brama się otworzyła. Jeśli nie, to ponowi operację. Wybrany parametr określa maksymalną liczbę prób ponowienia polecenia przez system. Zaleca się, aby ustawić weryfikację stanu bramy na 5
* **Liczba prób zamknięcia **- po zleceniu zamknięcia bramy system poczeka 60 sekund, aby sprawdzić czy brama się zamknęła. Jeśli nie, to ponowi operację. Wybrany parametr określa maksymalną liczbę prób ponowienia polecenia przez system. Zaleca się, aby ustawić weryfikację stanu bramy na 5

!Jeśli Twoje czujniki działają odwrotnie niż przedstawiono powyżej, to pamiętaj, że w ich ustawieniach możesz włączyć odwróconą logikę



* **Sposób weryfikacji** - aktywny - pierwsza zmiana stanu czujnika na docelowy przerywa ponawianie prób, pasywny - raz na 60s sprawdzany jest stan czujnika, ponawianie przerwane jest w momencie, gdy czujnik osiągnie docelowy stan
* **Zamykaj automatycznie** - włączenie spowoduje automatyczne zamykanie bramy po zadanym czasie
* **Zamknij po** - ustawienie czasu od otwarcia, po jakim brama ma się zamknąć; możliwe opóźnienie o maksymalnie 1 minutę
* **Harmonogram aktywności** - opcjonalne ustawienie dni tygodnia i godzin, w których automatyczne zamykanie bramy ma być aktywne
* **Ustawienia integracji** - ustawienie widoczności i działania bramy w Google Home, więcej na ten temat w dziale Funkcje Clouda.

!Uwaga Dla poprawnego działania integracji z Google Home musi być zainstalowany <span style="text-decoration:underline;">przynajmniej</span> czujnik otwarcia bramy.

!Ze względu na wysoką jakość i niezawodność jako czujnik otwarcia forumowicze polecają Satela B-3.

!Jeśli nie wiesz jak podłączyć moduł bramowy do swojego napędu, sprawdź forum.supla.org


<table>
  <tr>
   <td colspan="4" ><strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Otwórz
   </td>
   <td>Zamknij
   </td>
   <td>Otwórz / zamknij
   </td>
   <td>Skopiuj stan z innego kanału
   </td>
  </tr>
</table>


Dostępne zakładki: `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`


### Otwieranie drzwi

Funkcja otwieranie drzwi umożliwia sterowanie impulsem, tzn. załączanie przekaźnika na krótki, ustawiany w Cloudzie czas, po naciśnięciu przycisku `Otwórz`

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Czas załączenia przekaźnika** - czas, na jaki przekaźnik ma się załączyć (długość impulsu przekaźnika)
* **Czujnik otwarcia** - istnieje możliwość wybrania czujnika, który monitoruje stan drzwi gdy są otwarte pokazuje ich stan jako otwarte (bez niego nie da się sprawdzić faktycznego stanu drzwi)

<table>
  <tr>
   <td>
<strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Otwórz
   </td>
  </tr>
</table>


Dostępne zakładki: `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`


### Włącznik zasilania

Włącznik zasilania to standardowy kanał przekaźnika. Można go sparować z wybranym kanałem pomiarowym.

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Powiązany kanał pomiarowy** - dodanie licznika energii jako powiązanego kanału pomiarowego połączy wybrane kanały w aplikacji SUPLA. Licznik energii będzie widoczny w szczegółach kanału w aplikacji
* **Ustawienia integracji** - ustawienie widoczności i działania bramy w Google Home, więcej na ten temat w dziale Funkcje Clouda.

<table>
  <tr>
   <td colspan="4" >
<strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Włącz
   </td>
   <td>Wyłącz
   </td>
   <td>Przełącz
   </td>
   <td>Skopiuj stan z innego kanału
   </td>
  </tr>
</table>


Dostępne zakładki: `Reakcje`, `Wyzwalacze akcji*`, `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`

*Wyzwalacze akcji są dostępne dla tego kanału jeśli został on powiązany z przyciskiem w oprogramowaniu urządzenia


### Włącznik światła

Włącznik światła jest podobny w działaniu do kanału włącznika zasilania z tą różnicą, że dodaje możliwość podglądu łącznego czasu świecenia żarówki w aplikacji SUPLA.

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Powiązany kanał pomiarowy** - dodanie licznika energii jako powiązanego kanału pomiarowego połączy wybrane kanały w aplikacji SUPLA. Licznik energii będzie widoczny w szczegółach kanału w aplikacji
* **Ustawienia integracji** - ustawienie widoczności i działania bramy w Google Home, więcej na ten temat w dziale Funkcje Clouda.

<table>
  <tr>
   <td colspan="4" >
<strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Włącz
   </td>
   <td>Wyłącz
   </td>
   <td>Przełącz
   </td>
   <td>Skopiuj stan z innego kanału
   </td>
  </tr>
</table>


Dostępne zakładki: `Reakcje`, `Wyzwalacze akcji*`, `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`

*Wyzwalacze akcji są dostępne dla tego kanału jeśli został on powiązany z przyciskiem w oprogramowaniu urządzenia


### Automat schodowy

Automat schodowy daje możliwość ustawienia automatycznego wyłączania przekaźnika.

<span style="text-decoration:underline;">Konfiguracja:</span>



* **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
* **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
* **Czas załączenia przekaźnika** - ustaw czas, po jakim przekaźnik ma się wyłączyć (czas mierzony jest wewnątrz urządzenia, odliczanie zaczyna się po włączeniu kanału) - maksymalnie 2h (7200s)
* **Powiązany kanał pomiarowy** - dodanie licznika energii jako powiązanego kanału pomiarowego połączy wybrane kanały w aplikacji SUPLA. Licznik energii będzie widoczny w szczegółach kanału w aplikacji
* **Ustawienia integracji** - ustawienie widoczności i działania bramy w Google Home, więcej na ten temat w dziale Funkcje Clouda.

<table>
  <tr>
   <td colspan="4" >
<strong>Akcje</strong>
   </td>
  </tr>
  <tr>
   <td>Włącz
   </td>
   <td>Wyłącz
   </td>
   <td>Przełącz
   </td>
   <td>Skopiuj stan z innego kanału
   </td>
  </tr>
</table>


Dostępne zakładki: `Reakcje`, `Wyzwalacze akcji*`, `Harmonogramy`, `Grupy kanałów`, `Sceny`, `Linki bezpośrednie`

*Wyzwalacze akcji są dostępne dla tego kanału jeśli został on powiązany z przyciskiem w oprogramowaniu urządzenia
