---
title: Integruj i twórz z SUPLĄ
linkTitle: Integruj i twórz
layout: strona
motyw: zolty
description: Połącz SUPLĘ z Home Assistant, korzystaj z MQTT i REST API, uruchom własny serwer albo twórz własne urządzenia. SUPLA jest otwartą platformą – możesz korzystać z gotowych mechanizmów integracji, budować własne rozwiązania i współtworzyć projekt.
aliases: [/get-started/integrate-and-build]
przyciski:
  - { tekst: Zobacz na GitHubie, link: "https://github.com/SUPLA", ikona: github }
  - { tekst: Forum dyskusyjne, link: "https://forum.supla.org/", styl: obrys }
---

## Co chcesz zrobić?

{{< cards cols="4" >}}
  {{< card link="#home-assistant-i-mqtt" title="Home Assistant i MQTT" icon="puzzle" subtitle="Połącz SUPLĘ z Home Assistant przez MQTT. MQTT Discovery automatycznie wykrywa większość funkcji urządzeń." >}}
  {{< card link="#własne-urządzenia-z-supla-device" title="Zbuduj własne urządzenie" icon="chip" subtitle="Buduj własne urządzenia smart home z wykorzystaniem SDK supla-device." >}}
  {{< card link="#rest-api-i-oauth" title="REST API" icon="code" subtitle="Twórz aplikacje, automatyzacje i połączenia z innymi systemami przy użyciu REST API, OAuth 2.0 i MQTT." >}}
  {{< card link="#własny-serwer-supla" title="Własny serwer SUPLA" icon="server" subtitle="Uruchom własną instancję SUPLA i zarządzaj infrastrukturą we własnym środowisku." >}}
{{< /cards >}}

## Home Assistant i MQTT

SUPLA udostępnia MQTT i REST API, dzięki którym możesz łączyć urządzenia i dane z innymi systemami automatyki, aplikacjami i własnymi usługami. MQTT jest rekomendowanym, podstawowym sposobem integracji z Home Assistant. SUPLA obsługuje dwa scenariusze:

- **MQTT dla całego konta** – udostępniane przez serwer SUPLA; obejmuje urządzenia i kanały z konta i obsługuje **MQTT Discovery**,
- **lokalne MQTT** – wybrane urządzenia łączą się bezpośrednio z Twoim brokerem MQTT, bez pośrednictwa chmury.

