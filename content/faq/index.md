---
title: Najczęściej zadawane pytania
linkTitle: FAQ
layout: strona
description: SUPLA to rozwijana w Polsce, otwarta platforma smart home. Łączy kompatybilne urządzenia różnych producentów w jednej aplikacji i pozwala sterować, monitorować oraz automatyzować dom, mieszkanie lub firmę.
---

{{< faq-szukaj >}}

## Podstawowe informacje

{{% details title="Czym jest SUPLA?" closed="true" %}}
SUPLA jest otwartą platformą smart home obejmującą kompatybilne urządzenia, aplikacje mobilne, serwery, chmurę, panel WWW oraz mechanizmy integracji.

Za pomocą SUPLI można między innymi sterować oświetleniem, roletami, bramami, furtkami, ogrzewaniem i innymi urządzeniami, a także monitorować temperaturę, wilgotność, zużycie energii, wody lub gazu. Dostępne funkcje zależą od użytych urządzeń i ich konfiguracji.

SUPLA nie jest jedną centralką ani pojedynczym produktem. Jest platformą, z którą współpracują urządzenia różnych producentów oraz rozwiązania tworzone przez społeczność.
{{% /details %}}

{{% details title="Czy muszę znać się na programowaniu lub samodzielnie budować urządzenia?" closed="true" %}}
Nie. Możesz kupić gotowe urządzenia zgodne z SUPLĄ, zainstalować aplikację i skonfigurować system przy użyciu kreatora.

Możliwość samodzielnego budowania urządzeń, korzystania z API i uruchomienia własnego serwera jest przeznaczona dla osób, które chcą bardziej rozbudować lub dostosować system. Nie jest wymagana do zwykłego korzystania z SUPLI.
{{% /details %}}

{{% details title="Czy korzystanie z SUPLI jest bezpłatne?" closed="true" %}}
Korzystanie z oficjalnej aplikacji i chmury SUPLA jest bezpłatne. Założenie konta nie wymaga opłaty ani wykupienia abonamentu.

Użytkownik ponosi natomiast koszt urządzeń, ich montażu, energii i dostępu do Internetu. Własny serwer może również wymagać zakupu sprzętu, domeny, certyfikatu lub usług hostingowych oraz samodzielnej administracji.

Warunki współpracy z producentami urządzeń są ustalane oddzielnie i nie wynikają z bezpłatnego korzystania z chmury przez użytkowników końcowych.
{{% /details %}}

{{% details title="Czy SUPLA wymaga centralki lub bramki?" closed="true" %}}
Większość urządzeń SUPLA nie wymaga dodatkowej centralki ani bramki. Urządzenia Wi-Fi lub Ethernet mogą łączyć się bezpośrednio z serwerem SUPLA.

Niektóre urządzenia korzystają jednak z dodatkowej bramki, na przykład ze względu na zastosowaną komunikację radiową albo integrację z innym standardem. Informację o wymaganej bramce należy zawsze sprawdzić w opisie i instrukcji konkretnego produktu.
{{% /details %}}

{{% details title="Czy w jednej instalacji można łączyć urządzenia różnych producentów?" closed="true" %}}
Tak. Jedną z podstawowych cech SUPLI jest możliwość obsługi kompatybilnych urządzeń różnych producentów w jednej aplikacji.

Nie oznacza to jednak, że każde urządzenie danej marki będzie zgodne z SUPLĄ. Zgodność należy sprawdzać dla konkretnego modelu.

[Zobacz kompatybilne urządzenia](/urzadzenia).
{{% /details %}}

{{% details title="Czy każde urządzenie Wi-Fi, Zigbee, Z-Wave, Matter lub oparte na ESP współpracuje z SUPLĄ?" closed="true" %}}
Nie. Sam zastosowany protokół, moduł radiowy lub mikrokontroler nie przesądza o zgodności z SUPLĄ.

Urządzenie musi mieć odpowiednie oprogramowanie albo współpracować z bramką lub integracją obsługującą SUPLĘ. Przed zakupem należy sprawdzić dokładny model w katalogu urządzeń oraz w dokumentacji producenta.
{{% /details %}}

{{% details title="Jak sprawdzić, czy urządzenie jest zgodne z SUPLĄ?" closed="true" %}}
Urządzenia oficjalnie współpracujące z SUPLĄ można sprawdzić w [katalogu urządzeń](/urzadzenia). Należy porównać dokładny model z informacjami producenta i sprzedawcy.

W Internecie można znaleźć także urządzenia przerobione na SUPLĘ oraz konstrukcje DIY. Mogą poprawnie współpracować z platformą, ale nie są oficjalnymi produktami SUPLA i zwykle nie znajdują się w katalogu. Za opis ich możliwości, sposób konfiguracji, użyte oprogramowanie i wsparcie odpowiada sprzedawca albo autor projektu.

Przed zakupem takiego urządzenia poproś sprzedawcę co najmniej o informacje:

* jaki dokładnie model i projekt oprogramowania zastosowano;
* jakie funkcje urządzenia są dostępne w SUPLI;
* czy urządzenie wymaga dodatkowej bramki;
* jak wygląda pierwsza konfiguracja, reset i aktualizacja oprogramowania;
* czy połączenie z serwerem jest szyfrowane;
* kto zapewnia instrukcję, pomoc techniczną, gwarancję i przyszłe aktualizacje.

