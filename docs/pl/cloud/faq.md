---
layout: doc
lastupdated: true
---
# FAQ - pytani i odpowiedzi

## Jak przełączyć moduł w tryb konfiguracji
:::details Odpowiedź
### Moduły firmy Zamel/Nice:
<ins>Sposób 1:</ins>
Przytrzymaj przycisk CONFIG przez min 5 sek, aż dioda zacznie szybko migać.

<ins>Sposób 2:</ins>
Jeśli do modułu podłączony jest łącznik dzwonkowy, przytrzymaj go przez min 5 sek lub naciśnij go 10x w krótkich odstępach czasu.
Jeśli do modułu podłączony jest zwykły łącznik, przełącz go 10x w krótkich odstępach czasu.

<ins>Sposób 3:</ins>
cloud.supla.org *

Sposób przełączenia SRW-01 w tryb konfiguracji przy użyciu standardowego przycisku widoczny na początku filmiku:
[ZAMEL SRW-01 Aktualizacja oprogramowania](https://youtu.be/al6R-Q65aP4)

### Ściemniacz Varilight:
<ins>Sposób 1:</ins>
Wciśnij i przytrzymaj pokrętło przez min 5 sek, aż podświetlenie pokrętła zacznie szybko migać.

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
Od wersji firmware-u >=2.8.48 możliwe jest przełączenie modułu w tryb konfiguracji z poziomu cloud.supla.org
:::

## Jak uaktualnić moduł firmy Zamel/Nice/Varilight/Heatpol
:::details Odpowiedź
Procedura aktualizacji:
1. Podłącz moduł do cloud.supla.org (powinien być widoczny w aplikacji)
2. Przełącz moduł w tryb konfiguracji Jak przełączyć w tryb konfiguracji
3. Połącz się z siecią WiFi rozpoczynającą się od nazwy "ZAMEL-..."
4. Otwórz stronę http://192.168.4.1
5. Ustaw "Firmware update" na "YES"
6. Zapisz
7. Uruchom ponownie moduł np. poprzez krótkie naciśnięcie przycisku `CONFIG`

W przypadku SRW-01 zapoznaj się z poniższym materiałem video.
[ZAMEL SRW-01 Aktualizacja oprogramowania](https://youtu.be/al6R-Q65aP4)

*) jeśli aktualizacja z jakiegoś powodu nie przeszła to kolejną próbę możesz wykonać dopiero po odczekaniu minimum 30 min.
:::

## Jak sterować centralnie roletami
:::details Odpowiedź
Sterowanie centralne można zrealizować na trzy sposoby:

1. Za pośrednictwem aplikacji Supla - po dotknięciu ikony symbolizującej trzy kropki, która jest widoczna w prawej górnej części ekranu.
Wcześniej należy utworzyć grupę rolet z poziomu cloud.supla.org
2. Za pośrednictwem dedykowanego przycisku podłączonego do modułu wyzwalacza akcji np. Zamel RNW-01.
Ustawiając odpowiednie akcje na cloud.supla.org można wskazać grupę rolet, która będzie otwierana/zamykana po naciśnięciu przycisku
3. Istniejące przyciski sterujące pojedynczymi roletami również mogą pełnić funkcję przycisku centralnego. Przykładowo, jeśli uaktualnisz oprogramowanie modułu Zamel SRW-01 do wersji min. 2.8.38, moduł zyska funkcje tzw. wyzwalacza akcji co pozwoli na ustawienie tzw. wielo-klików. Dzięki temu poza sterowaniem pojedynczą roletą można zmienić tak zachowanie przycisku by np. po jego przytrzymaniu zamknęły się lub otworzyły wybrane rolety.
:::

## Dlaczego nie mogę otworzyć bramy z Google Home
:::details Odpowiedź
Aby sterowanie modułem bramowym z Supli w Google Home działało poprawnie, kanał sterujący bramą musi być powiązany z prawidłowo działającym czujnikiem otwarcia. Więcej informacji znajdziesz w rozdziale Kanał otwierania bramy.
:::