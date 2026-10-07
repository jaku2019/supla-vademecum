---
title: "Kanały ogólnego przeznaczenia (KPOP i KLOP)"
linkTitle: "KPOP i KLOP"
weight: 5
---

## Ogólny kanał pomiarowy

### KPOP czy KLOP?

KPOP (kanał pomiarowy ogólnego przeznaczenia) i KLOP (kanał licznikowy ogólnego przeznaczenia) to dwa różne typy kanałów. Obydwa mają podobną konfigurację, ale KLOP jest rozbudowany o kilka dodatkowych parametrów.

Głównym przeznaczeniem KPOP są pomiary, takie jak: napięcie, temperatura, moc, wilgotność, natężenie światła, odległość itd. - wszystko co można zmierzyć.

Natomiast KLOP został stworzony z myślą o licznikach, w których często interesuje nas, o ile wzrosła/spadła dana wartość w przedziale czasowym, np. energia, ilość wody/gazu.

> [!NOTE]
> KPOP zapisuje w historii 5 wartości: wartość otwarcia, wartość zamknięcia, średnią wartość, minimalną wartość i maksymalną wartość. Dzięki temu, mimo zapisu co 10 min, użytkownik ma dostęp do większej ilości informacji o tym, co działo się z pomiarem w tym czasie.
>
> KLOP zapisuje tylko wartość licznika.

W skrócie KPOP (kanał pomiarowy ogólnego przeznaczenia) to prawdziwa gratka dla fanów rozwiązań zrób-to-sam chcących mierzyć wybrane parametry. Umożliwia szeroką konfigurację: użytkownik może dostosować niemal wszystko - od sposobu wyświetlania po formę zapisu odbieranych danych.

<ins>Konfiguracja:</ins>

- **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
- **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
- **Mnożnik** - ustaw mnożnik wartości przychodzącej do Clouda (od -2000000,000 do 2000000,000)
- **Dzielnik** - ustaw dzielnik wartości przychodzącej do Clouda (od -2000000,000 do 2000000,000)
- **Wartość dodana** - dodaj określoną wartość do danych
- **Liczba miejsc po przecinku** - ustaw liczbę miejsc po przecinku (od 0 do 4)
- **Jednostka**:
  - wyświetlana przed wartością (np. "$" w zapisie "$ 100")
  - wyświetlana za wartością (np. "lx" w zapisie "340,23 lx")
- Możliwość wyłączenia spacji między jednostką, a wartością - osobno przed i za - ustaw, klikając w znak _ przed lub za wartością
- **Przykład** - podsumowanie ustawień i wyświetlenie przykładowej wartości
- **Interwał odświeżania** - włączenie spowoduje użycie domyślnej wartości odświeżania ustawionej w urządzeniu, jeśli wyłączone - użytkownik może zdefiniować interwał odświeżania (domyślnie 5s, można ustawić mniej lub więcej)
- **Historia**
  - **Przechowuj historię pomiarów** - włączenie spowoduje zapis historii pomiarów z interwałem 10 minut
  - **Typ wykresu** - ustaw typ wykresu: liniowy, słupkowy lub świecowy

Dostępne zakładki: `Reakcje`, `Linki bezpośrednie`, `Historia pomiarów`

<ins>Historia pomiarów:</ins>

Cloud umożliwia przeglądanie historii pomiarów ogólnego kanału pomiarowego. W zależności od wybranego typu wykresu dane mogą być prezentowane na różne sposoby.

- **Pobierz historię pomiarów** - pobierz historię pomiarów w wybranym formacie (dostępne CSV, ODS, XSLX, HTML)
- **Usuń historię pomiarów** - usuwa całą historię wybranego kanału
- **Zakresy czasu** - wybór jednego z dostępnych predefiniowanych zakresów czasu
- **Agregacja** - gęstość jednostek na osi poziomej
- **←** - przesuń wstecz na osi czasu
- **Od/Do** - wybór zakresu dat na podstawie kalendarza
- **→** - przesuń dalej (później) na osi czasu
- **+/-** - poszerzenie/zawężenie zakresu czasu
- **OK** - zatwierdź wybór zakresu dat kalendarza
- **Pobierz SVG/Pobierz PNG** - pobierz widoczny fragment wykresu w wybranym formacie

> [!NOTE]
> Najechanie na wykres kursorem pokaże dokładną wartość i datę odpowiedniego pomiaru.
>
> Zaznaczenie obszaru (przytrzymaj lewy przycisk myszy i przejdź po wykresie) odpowiednio zawęzi wyświetlany zakres czasu.