Samo logo SUPLA lub informacja „działa z SUPLĄ” w ogłoszeniu nie oznaczają, że urządzenie jest oficjalnie wspierane przez SUPLĘ.
{{% /details %}}

{{% details title="Czy SUPLA pozwala uniezależnić instalację od jednej chmury?" closed="true" %}}
Tak. Jest to jedna z istotnych różnic między SUPLĄ a zamkniętymi systemami smart home.

Urządzenia SUPLA nie są na stałe związane z obecną oficjalną infrastrukturą SUPLA. Korzystają z otwartego protokołu i mogą zostać skonfigurowane do pracy z innym serwerem SUPLA.

Nikt nie planuje wyłączenia oficjalnych serwerów. Gdyby jednak w przyszłości oficjalna chmura przestała działać, każdy może uruchomić własny serwer albo skorzystać z usług innego dostawcy, który będzie utrzymywał kompatybilną infrastrukturę SUPLA.

W systemach zamkniętych zakończenie działania chmury producenta może oznaczać utratę części lub wszystkich funkcji urządzenia. Otwarty kod źródłowy i możliwość zmiany serwera ograniczają takie ryzyko w SUPLI.

Przeniesienie istniejącej instalacji na inny serwer nie zawsze odbywa się automatycznie. Może wymagać ponownej konfiguracji urządzeń, przeniesienia danych i samodzielnego utrzymywania infrastruktury. Niektóre usługi zewnętrzne, takie jak powiadomienia push lub asystenci głosowi, mogą wymagać dodatkowej konfiguracji albo nie działać identycznie na prywatnej instancji.
{{% /details %}}

## Uruchomienie, instalacja i codzienne działanie

{{% details title="Jak zacząć korzystać z SUPLI?" closed="true" %}}
Najprostsza ścieżka obejmuje trzy kroki:

1. pobierz aplikację SUPLA na Androida lub iOS;
2. utwórz bezpłatne konto;
3. wybierz w aplikacji opcję dodania urządzenia i wykonaj polecenia kreatora.

Szczegółowy sposób uruchomienia może zależeć od producenta i modelu urządzenia. W przypadku urządzeń montowanych w instalacji elektrycznej najpierw należy wykonać prawidłowy montaż zgodnie z instrukcją.
{{% /details %}}

{{% details title="Czy urządzenia SUPLA wymagają sieci Wi-Fi 2,4 GHz?" closed="true" %}}
Praktycznie wszystkie urządzenia SUPLA łączące się bezpośrednio przez Wi-Fi pracują wyłącznie w paśmie 2,4 GHz i wymagają sieci zgodnej ze standardami IEEE 802.11 b/g/n. Zwykle nie obsługują sieci działającej wyłącznie w paśmie 5 GHz.

Dostępne są także urządzenia z Ethernetem oraz urządzenia komunikujące się za pośrednictwem dodatkowej bramki. Dokładne wymagania należy zawsze sprawdzić w instrukcji konkretnego modelu.

Router może udostępniać pasma 2,4 i 5 GHz pod tą samą nazwą sieci. Rozdzielenie nazw nie zawsze jest potrzebne, ale bywa przydatne podczas diagnostyki problemów z konfiguracją.
{{% /details %}}

{{% details title="Czy SUPLA działa bez dostępu do Internetu?" closed="true" %}}
Podstawowe działanie urządzenia nie musi zależeć od Internetu. Fizyczne przyciski, wejścia oraz logika realizowana lokalnie przez urządzenie działają niezależnie od połączenia z serwerem. Lokalnie wykonywane są również programy tygodniowe obsługiwane przez urządzenie, na przykład w termostatach.

Sceny, harmonogramy, reakcje, powiadomienia i inne automatyzacje konfigurowane w SUPLA Cloud są funkcjami serwera. Do ich wykonania urządzenie musi mieć połączenie z właściwym serwerem SUPLA. W przypadku oficjalnej chmury oznacza to również dostęp do Internetu.

Sterowanie aplikacją przez oficjalną chmurę także wymaga połączenia telefonu i urządzenia z serwerem. Podczas awarii Internetu nadal powinny działać funkcje wykonywane lokalnie, ale nie należy oczekiwać działania funkcji serwerowych.
{{% /details %}}

{{% details title="Co zrobić po zmianie routera, nazwy sieci lub hasła Wi-Fi?" closed="true" %}}
Po wymianie routera najprościej ustawić w nim taką samą nazwę sieci Wi-Fi, hasło i zgodny sposób zabezpieczenia jak w poprzednim urządzeniu. W większości przypadków urządzenia SUPLA połączą się wtedy automatycznie i nie będą wymagały ponownej konfiguracji.

Jeżeli nazwa sieci lub hasło zostały zmienione, urządzenie musi otrzymać nowe dane sieciowe. Jeżeli urządzenie nie połączy się automatycznie, trzeba ponownie wprowadzić je w tryb konfiguracji. W zależności od modelu może to wymagać przytrzymania przycisku, użycia przycisku `CONFIG` albo wykonania określonej sekwencji czynności. Właściwą procedurę znajdziesz w instrukcji konkretnego urządzenia.