Więcej w [FAQ](/faq#integracje-i-funkcje-zaawansowane) i w opisie [integracji w Vademecum](/cloud/integracje).

## Własne urządzenia z supla-device

**supla-device** to otwarte SDK do budowania urządzeń współpracujących z ekosystemem SUPLA – dla **ESP32**, **ESP8266**, **Arduino** i **Linuksa**. Możesz wykorzystać gotowe komponenty, przykłady i mechanizmy komunikacji zamiast budować integrację z SUPLĄ od podstaw. Biblioteka zawiera gotowe elementy m.in. dla przekaźników, przycisków, czujników i innych typowych funkcji urządzeń smart home.

Poniższy fragment pokazuje logikę prostego przełącznika Wi-Fi – przekaźnika i przycisku. [Pełny przykład](https://github.com/SUPLA/supla-device/blob/main/examples/esp/SimpleRelay/SimpleRelay.ino) zawiera również konfigurację Wi-Fi i sieci.

```cpp
#include <SuplaDevice.h>
#include <supla/control/button.h>
#include <supla/control/relay.h>

void setup() {
    auto relay = new Supla::Control::Relay(12);
    relay->setDefaultFunction(SUPLA_CHANNELFNC_POWERSWITCH);

    auto button = new Supla::Control::Button(0, true, true);
    button->addAction(Supla::TOGGLE, relay, Supla::ON_CLICK_1);

    SuplaDevice.begin();
}

void loop() {
    SuplaDevice.iterate();
}
```

{{< przyciski >}}
  {{< przycisk tekst="supla-device na GitHubie" link="https://github.com/SUPLA/supla-device" styl="obrys" ikona="github" >}}
{{< /przyciski >}}

## REST API i OAuth

REST API pozwala odczytywać stany urządzeń i kanałów, sterować obsługiwanymi funkcjami, pobierać dane pomiarowe oraz tworzyć własne aplikacje, narzędzia i integracje korzystające z konta SUPLA. Dostęp może być autoryzowany przy użyciu **OAuth 2.0**, a dokumentacja API jest dostępna w formacie **OpenAPI**.

{{< przyciski >}}
  {{< przycisk tekst="Dokumentacja API" link="https://svr1.supla.org/api-docs/docs.html" styl="obrys" ikona="document-text" >}}
{{< /przyciski >}}

## Własny serwer SUPLA

Chcesz samodzielnie zarządzać infrastrukturą? Możesz uruchomić własną instancję SUPLA we własnym środowisku. Zalecaną podstawą jest projekt **supla-docker**, który uruchamia wymagane komponenty przy użyciu Docker Compose.

Własny serwer daje większą kontrolę nad infrastrukturą i danymi, ale oznacza również przejęcie odpowiedzialności za: własną infrastrukturę i domenę, aktualizacje i monitoring, certyfikaty TLS, kopie zapasowe i odtwarzanie oraz bezpieczeństwo serwera.

> [!WARNING]
> Nie zakładaj, że wszystkie zewnętrzne usługi będą działać na prywatnej instancji dokładnie tak samo jak w oficjalnej chmurze. Niektóre funkcje mogą wymagać dodatkowych kluczy, certyfikatów lub konfiguracji.

{{< przyciski >}}
  {{< przycisk tekst="supla-docker na GitHubie" link="https://github.com/SUPLA/supla-docker" styl="obrys" ikona="github" >}}
{{< /przyciski >}}

## Usługi i narzędzia SUPLA

{{< cards cols="2" >}}
  {{< card link="https://cloud.supla.org/" title="SUPLA Cloud" icon="cloud" subtitle="Oficjalna chmura SUPLA do zarządzania kontem, urządzeniami i automatyzacjami." >}}
  {{< card link="https://call.supla.io/" title="Zadzwoń do SUPLI" icon="phone" subtitle="Steruj urządzeniami przez telefon, także bez aplikacji – np. otwórz bramę, uruchom podlewanie lub włącz światło, dzwoniąc na wybrany numer." >}}
  {{< card link="https://icons.supla.io/" title="SUPLA Icons" icon="color-swatch" subtitle="Twórz i udostępniaj własne ikony oraz przypisuj je do kanałów i urządzeń." >}}
  {{< card link="https://scripts.supla.io/" title="SUPLA Scripts" icon="terminal" subtitle="Skrypty do zaawansowanej logiki, stopniowo zastępowane przez sceny, harmonogramy, reakcje i powiadomienia w SUPLA Cloud." >}}
{{< /cards >}}

## SUPLA jest open source

Kod źródłowy głównych elementów platformy jest publicznie dostępny. Możesz go analizować, uruchamiać, modyfikować i współtworzyć zgodnie z licencjami poszczególnych projektów.

{{< cards cols="3" >}}
  {{< card link="https://github.com/SUPLA/supla-device" title="supla-device" icon="chip" subtitle="SDK do budowy urządzeń IoT / smart home (Arduino, ESP32, ESP8266, Linux) · C++" >}}
  {{< card link="https://github.com/SUPLA/supla-cloud" title="supla-cloud" icon="cloud" subtitle="Aplikacja webowa do zarządzania · PHP, Symfony, JavaScript, Vue.js" >}}
  {{< card link="https://github.com/SUPLA/supla-core" title="supla-core" icon="server" subtitle="Główny serwer komunikacji · C++" >}}
  {{< card link="https://github.com/SUPLA/supla-docker" title="supla-docker" icon="cube" subtitle="Rekomendowane rozwiązanie do self-hostingu · Docker" >}}
  {{< card link="https://github.com/SUPLA/supla-android" title="supla-android" icon="device-mobile" subtitle="Natywna aplikacja na Androida · Java, Kotlin" >}}
  {{< card link="https://github.com/SUPLA/supla-ios" title="supla-ios" icon="device-mobile" subtitle="Natywna aplikacja na iOS · Swift, Objective-C" >}}
{{< /cards >}}

### Technologie

| Obszar | Technologie |
| --- | --- |
| Oprogramowanie urządzeń | C/C++ (dominujący język), ESP-IDF, Arduino IDE, PlatformIO, Visual Studio Code |
| Serwer | C++ (supla-core), PHP/Symfony i JavaScript/Vue.js (supla-cloud), MySQL/MariaDB, TimescaleDB (dane historyczne), Docker |
| Aplikacje klienckie | Java i Kotlin (Android), Objective-C i Swift (iOS), C++ (biblioteki klienckie) |

## Współtwórz SUPLĘ

Możesz zgłaszać błędy, proponować zmiany, tworzyć pull requesty albo rozwijać własne projekty wykorzystujące SUPLĘ. Na forum spotykają się użytkownicy, programiści, hobbyści i osoby tworzące własne urządzenia oraz integracje.

{{< przyciski >}}
  {{< przycisk tekst="SUPLA na GitHubie" link="https://github.com/SUPLA" ikona="github" >}}
  {{< przycisk tekst="Odwiedź forum" link="https://forum.supla.org/" styl="obrys" >}}
{{< /przyciski >}}