## Kanał licznikowy ogólnego przeznaczenia

W skrócie KLOP to prawdziwa gratka dla fanów rozwiązań zrób-to-sam chcących mierzyć wybrane parametry. Obok KPOP jest drugim typem kanału ogólnego przeznaczenia i posiada inną konfigurację zapisu historii pomiarów. Umożliwia szeroką konfigurację: użytkownik może dostosować niemal wszystko - od sposobu wyświetlania po formę zapisu odbieranych danych.

<ins>Konfiguracja:</ins>

- **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
- **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
- **Mnożnik** - ustaw mnożnik wartości przychodzącej do Clouda (od -2000000,000 do 2000000,000)
- **Dzielnik** - ustaw dzielnik wartości przychodzącej do Clouda (od -2000000,000 do 2000000,000)
- **Wartość dodana** - dodaj określoną wartość do danych i określ, czy ma zostać uwzględniona w historii
- **Liczba miejsc po przecinku** - ustaw liczbę miejsc po przecinku (od 0 do 4)
- **Jednostka**:
  - wyświetlana przed wartością (np. $ w zapisie $ 100)
  - wyświetlana za wartością (np. V w zapisie 240,53 V)
- Możliwość wyłączenia spacji między jednostką, a wartością - osobno przed i za - ustaw, klikając w znak _ przed lub za wartością
- **Przykład** - podsumowanie ustawień i wyświetlenie przykładowej wartości
- **Interwał odświeżania** - włączenie spowoduje użycie domyślnej wartości odświeżania ustawionej w urządzeniu, jeśli wyłączone - użytkownik może zdefiniować interwał odświeżania (domyślnie 5s, można ustawić mniej lub więcej)
- **Historia**
  - **Przechowuj historię pomiarów** - włączenie spowoduje zapis historii pomiarów z interwałem 10 minut
  - **Typ wykresu** - ustaw typ wykresu: liniowy lub słupkowy
- **Rodzaj licznika**
  - **Zawsze rosnący** - wartość licznika może tylko rosnąć. Cloud oblicza tylko przyrosty (dodatnie). Małe spadki (<10% wartości) są traktowane jako drobny błąd licznika i pokazywane jako przyrost 0, większe spadki są traktowane jako reset licznika do 0 (taki sposób pomiaru jest zaimplementowany w licznikach energii i impulsów)
  - **Zawsze malejący** - wartość licznika może tylko maleć. Cloud oblicza tylko spadki (przyrosty ujemne). Małe wzrosty (<10% wartości) są traktowane jako drobny błąd licznika i pokazywane jako przyrost 0, większe wzrosty są traktowane jako reset licznika do 0.
  - **Rosnący i malejący** - wartość licznika może rosnąć i spadać. Cloud oblicza przyrosty (dodatnie)  i spadki (ujemne).
- **Wypełniaj brakujące pomiary** - włączenie spowoduje wypełnianie brakujących danych; np. gdy urządzenie było offline przez 2h i się połączy, to wykresy po równo rozkładają zużycie w czasie, gdy urządzenie było offline.
- **Resetuj licznik** - usuwa całą historię pomiarów licznika

Dostępne zakładki: `Reakcje`, `Linki bezpośrednie`, `Historia pomiarów`

<ins>Historia pomiarów:</ins>

Cloud umożliwia przeglądanie historii pomiarów ogólnego kanału pomiarowego. W zależności od wybranego typu wykresu dane mogą być prezentowane na różne sposoby.

- **Pobierz historię pomiarów** - pobierz historię pomiarów w wybranym formacie (dostępne CSV, ODS, XSLX, HTML)
- **Usuń historię pomiarów** - usuwa całą historię wybranego kanału
- **Zakresy czasu** - wybór jednego z dostępnych predefiniowanych zakresów czasu
- **Agregacja** - gęstość jednostek na osi poziomej
- **←** - przesuń wstecz na osi czasu
- **Od/Do** - wybór zakresu dat na podstawie kalendarza
- **→** - przesuń dalej (później) na osi czasu
- **+/-** - poszerzenie/zawężenie zakresu czasu
- **OK** - zatwierdź wybór zakresu dat kalendarza
- **Pobierz SVG/Pobierz PNG** - pobierz widoczny fragment wykresu w wybranym formacie

> [!NOTE]
> Najechanie na wykres kursorem pokaże dokładną wartość i datę odpowiedniego pomiaru.
>
> Zaznaczenie obszaru (przytrzymaj lewy przycisk myszy i przejdź po wykresie) odpowiednio zawęzi wyświetlany zakres czasu.