Zalecana kolejność jest następująca:

1. sprawdź zasilanie urządzenia i jego działanie z przycisku lokalnego;
2. sprawdź wymagane pasmo Wi-Fi oraz rodzaj zabezpieczeń;
3. uruchom tryb konfiguracji zgodnie z instrukcją producenta;
4. podaj nową nazwę sieci i hasło;
5. sprawdź w aplikacji, czy urządzenie wróciło do trybu online.

Nie zaczynaj od resetu fabrycznego, jeżeli urządzenie umożliwia samą zmianę konfiguracji sieci. Reset może usunąć dodatkowe ustawienia, kalibrację lub przypisanie do konta.
{{% /details %}}

{{% details title="Co zrobić, gdy urządzenie jest offline?" closed="true" %}}
Najpierw ustal, czy problem dotyczy zasilania, lokalnej sieci, dostępu do Internetu, serwera czy samego urządzenia.

Sprawdź kolejno:

* czy urządzenie ma zasilanie;
* czy działa sterowanie z lokalnego przycisku;
* jak zachowuje się dioda statusowa i co oznacza jej sposób świecenia lub migania według instrukcji urządzenia;
* czy inne urządzenia w tej samej sieci mają dostęp do Internetu;
* czy urządzenie znajduje się w zasięgu Wi-Fi;
* czy w routerze nie zmieniono nazwy sieci, hasła, pasma lub zabezpieczeń;
* czy problem dotyczy jednego urządzenia, czy całej instalacji.

Jeżeli urządzenie udostępnia lokalny portal konfiguracyjny, najpierw przełącz je w tryb konfiguracji lub parowania. Następnie połącz telefon albo komputer z siecią Wi-Fi emitowaną przez urządzenie i otwórz w przeglądarce stronę <http://192.168.4.1> lub <https://192.168.4.1>, zależnie od urządzenia. Sprawdź tam pole `Last state`. Zapisany stan lub komunikat błędu może wskazać, czy problem dotyczy połączenia z Wi-Fi, Internetem albo serwerem SUPLA.

Jeżeli urządzenie nadal jest offline, skorzystaj z instrukcji producenta. Reset fabryczny powinien być ostatnim krokiem, a nie pierwszą czynnością diagnostyczną.
{{% /details %}}

{{% details title="Czy montaż urządzenia SUPLA wymaga elektryka?" closed="true" %}}
To zależy od urządzenia. Czujnik bateryjny lub urządzenie wtyczkowe może być przeznaczone do samodzielnego uruchomienia.

Urządzenia podłączane do instalacji 230 V, rozdzielnicy, napędu bramy, systemu ogrzewania lub innych instalacji technicznych powinny być montowane zgodnie z instrukcją przez osobę mającą kwalifikacje odpowiednie do danego zakresu prac.

SUPLA jest platformą, a nie jednym rodzajem sprzętu. Zawsze należy sprawdzić napięcie zasilania, obciążalność wyjść, wymagane zabezpieczenia, schemat podłączenia i warunki gwarancji konkretnego produktu.
{{% /details %}}

## Konto, dostęp, dane i bezpieczeństwo

{{% details title="Jak udostępnić dostęp do SUPLI rodzinie lub innym użytkownikom?" closed="true" %}}
Najprościej zarejestrować aplikację SUPLA na kolejnym telefonie przy użyciu tego samego adresu e-mail i hasła.

Po rejestracji aplikacja otrzyma dostęp wynikający z pierwszego identyfikatora dostępu oraz lokalizacji przypisanych do tego identyfikatora. Nie musi to oznaczać dostępu do wszystkich lokalizacji i urządzeń na koncie.

Po zarejestrowaniu telefonu często należy zalogować się do SUPLA Cloud i przypisać aplikacji właściwy identyfikator dostępu. Można również utworzyć osobny identyfikator i przypisać do niego tylko wybrane lokalizacje.

Dzięki temu można określić, które urządzenia będą dostępne na danym telefonie. Przy udostępnianiu urządzeń otwierających bramy, furtki lub drzwi zwróć szczególną uwagę na zakres przyznanego dostępu.
{{% /details %}}

{{% details title="Jak powinien wyglądać dostęp instalatora i przekazanie instalacji właścicielowi?" closed="true" %}}
Instalator nie powinien dodawać urządzeń klienta do własnego konta ani udostępniać klientowi wyłącznie lokalizacji ze swojego konta. Urządzenia powinny od początku zostać dodane do konta należącego do właściciela instalacji.

SUPLA nie umożliwia obecnie migracji całej instalacji między kontami. Jeżeli urządzenia zostały dodane do konta instalatora, ich późniejsze przekazanie może wymagać ponownego dodania każdego urządzenia do konta klienta.

Konto SUPLA powinno od początku zostać założone przez właściciela domu, mieszkania lub firmy na jego adres e-mail. SUPLA nie udostępnia obecnie oddzielnego dostępu serwisowego dla instalatora.

Podczas konfiguracji instalator może potrzebować loginu i hasła klienta. Po zakończeniu prac właściciel powinien ustawić nowe hasło, znane wyłącznie sobie, i sprawdzić listę urządzeń, lokalizacji, identyfikatorów dostępu, aplikacji klienckich, tokenów oraz integracji.
{{% /details %}}

