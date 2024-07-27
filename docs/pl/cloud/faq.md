---
layout: doc
lastupdated: true
---
# FAQ - pytania i odpowiedzi

## Jak przełączyć moduł w tryb konfiguracji?
:::details Odpowiedź
### Moduły firmy Zamel/Nice:
<ins>Sposób 1:</ins>

Przytrzymaj przycisk `CONFIG` przez min. 5 sek, aż dioda zacznie szybko migać.

<ins>Sposób 2:</ins>

Jeśli do modułu podłączony jest łącznik dzwonkowy, przytrzymaj go przez min. 5 sek lub naciśnij go 10x w krótkich odstępach czasu.
Jeśli do modułu podłączony jest zwykły łącznik, przełącz go 10x w krótkich odstępach czasu.

<ins>Sposób 3:</ins>


cloud.supla.org *
Sposób przełączenia SRW-01 w tryb konfiguracji przy użyciu standardowego przycisku widoczny na początku filmiku:
[ZAMEL SRW-01 Aktualizacja oprogramowania](https://youtu.be/al6R-Q65aP4)
### Ściemniacz Varilight:
<ins>Sposób 1:</ins>

Wciśnij i przytrzymaj pokrętło przez min. 5 sek, aż podświetlenie pokrętła zacznie szybko migać.

<ins>Sposób 2:</ins>

cloud.supla.org *
### Grzałka HeatPol Home Plus:
<ins>Sposób 1:</ins>
- Wyłącz grzałkę przytrzymując przycisk minus (na sterowniku lub pilocie)
przez 5 sekund, do wygaszenia wyświetlacza
- Ponownie przytrzymaj przycisk minus (na sterowniku lub pilocie) przez
5 sekund, aż środkowa dioda wyświetlacza zacznie szybko migać.

<ins>Sposób 2:</ins>


cloud.supla.org *
:::warning *
Od wersji firmware-u >=2.8.48 możliwe jest przełączenie modułu w tryb konfiguracji z poziomu cloud.supla.org.
:::

## Jak uaktualnić moduł firmy Zamel/Nice/Varilight/Heatpol?
:::details Odpowiedź
_Najnowsze wersje oprogramowania sprawdzisz na [updates.supla.org](https://updates.supla.org)._

<ins>Procedura aktualizacji:</ins>
1. Podłącz moduł do cloud.supla.org (powinien być widoczny w aplikacji)
2. Przełącz moduł w tryb konfiguracji [Jak przełączyć w tryb konfiguracji](./faq#jak-przełaczyc-moduł-w-tryb-konfiguracji)
3. Połącz się z siecią WiFi rozpoczynającą się od nazwy "ZAMEL-..."
4. Otwórz stronę http://192.168.4.1
5. Ustaw "Firmware update" na `YES`
6. Zapisz
7. Uruchom ponownie moduł np. poprzez krótkie naciśnięcie przycisku `CONFIG`.

W przypadku SRW-01 zapoznaj się z materiałem wideo: 
[ZAMEL SRW-01 Aktualizacja oprogramowania](https://youtu.be/al6R-Q65aP4)

:::danger *
Jeśli aktualizacja z jakiegoś powodu nie przeszła, to kolejną próbę możesz wykonać dopiero po odczekaniu minimum 30 min.
:::
## Jak otwierać/zamykać głosowo bramę za pośrednictwem Siri bez instalacji Home Assistanta?
:::details Odpowiedź
1. Zaloguj się na cloud.supla.org
2. Kliknij `Automatyka`->`Linki bezpośrednie`
3. Utwórz nowy link bezpośredni
4. W dozwolonych akcjach zaznacz `Otwórz` i `Zamknij`
5. Skopiuj link z zakładki `Otwórz` i z zakładki `Zamknij`
6. Zapisz zmiany
![Generowanie linku](/img/pl/cloud/faq/skroty_link.png){data-zoomable}

7. Otwórz aplikację Skróty na swoim urządzeniu z iOS i utwórz nowy skrót klikając `+`
![Utwórz skrót](/img/pl/cloud/faq/skroty1.png){data-zoomable}
8. Dotknij `Dodaj czynność`, a następnie - `WWW`
![Dodaj czynność](/img/pl/cloud/faq/skroty2.png){data-zoomable}
9. Dalej wybierz `Pobierz zawartość URL` i wklej link do otwierania bramy w pole `URL` (Metoda - `GET`). W "Pobierz zawart..." wpisz `Open the gate`
![URL](/img/pl/cloud/faq/skroty3.png){data-zoomable}
10. Zapisz zmiany i w analogiczny sposób utwórz sktót `Close the gate` z linkiem do zamykania  bramy
11. Przetestuj działanie skrótu mówiąc "Siri, open the gate" lub "Siri, close the gate".
:::
## Dlaczego nie mogę otworzyć bramy z Google Home?
:::details Odpowiedź
Aby sterowanie modułem bramowym z Supli w Google Home działało poprawnie, kanał sterujący bramą musi być powiązany z prawidłowo działającym czujnikiem otwarcia. Więcej informacji znajdziesz w sekcji Otwieranie/zamykanie bramy wjazdowej.
:::
## Mam SBW-01/02 i otrzymuję powiadomienie o otwarciu/zamknięciu bramy, nawet jak moduł traci połączenie na chwilę.
:::details Odpowiedź
Jeśli posiadasz SBW i otrzymujesz powiadomienia o otwarciu/zamknięciu bramy nawet jak na chwilę moduł traci połączenie, a brama nie zmieniła swojego położenia to musisz [zaktualizować oprogramowanie SBW](./faq#jak-uaktualnic-moduł-firmy-zamel-nice-varilight-heatpol).
:::
## Dlaczego przy zamykaniu bramy dostaję kilka powiadomień ?
:::details Odpowiedź
Jeśli ustawiono reakcję na zamknięcie bramy i przy zamknięciu otrzymywanych jest kilka powiadomień, to należy sprawdzić:

1. Czy urządzenie posiada najnowsze oprogramowanie.

Jeśli nie, zaktualizuj je do najnowszej wersji. 
:::tip <i/>
Lista aktualizacji oficjalnie wspieranych urządzeń znajduje się pod adresem https://updates.supla.org. :::

2. Czy automatyka informuje sterownik o ruchu bramy "miganiem".

Jeśli tak, to zamiast wysyłać bezpośrednio powiadomienie utwórz scenę, która wysyła powiadomienie z opóźnieniem.
Następnie utwórz reakcję, na zamknięcie bramy, która przerywa i uruchamia wcześniej utworzoną scenę.

3. Czy moduł ma sprawnie działający czujnik otwarcia.

Wymień czujnik lub napraw moduł lub zmień moduł na sprawny.

4. Czy reakcja nie została ustawiona na każdą zmianę stanu bramy.

Jeśli tak, to zastąp tę reakcję taką, która reaguje tylko na otwarcie lub tylko na zamknięcie.
:::
## Jak sterować centralnie roletami?
:::details Odpowiedź
Sterowanie centralne oparte o [`Grupy kanałów`](./automatyka/grupy-kanalow) można zrealizować na trzy sposoby:

1. Za pośrednictwem aplikacji Supla - po dotknięciu ikony trzech kropek, która jest widoczna w prawej górnej części ekranu.
Wcześniej należy utworzyć grupę rolet z poziomu cloud.supla.org
2. Za pośrednictwem dedykowanego przycisku podłączonego do modułu wyzwalacza akcji np. Zamel RNW-01.
Ustawiając odpowiednie akcje na cloud.supla.org można wskazać grupę rolet, która będzie otwierana/zamykana po naciśnięciu przycisku
3. Istniejące przyciski sterujące pojedynczymi roletami również mogą pełnić funkcję przycisku centralnego. Przykładowo, jeśli uaktualnisz oprogramowanie modułu Zamel SRW-01 do wersji min. 2.8.38, moduł zyska funkcje tzw. wyzwalacza akcji co pozwoli na ustawienie tzw. wielo-klików. Dzięki temu poza sterowaniem pojedynczą roletą można zmienić tak zachowanie przycisku by np. po jego przytrzymaniu zamknęła się lub otworzyła wybrana grupa rolet.
:::
## Jak przesiąść się na nowy router?
:::details Odpowiedź
Przy zmianie routera najwygodniej jest ustawić taką samą nazwę sieci WiFi i hasło jak w poprzednim.
Dzięki temu nie będzie trzeba zmieniać ustawień WiFi w żadnych urządzeniach, jakie dotychczas korzystały z sieci WiFi.
Jeśli jednak nazwa sieci i hasło nie mogą pozostać bez zmian, to należy zmienić ustawienia WiFi wszystkich Suplowych i niesuplowych urządzeń. Zmianę ustawień można dokonać na dwa sposoby.

<ins>Sposób 1:</ins>
- Przełącz urządzenie w tryb konfiguracji (jak to zrobić: [link](./faq#jak-przełączyć-moduł-w-tryb-konfiguracji))
- Uruchom aplikację Supla i dodaj jeszcze raz moduł za pomocą kreatora dodawania. Pamiętaj, aby nie usuwać urządzenia z Clouda.

<ins>Sposób 2:</ins>
- Przełącz urządzenie w tryb konfiguracji (jak to zrobić: [link](./faq#jak-przełączyć-moduł-w-tryb-konfiguracji))
- Połącz się z siecią WiFi rozgłaszaną przez moduł
- Otwórz stronę http://192.168.4.1
- Zmień nazwę sieci i hasło WiFi
- Zapisz i zrestartuj moduł.
:::
## Czy MEW przechowuje historię pomiarów w swojej pamięci?
:::details Odpowiedź
MEW-01 nie przechowuje historii w swojej pamięci. Pamięta wyłącznie stan poszczególnych liczników energii.

Historia pomiarów energii jest generowana i przechowywana przez Clouda. Jeśli MEW utraci połączenie z serwerem, to po przywróceniu połączenia serwer obliczy różnicę i wypełni czas niedostępności równymi częściami, które będą odpowiadały energii pobranej lub oddanej podzielonej przez czas niedostępności w 10-cio minutowych odstępach.

Załóżmy, że przed utratą połączenia stan licznika energii czynnej pobranej wynosił 100kWh.
Po przywróceniu stan licznika wynosi 106kWh.
Czas niedostępności to 60 min.

W takim przypadku na wykresie pojawi się 6 "słupków", każdy równy 1kWh.

`(106-100)/(60/10) = 1`
:::
