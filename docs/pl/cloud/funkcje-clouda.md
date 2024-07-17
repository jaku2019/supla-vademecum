---
layout: doc
lastupdated: true
---
# Funkcje Clouda


## Wyzwalacze akcji

Wyzwalacz akcji umożliwia wykorzystanie przycisku lub stanu wybranego urządzenia do uruchomienia akcji związanej z dowolnym urządzeniem podłączonym do Clouda. Przykładowo użytkownik może ustawić, że dwukrotne kliknięcie przycisku podłączonego do urządzenia A (np. ROW-01) wyzwoli akcję na urządzeniu B (np. otwarcie bramy podłączonej do SBW-02).

:::warning <i/>
_Wyzwalacze mogą występować jako niezależne kanały lub być podpięte pod kanały przekaźników. Zależy to od wewnętrznych ustawień urządzenia [ZDJĘCIE]._
:::

Wyzwalacz akcji pojawia się w kartach w menu kanałów, który go obsługują. Istnieje możliwość jego konfiguracji dla następujących akcji:



* Włączenie
* Wyłączenie
* Przełączenie 1x
* Przełączenie 2x
* Przełączenie 3x
* Przełączenie 4x
* Przełączenie 5x.

:::tip <i/>
Wyzwalacze oznaczone żółtym wykrzyknikiem mają przypisaną akcję wynikającą z funkcji urządzenia. Przypisanie im innej akcji wiąże się z wyłączeniem ich lokalnej funkcji.
:::

Po wybraniu wyzwalacza należy ustawić, na czym ma zostać wykonana akcja. Mogą to być:
* **Kanały** - wykonaj wybraną akcję, na jaką pozwala dany kanał (np. włącz, wyłącz, przełącz, otwórz, zamknij itd.)
* **Grupy kanałów** - wykonaj wybraną akcję, na jaką pozwala dana grupa kanałów
* **Sceny** - uruchom, przerwij albo przerwij i uruchom wybraną scenę
* **Harmonogramy** - włącz lub wyłącz harmonogram
* **Wyślij powiadomienie** - ustaw wysłanie powiadomienia
* **Inne - publikuj do integracji** - wyświetla wykonanie akcji w integracji. Może się przydać np. przy wyzwalaniu akcji w zintegrowanym przez MQTT Home Assistancie.

:::danger <i/>
Wyzwalacze akcji działają w oparciu o Clouda. Jeśli urządzenie nie będzie miało połączenia z Cloudem, to zapisany na nim wyzwalacz nie zadziała.
:::

## Szczegółowe dane serwera

Szczegółowe dane konta potrzebne przy manualnej rejestracji niektórych urządzeń można sprawdzić klikając na logo Supli w lewym górnym rogu.


## Zmiana ikony

Aby zmienić ikonę kanału lub sceny należy kliknąć `Zmień ikonę`. Można wybrać istniejący zestaw lub przesłać własny.

Ikony powinny być przesłane w formacie PNG o wymiarach 210x156px (szerokość x wysokość). Domyślnie przysyłane są ikony dla trybu jasnego i działają zarówno w trybie jasnym, jak i ciemnym. Użytkownik ma możliwość dodania osobnych ikon dla trybu ciemnego. W tym celu wystarczy zmienić pozycję górnego suwaka na Tryb ciemny i wgrać odpowiednie pliki.

Zestawy ikon zapisywane są w Cloudzie. Istnieje możliwość ich ponownego użycia dla innych kanałów o tej samej funkcji.

:::info <i/>
Istnieje też możliwość dodania do konta ikon stworzonych przez innych użytkowników za pomocą aplikacji SUPLA Icons.
:::

## Ustawienia integracji
Supla może być zintegrowana z różnymi systemami, w tym z Alexą Amazona i Home’em Google’a. Kanały, które są obsługiwane przez powyżej wymienione integracje w polu konfiguracji wyświetlają pasek `Ustawienia integracji`. Jeśli nie ma włączonej żadnej integracji, możesz zignorować ten fragment. W przypadku, gdy jest ustawiona integracja:

### Alexa
* można ukryć wybrane kanały tak, by nie były widoczne dla Alexy

### Google Home
* można ukryć wybrane kanały tak, by nie były widoczne w Google Home
* można włączyć potwierdzenia wykonania akcji
    * **Potwierdzenie** - Google poprosi o potwierdzenie za każdym razem, gdy akcja ma zostać wywołana za jego pośrednictwem (np. włączenie światła w aplikacji Google Home)
    * **PIN** - Google poprosi o podanie kodu PIN za każdym razem, gdy akcja ma zostać wywołana za jego pośrednictwem (np. włączenie światła w aplikacji Google Home)

:::tip <i/>
Domyślnie `Potwierdzenie akcji` jest wyłączone.
:::