{{% details title="Czy można zmienić adres e-mail konta? Co zrobić przy sprzedaży domu lub mieszkania?" closed="true" %}}
Adres e-mail jest loginem konta SUPLA i obecnie nie można go zmienić.

Przy sprzedaży nieruchomości są dwie możliwości:

* przekazać nowemu właścicielowi całe istniejące konto — tylko jeśli służy ono wyłącznie tej nieruchomości i można również bezpiecznie przekazać kontrolę nad adresem e-mail używanym do logowania;
* utworzyć dla nowego właściciela nowe konto i ponownie dodać do niego wszystkie urządzenia.

Jeżeli konto korzysta z prywatnego adresu e-mail sprzedającego albo zawiera inne lokalizacje, urządzenia lub dane, do których kupujący nie powinien otrzymać dostępu, nie należy przekazywać całego konta. W takim przypadku bezpieczniejszym rozwiązaniem jest utworzenie nowego konta.

Samo przekazanie hasła do konta nie jest wystarczające, jeżeli sprzedający nadal ma kontrolę nad adresem e-mail.

Przed przekazaniem lub ponowną konfiguracją warto wyeksportować potrzebną historię pomiarów i sprawdzić powiązane integracje, identyfikatory dostępu, aplikacje klienckie oraz tokeny API. Po przekazaniu konta nowy właściciel powinien ustawić nowe hasło.
{{% /details %}}

{{% details title="Gdzie znajduje się historia pomiarów i jak ją wyeksportować?" closed="true" %}}
Historia jest dostępna dla kanałów, które zapisują pomiary, na przykład temperatury, wilgotności, energii elektrycznej, wody lub gazu.

Po zalogowaniu do SUPLA Cloud otwórz odpowiedni kanał i jego historię. Dostępne dane można pobrać między innymi w formatach CSV, ODS, XLSX i HTML. Zakres dostępnej historii zależy od typu kanału, limitów konta i konfiguracji serwera.

Przed usunięciem konta, resetem urządzenia lub migracją na inny serwer warto wyeksportować dane, które mogą być potrzebne do analiz lub rozliczeń.
{{% /details %}}

{{% details title="Czy konto SUPLA ma limity?" closed="true" %}}
Tak. Konto SUPLA ma limity funkcjonalne, limity przechowywania danych, limit żądań do API oraz inne ograniczenia chroniące usługę przed nadużyciami.

Aktualne limity oraz ich wykorzystanie sprawdzisz po zalogowaniu do **SUPLA Cloud → Konto → Pokaż moje limity**.

Znajdziesz tam między innymi informacje o limitach:

* urządzeń wejścia/wyjścia;
* identyfikatorów dostępu;
* aplikacji klienckich i OAuth;
* lokalizacji;
* grup kanałów;
* harmonogramów;
* scen;
* linków bezpośrednich;
* reakcji;
* źródeł danych;
* zdefiniowanych i wysyłanych powiadomień;
* żądań do API.

W tym samym miejscu wyświetlane są zasady przechowywania danych. Niektóre szczegółowe dane pomiarowe są cyklicznie usuwane po określonym czasie. Dotyczy to na przykład historii napięcia, natężenia i mocy z liczników energii. Panel pokazuje aktualne okresy przechowywania obowiązujące dla Twojego konta.

Obowiązują również limity dotyczące rozmiaru poszczególnych elementów konfiguracji. Przykładowo:

* grupa kanałów może zawierać maksymalnie 30 kanałów;
* harmonogram może zawierać maksymalnie 20 akcji;
* scena może zawierać maksymalnie 20 operacji.

Limity służą przede wszystkim ochronie infrastruktury przed błędami i nadużyciami, a nie ograniczaniu typowego korzystania z SUPLI. Jeżeli któryś z nich okaże się zbyt niski dla Twojej instalacji lub integracji, skontaktuj się z nami mailowo. Wskaż, który limit należy zwiększyć, podaj oczekiwaną wartość i krótko opisz zastosowanie.
{{% /details %}}

{{% details title="Jak usunąć konto SUPLA?" closed="true" %}}
Usunięcie konta można rozpocząć w ustawieniach konta w SUPLA Cloud. Operacja wymaga podania hasła i potwierdzenia przez wiadomość e-mail.

Usunięcie konta jest nieodwracalne i powoduje usunięcie danych przypisanych do konta, w tym połączonych urządzeń, skonfigurowanych kanałów, linków bezpośrednich oraz historii pomiarów. Jeżeli chcesz zachować historię pomiarów lub inne dane, wyeksportuj je przed potwierdzeniem usunięcia konta.
{{% /details %}}

{{% details title="Jak SUPLA chroni konto i dane użytkownika?" closed="true" %}}
Połączenie aplikacji z serwerem SUPLA oraz połączenia wszystkich oficjalnych urządzeń SUPLA z serwerem są szyfrowane. Bezpieczeństwo całego systemu zależy jednak również od urządzenia, jego oprogramowania, sieci Wi-Fi, hasła do konta, telefonu oraz sposobu skonfigurowania dostępów i integracji.

