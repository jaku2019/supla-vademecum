---
title: "Liczniki energii"
weight: 6
---

## Licznik impulsów

Niektóre liczniki generują na wyjściu impulsy, które można odczytywać odpowiednimi urządzeniami. Z kanałem licznika impulsów odczytasz impulsy z wyjścia wybranego licznika i łatwo sprawdzisz te dane w wybranej jednostce na cloud.supla.org i w aplikacji SUPLA.

### Licznik energii elektrycznej

**Konfiguracja:**

- **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
- **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
- **Jednostka** - ustaw jednostkę (domyślnie ustawione są kWh)
- **Cena za kWh** - ustaw cenę prądu z kWh potrzebną do obliczeń kosztów energii w aplikacji SUPLA
- **Waluta** - ustaw walutę potrzebną do obliczeń kosztów energii w aplikacji SUPLA

> [!WARNING]
> Obecnie Supla nie umożliwia ustawienia taryfy, więc prezentowane ceny zużytej energii są przybliżone.

- **Impulsy** - ustaw, ile impulsów jest generowanych przy pomiarze 1kWh
- **Wartość dodana** - dodaj wartość do pomiarów

> [!NOTE]
> Gdy licznik jest zakładany, wskazuje 0 - dzięki ustawieniu tej opcji można wyrównać jego wskazania z założonym licznikiem.

- **Uwzględnij wartość dodaną w historii** - zaznaczenie spowoduje dodanie ustawionej wartości do przyszłych pomiarów - może to być widoczne na wykresie jako nagły przyrost o wprowadzoną wartość

> [!NOTE]
> Zaleca się ustawiać ten parametr przy pierwszej instalacji licznika. Dla istniejących liczników najlepiej usunąć historię (zakładka `Historia pomiarów` → `Usuń historię pomiarów`) tuż po zmianie tych ustawień.

- **Powiązany kanał sterujący** - dodanie kanału sterującego połączy wybrane kanały w aplikacji SUPLA. Licznik energii będzie widoczny w szczegółach kanału w aplikacji
- **Resetuj licznik** - usuwa wszystkie dane licznika

## Licznik energii elektrycznej

Licznik pozwalający mierzyć energię elektryczną z bardziej zaawansowanymi funkcjami od impulsowego licznika energii elektrycznej.

> [!WARNING]
> Licznik energii elektrycznej zapisuje dane z minimalnym interwałem 10 sekund. Jeśli zależy Ci na większej częstotliwości pomiarów, rozważ podłączenie licznika do serwera MQTT.

**Konfiguracja:**

- **Nazwa kanału** - ustawienie własnej nazwy kanału wyświetlanej w Cloudzie i aplikacji SUPLA
- **Pokaż w urządzeniach klienckich** - wyłączenie spowoduje ukrycie kanału w aplikacji SUPLA
- **Aktywne fazy** - wybierz, które fazy mają być brane uwagę do pomiarów i zapisu danych
- **Cena za kWh** - ustaw cenę prądu z kWh potrzebną do obliczeń kosztów energii w aplikacji SUPLA
- **Waluta** - ustaw walutę potrzebną do obliczeń kosztów energii w aplikacji SUPLA
- **Powiązany kanał sterujący** - dodanie kanału sterującego połączy wybrane kanały w aplikacji SUPLA. Licznik energii będzie widoczny w szczegółach kanału w aplikacji
- **Przechowuj historię napięcia** - włączenie spowoduje zapisywanie historii napięcia
- **Przechowuj historię natężenia prądu** - włączenie spowoduje zapisywanie historii natężenia prądu
- **Przechowuj historię mocy czynnej** - włączenie spowoduje zapisywanie historii mocy czynnej

> [!WARNING]
> Supla to projekt open source utrzymywany ze środków własnych. Jeśli nie zależy Ci na zapisywaniu tych danych, pomóż zaoszczędzić cenną przestrzeń dyskową i pozostaw powyższe opcje wyłączone.

- **Wartość dodana** - ustaw wartość, jaka ma zostać dodana do poszczególnych rodzajów energii. Dzięki przełącznikowi możesz dodatkowo ustawić wartość dodaną dla każdej fazy osobno.
  - **Uwzględnij wartość dodaną w historii** - zaznaczenie spowoduje dodanie ustawionej wartości do przyszłych pomiarów - może to być widoczne na wykresie jako nagły przyrost o wprowadzoną wartość

> [!NOTE]
> Zaleca się ustawiać ten parametr przy pierwszej instalacji licznika. Dla istniejących liczników najlepiej usunąć historię (zakładka `Historia pomiarów` → `Usuń historię pomiarów`) tuż po zmianie tych ustawień.

> [!NOTE]
> Gdy licznik jest zakładany, wskazuje 0 - dzięki ustawieniu tej opcji można wyrównać jego wskazania z założonym licznikiem

- **Monitorowanie napięcia** - włączenie umożliwi zapisywanie zakresów czasu, w którym ustawione progi zostały przekroczone; historię można sprawdzić w zakładce Aberracje napięcia
  - **Próg niskiego napięcia** - ustaw minimalną wartość napięcia - gdy będzie niższe, Cloud zapisze aberrację
  - **Próg wysokiego napięcia** - ustaw maksymalną wartość napięcia - gdy będzie wyższe, Cloud zapisze aberrację

Dostępne zakładki: `Reakcje`, `Linki bezpośrednie`, `Historia pomiarów`, `Aberracje napięcia`

**Historia pomiarów:**

Cloud umożliwia przeglądanie historii pomiarów licznika energii elektrycznej.

- **Pokaż dane** - wybierz, jakie dane chcesz wyświetlić na wykresie
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
- Pod wykresem pojawi się tabela z podsumowaniem danych dla wybranego zakresu.

> [!NOTE]
> Najechanie na wykres kursorem pokaże dokładną wartość i datę odpowiedniego pomiaru.
>
> Zaznaczenie obszaru (przytrzymaj lewy przycisk myszy i przejdź po wykresie) odpowiednio zawęzi wyświetlany zakres czasu.

**Aberracje napięcia:**

Cloud umożliwia rejestrowanie i zapis tzw. aberracji napięcia.

- Pobierz historię pomiarów - eksportuje i pobiera historię do pliku .csv
- Usuń historię aberracji napięcia - usuń historię dla wybranej fazy lub wszystkich faz
- Ukryj dni bez aberracji - zaznaczenie spowoduje wyświetlenie tylko tych dni, w których wystąpiły jakieś aberracje
- Lista dni - te, w których wystąpiły aberracje są podświetlone, a te, w których nie miały miejsca - oznaczone symbolem `-[x]`
- Po wybraniu dnia na liście poniżej wyświetlą się szczegóły wszystkich aberracji w wybranym dniu.
