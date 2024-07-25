---
layout: doc
lastupdated: true
---
# Linki bezpośrednie

Dowolny podmiot Clouda (`Kanał`, `Grupa kanałów`, `Scena` lub `Harmonogram`) może być kontrolowany za pomocą specjalnie generowanego linku bezpośredniego, umożliwiającego interakcję bez konieczności logowania na konto Supla.

Nowy link bezpośredni można utworzyć klikając przycisk `Utwórz nowy link bezpośredni` znajdujący się w prawym górnym rogu. Następnie należy wybrać podmiot (Kanał, Grupę kanałów, Scenę, Harmonogram, Wysłanie powiadomienia), dla którego link ma zostać utworzony. W żółtej ramce wyświetli się nowo utworzony link. W prosty sposób można sprawdzić jego działanie klikając w odpowiedni przycisk (otworzy się w nowej karcie i wyświetli wszystkie dozwolone akcje, jakie może wykonać). Dodając odpowiednią ścieżkę do domyślnego linku i edytując Dozwolone akcje linku można wydzielić dostęp do konkretnych akcji pomiędzy linki różniące się końcówką (np. `_/read, /turn-on, turn-off_). Istnieje możliwość dostosowania następujących opcji:

* **Podpis** - nazwa, pod jaką link wyświetla się w Cloudzie i na stronie linku
* **Włączone** - dezaktywacja skutkuje unieaktywnieniem linku. Włączenie aktywuje link
* **Dozwolone akcje*** - akcje, jakie można wywołać linkiem. Można je edytować po utworzeniu linku
* **Dla urządzeń** - pozwala na wykonanie akcji tylko przy użyciu HTTP PATCH
* **Okres działania** - link pozostanie aktywny w wybranym okresie. Nieustawienie okresu skutkuje ciągłym działaniem linku
* **Limit wykonań** - użytkownik określa liczbę razy, jaką link może zostać użyty. Można ją dostosować po utworzeniu linku.

Dokonane zmiany należy zatwierdzić przyciskiem `Zapisz zmiany`.
:::info *
dla akcji **Skopiuj stan z innego kanału** w ścieżce `copy?sourceChannelId=` po `=` należy podać ID kanału źródłowego, np. `copy?sourceChannelId=2789`.
:::

Dodatkowo istnieje możliwość podglądu, z jakim kanałem powiązany jest link oraz historia wykonań akcji linku.
![Linki bezpośrednie](/img/pl/cloud/automatyka/link_bezp.png){data-zoomable}
:::danger <i/>
Po utworzeniu linku i opuszczeniu strony zostanie on ukryty. Każdy kto zdobędzie do niego dostęp, będzie mógł wykonać zdefiniowane akcje. Usunięcie linku odbiera możliwość jego użycia.
:::