Dostęp administracyjny do oficjalnej infrastruktury SUPLA jest ograniczony do upoważnionych osób. Infrastruktura jest utrzymywana, aktualizowana i monitorowana, a dane są objęte mechanizmami kopii zapasowych. Kopie zapasowe służą przede wszystkim przywróceniu działania usługi po poważnej awarii. Nie należy ich traktować jako zamiennika eksportu danych użytkownika ani jako gwarancji odtworzenia pojedynczego, usuniętego elementu konta.

W przypadku własnej instancji SUPLA za bezpieczeństwo serwera, kontrolę dostępu administracyjnego, aktualizacje, certyfikaty, kopie zapasowe i możliwość odtworzenia danych odpowiada administrator tej instancji.

Nieoficjalne urządzenia DIY i przeróbki mogą działać inaczej niż urządzenia oficjalne. Typowe urządzenia SUPLA oparte na Arduino Mega i innych 8-bitowych mikrokontrolerach AVR nie obsługują szyfrowanego połączenia z serwerem. W starszych projektach DIY opartych na ESP8266 szyfrowanie również bywało domyślnie wyłączone ze względu na ograniczoną ilość pamięci RAM.

Użytkownik powinien:

* stosować unikalne i trudne hasło;
* zabezpieczyć konto e-mail używane do odzyskiwania dostępu;
* aktualizować aplikację i oprogramowanie urządzeń;
* regularnie sprawdzać identyfikatory dostępu i zarejestrowane aplikacje klienckie;
* usuwać nieużywane tokeny API i integracje;
* odpowiednio zabezpieczyć własny serwer;
* nie udostępniać danych dostępowych osobom, które nie powinny zarządzać instalacją.

Link bezpośredni należy traktować jak klucz dostępu do przypisanej funkcji. Nie zalecamy wysyłania pocztą e-mail linków bezpośrednich, które wykonują akcję, na przykład otwierają bramę. Systemy bezpieczeństwa poczty mogą automatycznie otwierać odnośniki podczas skanowania wiadomości i niezamierzenie uruchomić przypisaną akcję. Linki bezpośrednie udostępniaj wyłącznie zaufanym osobom i usuwaj je, gdy przestaną być potrzebne.
{{% /details %}}

{{% details title="Jak usunąć ostrzeżenia przeglądarki przy otwieraniu lokalnej strony urządzenia SUPLA i skąd pobrać certyfikaty CA?" closed="true" %}}
Niektóre urządzenia SUPLA udostępniają lokalny portal konfiguracyjny przez HTTPS, na przykład pod adresem <https://192.168.4.1>. Przeglądarka może wyświetlać ostrzeżenie, jeśli certyfikat SUPLA Root CA nie jest zaufany w systemie lub przeglądarce.

Aby uniknąć takich ostrzeżeń, można pobrać i zainstalować odpowiedni certyfikat SUPLA Root CA jako zaufany urząd certyfikacji.

Certyfikaty CA są również wykorzystywane do weryfikacji certyfikatów stosowanych przez urządzenia SUPLA w szyfrowanej komunikacji, między innymi podczas rejestracji i logowania urządzenia do serwera.

Certyfikaty można pobrać tutaj:

