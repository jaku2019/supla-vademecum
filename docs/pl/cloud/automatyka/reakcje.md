---
layout: doc
lastupdated: true
---

# Reakcje

Reakcje to moduł tzw. logiki. Umożliwia automatyczne wykonanie akcji na wybranym kanale po spełnieniu ustalonego warunku. Aby dodać reakcję należy wejść w widok kanału w Cloudzie i kliknąć przycisk `Utwórz nową reakcję`. W zależności od funkcji kanału wyświetlą się możliwe wyzwalacze reakcji (np. dla kanału  czujnika temperatury: _Kiedy temperatura osiągnie określoną wartość_). Po ustawieniu wyzwalacza należy wybrać, na czym ma zostać wykonana akcja. Mogą to być:
* **Kanały** - wykonaj wybraną akcję, na jaką pozwala dany kanał (np. włącz, wyłącz, przełącz, otwórz, zamknij itd.)
* **Grupy kanałów** - wykonaj wybraną akcję, na jaką pozwala dana grupa kanałów
* **Sceny** - uruchom, przerwij albo przerwij i uruchom wybraną scenę
* **Harmonogramy** - włącz lub wyłącz harmonogram
* **Wyślij powiadomienie** - ustaw wysłanie powiadomienia
* **Inne - publikuj do integracji** - wyświetla wykonanie akcji w integracji. Może się przydać np. przy wyzwalaniu akcji w zintegrowanym przez MQTT Home Assistancie.

:::danger <i/>
Reakcje działają w oparciu o Clouda. Jeśli urządzenie biorące udział w reakcji straci połączenie z Cloudem (np. wskutek wyłączenia Wi-Fi), to reakcja nie uruchomi się.
:::

Przycisk `Włączone` służy do manualnej aktywacji/dezaktywacji reakcji - kiedy jest ustawiony na wyłączone (szary przełącznik z “grzybkiem” w prawo reakcja nie będzie aktywna).

W sekcji `Warunki aktywności` użytkownik ma możliwość ustawienia, kiedy reakcja ma być aktywna. Może to być 


1. Zakres czasu, w którym działa
2. Harmonogram, czyli wybrane dni i godziny aktywności
3. W oparciu o długość dnia, czyli w zależności od wschodu/zachodu słońca.

:::tip <i/>
Jeśli zostanie ustawiony więcej niż jeden warunek aktywności, to reakcja będzie aktywna tylko wtedy, gdy wszystkie warunki będą spełnione jednocześnie.
:::
![Reakcje](/img/pl/cloud/automatyka/reakcje.png){data-zoomable}