* [`supla_org_root_ca.crt`](https://supla.org/supla_org_root_ca.crt)

SHA-256: `31:5D:CD:05:73:E9:02:B8:16:0F:34:01:74:FB:9E:EE:49:1C:B3:97:40:CA:0E:DA:18:BF:29:D0:64:FB:4C:25`
* [`supla_org_private_cloud_root_ca.crt`](https://supla.org/supla_org_private_cloud_root_ca.crt)

SHA-256: `FD:6A:E5:DD:6C:08:BB:4D:51:BE:A2:76:6D:28:7F:44:C1:28:14:A6:2C:2B:85:C1:5C:5D:1F:26:21:BF:24:5B`

Instaluj certyfikaty CA wyłącznie z oficjalnej domeny SUPLA.
{{% /details %}}

{{% details title="Kto odpowiada za firmware, gwarancję i pomoc techniczną?" closed="true" %}}
Odpowiedzialność zależy od rodzaju problemu:

| Problem | Pierwszy kontakt |
| --- | --- |
| Uszkodzenie urządzenia, gwarancja, instrukcja lub firmware produktu | producent albo sprzedawca urządzenia |
| Montaż, okablowanie lub konfiguracja wykonana w ramach usługi | instalator |
| Konto lub działanie oficjalnej chmury SUPLA | wsparcie SUPLA |
| Prywatna instancja SUPLA | administrator serwera |
| Własny projekt DIY | dokumentacja, GitHub i społeczność |
| Podejrzenie podatności bezpieczeństwa | prywatny kanał bezpieczeństwa właściwego projektu lub producenta |

SUPLA integruje produkty wielu firm, dlatego nie zastępujemy serwisu gwarancyjnego producenta urządzenia.
{{% /details %}}

{{% details title="Gdzie można uzyskać pomoc?" closed="true" %}}
W przypadku gotowego urządzenia zacznij od instrukcji oraz pomocy producenta lub sprzedawcy. Problemy z montażem należy zgłaszać instalatorowi, a problemy z kontem lub oficjalną chmurą — do wsparcia SUPLA.

Na [forum SUPLA](https://forum.supla.org) możesz również bezpośrednio zadawać pytania dotyczące oficjalnych urządzeń — są tam odpowiednie działy tematyczne. Pytania dotyczące własnych urządzeń, integracji i nietypowych konfiguracji można kierować na forum albo do odpowiedniego repozytorium organizacji [SUPLA na GitHubie](https://github.com/SUPLA).

Przed zgłoszeniem przygotuj model urządzenia, wersję firmware'u i aplikacji, opis sieci, dokładny komunikat błędu oraz informację, jakie czynności zostały już wykonane.
{{% /details %}}

## Integracje i funkcje zaawansowane

{{% details title="Czy można uruchomić własny serwer SUPLA?" closed="true" %}}
Tak. SUPLA udostępnia kod źródłowy i zestaw kontenerów umożliwiający uruchomienie własnej instancji. Rekomendowaną podstawą wdrożenia jest projekt [supla-docker](https://github.com/SUPLA/supla-docker).

Własny serwer daje większą kontrolę nad infrastrukturą i danymi, ale wymaga administracji. Właściciel serwera odpowiada między innymi za aktualizacje, kopie zapasowe, certyfikaty TLS, domenę, monitoring, dostępność i bezpieczeństwo.

Nie należy zakładać pełnej zgodności wszystkich usług z publiczną chmurą bez dodatkowej konfiguracji. Powiadomienia push, asystenci głosowi i niektóre integracje mogą wymagać własnych kluczy, certyfikatów lub usług zewnętrznych.
{{% /details %}}

{{% details title="Gdzie mogę sprawdzić, czy SUPLA Cloud ma awarię?" closed="true" %}}
Aktualny status kluczowych usług i serwerów SUPLA można sprawdzić pod adresem [status.supla.org](https://status.supla.org/). Publikowane są tam również informacje o bieżących i zakończonych zdarzeniach. Na stronie można także zapisać się do subskrypcji powiadomień o zmianach statusu infrastruktury.
{{% /details %}}

{{% details title="Czy SUPLA współpracuje z Home Assistant?" closed="true" %}}
Tak. SUPLA rekomenduje MQTT jako podstawowy sposób integracji z Home Assistant.

SUPLA obsługuje dwa scenariusze MQTT: MQTT dla całego konta, udostępniane przez serwer SUPLA, oraz bezpośrednie lokalne MQTT dostępne w obsługujących je urządzeniach.

MQTT dla całego konta pozwala Home Assistant odbierać stany urządzeń i wykonywać akcje bez konfigurowania każdego urządzenia oddzielnie. Obsługuje również MQTT Discovery, dzięki któremu Home Assistant może automatycznie wykryć i utworzyć encje dla większości obsługiwanych funkcji urządzeń.

Wybrane urządzenia SUPLA mogą łączyć się bezpośrednio z brokerem MQTT działającym w sieci lokalnej.

Mogą istnieć również inne integracje wykorzystujące API SUPLA, ale nie są rozwijane ani wspierane przez projekt SUPLA.
{{% /details %}}

{{% details title="Czy SUPLA współpracuje z Google Home i Amazon Alexa?" closed="true" %}}
Tak. SUPLA współpracuje z Google Home i Amazon Alexa. Dostępne polecenia zależą od typu urządzenia, jego funkcji oraz możliwości danego asystenta.

Po połączeniu kont sprawdź, które urządzenia i akcje zostały udostępnione. Przy bramach, furtkach i drzwiach zwróć uwagę na sposób autoryzacji poleceń oferowany przez daną platformę asystenta.
{{% /details %}}

{{% details title="Czy SUPLA działa w Android Auto i Apple CarPlay?" closed="true" %}}
Tak. Aplikacja SUPLA obsługuje Android Auto oraz Apple CarPlay.

Interfejs samochodowy udostępnia wybrane funkcje przystosowane do bezpiecznej obsługi podczas jazdy. Nie należy oczekiwać dostępu do wszystkich kanałów, ustawień i funkcji dostępnych w pełnej aplikacji mobilnej.
{{% /details %}}

{{% details title="Czy w Android Auto lub Apple CarPlay widać, czy brama jest otwarta lub zamknięta?" closed="true" %}}
Nie. Obecnie interfejsy samochodowe służą do uruchamiania wybranych akcji i nie pokazują, czy brama jest otwarta lub zamknięta. W pełnej aplikacji SUPLA można sprawdzić, czy brama jest otwarta lub zamknięta, ale wymaga to odpowiedniego czujnika otwarcia.
{{% /details %}}

{{% details title="Czy SUPLA udostępnia API i MQTT?" closed="true" %}}
Tak. SUPLA Cloud udostępnia REST API i mechanizmy autoryzacji umożliwiające tworzenie integracji. Dostępny jest również MQTT, który może być wykorzystywany przez systemy automatyki, aplikacje i narzędzia takie jak Home Assistant.

Tokenom i integracjom należy nadawać tylko niezbędne uprawnienia. Nieużywane tokeny powinny być usuwane, a dane dostępowe nie powinny być umieszczane w publicznym kodzie źródłowym.
{{% /details %}}

{{% details title="Od czego zacząć tworzenie własnego urządzenia lub integracji?" closed="true" %}}
Wybierz narzędzie odpowiednie do celu:

| Cel | Zalecana ścieżka |
| --- | --- |
| Firmware własnego czujnika, przekaźnika lub sterownika | [`supla-device`](https://github.com/SUPLA/supla-device) |
| Integracja aplikacji lub systemu | REST API i OAuth |
| Integracja zdarzeniowa lub automatyka | MQTT |
| Własna kompletna instancja SUPLA | [`supla-docker`](https://github.com/SUPLA/supla-docker) |
| Rozwój panelu WWW i logiki chmurowej | [`supla-cloud`](https://github.com/SUPLA/supla-cloud) |

Do nauki i projektów hobbystycznych można wykorzystać gotowe przykłady. Projekt komercyjny wymaga dodatkowo zaplanowania aktualizacji, diagnostyki, bezpiecznego przechowywania danych, procesu produkcyjnego, zgodności prawnej oraz wieloletniego utrzymania urządzenia.
{{% /details %}}

## Pytania instalatorów

{{% details title="Czy instalator może używać jednego konta dla wielu klientów?" closed="true" %}}
Nie powinien. Konto główne powinno należeć do właściciela danej instalacji.

Używanie jednego konta instalatora dla wielu klientów powoduje, że urządzenia, konfiguracje, historia i uprawnienia różnych właścicieli są zarządzane w ramach jednego konta. Utrudnia to rozdzielenie dostępu, przekazanie instalacji, usunięcie danych oraz ustalenie odpowiedzialności za system. Zwiększa również ryzyko, że klient otrzyma dostęp do urządzeń lub danych należących do innej osoby.

SUPLA nie ma obecnie oddzielnego dostępu serwisowego dla instalatorów. Podczas konfiguracji instalator może więc potrzebować loginu i hasła klienta. Po zakończeniu prac klient powinien ustawić nowe hasło, znane wyłącznie sobie.
{{% /details %}}

{{% details title="Co należy przekazać klientowi po zakończeniu montażu?" closed="true" %}}
Klient powinien otrzymać co najmniej:

* dostęp do własnego konta oraz potwierdzenie adresu e-mail używanego jako login i do odzyskiwania dostępu;
* listę zamontowanych urządzeń i ich modeli;
* podstawowy opis lokalizacji, kanałów, scen, harmonogramów i integracji;
* instrukcje producentów i informacje gwarancyjne;
* informację, kto odpowiada za montaż, urządzenia, firmware oraz chmurę;
* opis sposobu wejścia w tryb konfiguracji i postępowania po zmianie routera;
* informację o utworzonych identyfikatorach dostępu, tokenach API i integracjach.

Ponieważ SUPLA nie ma obecnie oddzielnego dostępu serwisowego, po odbiorze instalacji klient powinien ustawić nowe hasło do konta, znane wyłącznie sobie. Instalator nie powinien przechowywać nowego hasła właściciela.
{{% /details %}}

## Pytania producentów urządzeń

{{% details title="Czy użycie kodu open source SUPLA pozwala producentowi korzystać z oficjalnej chmury, aplikacji i marki SUPLA?" closed="true" %}}
Nie. Licencja open source określa zasady korzystania z kodu źródłowego. Nie daje automatycznie prawa do korzystania z oficjalnej infrastruktury SUPLA w komercyjnych urządzeniach, oficjalnej aplikacji, katalogu produktów, wsparcia, materiałów partnerskich ani nazwy i znaków SUPLA.

Producent, który chce oferować urządzenia współpracujące z oficjalnymi usługami i marką SUPLA, powinien zawrzeć odpowiednie uzgodnienia z nami. Zakres współpracy może obejmować oprogramowanie, testy, infrastrukturę, aplikację, branding, publikację urządzenia w katalogu, aktualizacje i wsparcie.
{{% /details %}}

{{% details title="Jak wygląda rozpoczęcie współpracy producenta z SUPLĄ?" closed="true" %}}
Proces powinien rozpocząć się przed zamknięciem projektu sprzętu. Typowa współpraca obejmuje:

1. określenie funkcji produktu i grupy użytkowników;
2. uzgodnienie architektury sprzętowej i komunikacji;
3. wybór modelu korzystania z infrastruktury i aplikacji;
4. przygotowanie firmware'u oraz mechanizmu aktualizacji;
5. testy funkcjonalne, integracyjne i bezpieczeństwa;
6. przygotowanie urządzenia do wymagań prawnych i oceny zgodności;
7. ustalenie zasad używania marki, publikacji w katalogu, wsparcia i utrzymania produktu.

Wczesny kontakt ogranicza ryzyko, że gotowy sprzęt będzie wymagał kosztownych zmian przed integracją.

[Zobacz informacje dla producentów](/dla-producentow).
{{% /details %}}

{{% details title="Kto odpowiada za zgodność produktu, gwarancję i aktualizacje bezpieczeństwa?" closed="true" %}}
Producent wprowadzający urządzenie na rynek odpowiada za zgodność sprzętu i produktu z wymaganiami prawa, dokumentację, gwarancję oraz obowiązki związane z bezpieczeństwem i cyklem życia produktu.

Zakres odpowiedzialności za przygotowanie firmware'u, aktualizacje i utrzymanie integracji zależy od zawartego modelu współpracy. Powinien zostać jednoznacznie ustalony przed rozpoczęciem sprzedaży.

Samo użycie biblioteki lub kodu SUPLA nie stanowi potwierdzenia zgodności produktu z wymaganiami technicznymi i prawnymi.
{{% /details %}}

{{% details title="Czy produkt może trafić do oficjalnego katalogu urządzeń SUPLA?" closed="true" %}}
Tak, jeżeli urządzenie jest w pełni zgodne z infrastrukturą SUPLA, przeszło uzgodniony proces weryfikacji, ma jednoznacznie określonego producenta lub inny podmiot odpowiedzialny, kompletną dokumentację oraz zapewnione utrzymanie i wsparcie.

Producent odpowiada również za spełnienie wymagań prawnych właściwych dla danego rodzaju produktu oraz za wymagane oznakowanie CE.

Samo użycie otwartego kodu lub nieoficjalnego firmware'u nie oznacza automatycznego wpisania urządzenia do katalogu.
{{% /details %}}

## Pytania programistów i społeczności DIY

{{% details title="Czy można zmodyfikować kod SUPLA i zbudować własne rozwiązanie?" closed="true" %}}
Tak, w zakresie dozwolonym przez licencję konkretnego repozytorium. Kod poszczególnych komponentów jest dostępny w organizacji [SUPLA na GitHubie](https://github.com/SUPLA).

SUPLA nie ogranicza użytkownikom korzystania z własnych urządzeń DIY. Zbudowanie i dodanie własnego urządzenia do własnego konta nie wymaga naszej zgody. Zachęcamy do eksperymentowania, nauki i twórczego rozwijania automatyki — projekty hobbystyczne i społeczność DIY są ważną częścią ekosystemu.

Inaczej wygląda komercjalizacja rozwiązania. Jeżeli urządzenie lub oprogramowanie ma być sprzedawane albo oferowane klientom jako produkt lub usługa, jego twórca staje się producentem lub dostawcą rozwiązania i powinien zapoznać się z sekcją „Pytania producentów urządzeń”, w szczególności z odpowiedzią dotyczącą korzystania z oficjalnej chmury, aplikacji i marki SUPLA.

Przed wykorzystaniem kodu należy również sprawdzić licencję danego projektu oraz wynikające z niej obowiązki.
{{% /details %}}

{{% details title="Czym są GUI Generic (GG) i ZigBee2Supla?" closed="true" %}}
GUI Generic (GG) oraz ZigBee2Supla to projekty tworzone i rozwijane przez użytkowników społeczności. Nie są oficjalnymi produktami SUPLA. Nie odpowiadamy za ich działanie, kompatybilność, aktualizacje ani pomoc techniczną.

Pytania, problemy i propozycje dotyczące tych projektów należy kierować do ich autorów oraz publikować w odpowiednich działach [forum SUPLA](https://forum.supla.org). Przed użyciem warto zapoznać się z dokumentacją konkretnego projektu i ustalić, jakie urządzenia oraz funkcje są przez niego obsługiwane.

Zachęcamy do eksperymentowania i twórczego korzystania z SUPLI. Projekty społecznościowe, własne konstrukcje i przeróbki są dobrym sposobem na naukę elektroniki, programowania i automatyki.
{{% /details %}}

{{% details title="Czy własne urządzenie DIY będzie tak samo bezpieczne jak produkt komercyjny?" closed="true" %}}
Nie musi. Bezpieczeństwo zależy od projektu sprzętu, użytego frameworka, sposobu przechowywania haseł i kluczy, aktualizacji firmware'u, zabezpieczenia trybu konfiguracji oraz odporności na fizyczny dostęp do urządzenia.

Przykładowy projekt hobbystyczny może być odpowiedni do nauki lub zastosowań niekrytycznych, ale nie powinien być bez dodatkowej analizy traktowany jak gotowy produkt do sprzedaży albo element instalacji odpowiedzialnej za bezpieczeństwo ludzi i mienia.
{{% /details %}}

{{% details title="Jak zgłaszać błędy i podatności bezpieczeństwa?" closed="true" %}}
Zwykłe błędy można zgłaszać w odpowiednim repozytorium GitHub po sprawdzeniu, czy podobne zgłoszenie już nie istnieje.

Podatności bezpieczeństwa nie należy publikować od razu jako publicznego zgłoszenia. Trzeba skorzystać z prywatnej procedury opisanej w pliku `SECURITY.md` właściwego repozytorium albo z kanału bezpieczeństwa producenta urządzenia.

Zgłoszenie powinno zawierać opis problemu, wersję komponentu, sposób odtworzenia, możliwe skutki oraz — jeżeli jest to bezpieczne — propozycję rozwiązania.
{{% /details %}}

## Masz więcej pytań?

Nie możesz znaleźć odpowiedzi, której szukasz? Opisy funkcji SUPLA Cloud znajdziesz w [Vademecum](/cloud), a społeczność i zespół wsparcia pomogą w pozostałych sprawach.

{{< przyciski >}}
  {{< przycisk tekst="Napisz do pomocy technicznej" link="mailto:support@supla.org" ikona="mail" >}}
  {{< przycisk tekst="Odwiedź forum społeczności" link="https://forum.supla.org/" styl="obrys" >}}
{{< /przyciski >}}
