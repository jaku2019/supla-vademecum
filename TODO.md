# TODO – migracja VitePress → Hugo + Hextra

Roboczy notatnik. `[x]` = zrobione, `[ ]` = do zrobienia, `[~]` = w toku / częściowo.

## Etap 1 – szkielet
- [x] Gałąź `hextra-migration`
- [x] Instalacja Hugo extended 0.167 i Go 1.27 (lokalnie, winget)
- [x] `hugo.yaml`, Hextra v0.13.0 jako moduł Hugo (`go.mod`)
- [x] `i18n/pl.yaml` – polskie tłumaczenie interfejsu Hextry (+ tytuły alertów)
- [x] Motyw: zielony kolor Supli (`assets/css/custom.css`), logo, favicon (`layouts/_partials/favicons.html`)
- [x] Polska strona 404 (`layouts/404.html`; w CI kopiowana z `/pl/404.html` do katalogu głównego)

## Etap 2 – treść
- [x] Strony → page bundle'e (`content/cloud/.../index.md` + obrazy obok), historia zachowana przez `git mv`
- [x] Frontmatter: `title`, `weight`, `linkTitle`; usunięte `layout: doc`, `lastupdated`, `prev`/`next`
- [x] Callouty `:::` → alerty GitHuba (tip→TIP, info→NOTE, warning→WARNING, danger→CAUTION; tytuł `*` zachowany jako odsyłacz)
- [x] `:::details` → `{{% details closed="true" %}}`
- [x] `<many-pictures>` → `{{< gallery type="carousel" >}}` (lokalne pliki, PhotoSwipe)
- [x] Zoom tylko dla zdjęć z `{data-zoomable}` w oryginale (39 z zoomem, 9 bez) – `layouts/_markup/render-image.html`
- [x] Tabele `<table>` w `kanaly/przekaznik` → Markdown; `<span style=underline>` → `<ins>`
- [x] Strona główna → `layout: hextra-home`
- [x] Sidebar: separatory „Wprowadzenie” / „Sekcje Clouda”; „Aplikacje” tylko pod Integracjami; literówka „Intergacje” poprawiona
- [x] Nowe strony-indeksy `cloud/automatyka/` i `cloud/integracje/` (karty z linkami) – **do przejrzenia treści**
- [x] Stary adres `/pl/cloud/kanaly/kanaly` → alias do `/pl/cloud/kanaly/`

## Etap 3 – weryfikacja i wdrożenie
- [x] Build bez błędów; skrypt sprawdzający linki i kotwice – 0 zepsutych
- [x] Przegląd w przeglądarce: strona główna, sidebar, zoom, galeria/lightbox, FAQ, alerty, dark mode, wyszukiwarka
- [ ] Przegląd na telefonie (nie udało się zmienić rozmiaru okna przeglądarki podczas testu)
- [x] Workflow GitHub Pages dla Hugo (Go + Hugo extended 0.167.0, `fetch-depth: 0`)
- [x] Usunięty VitePress: `docs/.vitepress`, `package.json`, `package-lock.json`
- [x] README – nowe instrukcje dla współtwórców
- [x] Commit na gałęzi `hextra-migration`
- [ ] Repo nie ma ustawionego `git remote` – dodać, wypchnąć gałąź, PR do `main`
- [ ] Po pierwszym deployu: sprawdzić 404, aliasy i daty „Zaktualizowano” na GitHub Pages

## Etap 4 – typy kanałów (z „Supla Cloud.docx”)
- [x] 8 stron w `content/cloud/kanaly/`: Przekaźnik, Przekaźnik x2, Ściemniacz i RGB, HVAC, KPOP i KLOP, Liczniki energii, Czujniki binarne, Czujniki pomiarowe
- [x] Menu „Kanały - lista” rozwija się do listy typów; na stronie listy – karty z linkami
- [x] Grafika histerezy z docx → `kanaly/hvac/histereza.png` (z zoomem)
- [x] Poprawione oczywiste błędy źródła (literówki, „działania bramy” przy kanałach niebędących bramą, „stanu rolety” przy oknie/markizie/ekranie, opis historii czujnika wilgotności)
- [ ] Uzupełnić brakujące opisy (komentarze `<!-- TODO -->` w `przekaznik-x2`): Kalibruj, Automatyczna kalibracja, Odwrócone sterowanie przyciskami, Dodatkowy margines czasu
- [ ] Rozdział „Żaluzje fasadowe” – pusty w docx
- [ ] Zrzuty ekranu z aplikacji SUPLA dla rolet, okna dachowego, markizy i ekranu (placeholdery `[ZDJĘCIE Z APP]` w docx)
- [ ] Sprawdzić, czy pozostałe rozdziały docx (Moja Supla, Smartfony, Automatyka, Konto, Funkcje Clouda…) nie są nowsze niż treść na stronie
- [ ] `Supla Cloud.docx` leży w katalogu repo, nie jest commitowany – zdecydować: `.gitignore` czy przenieść poza repo

## Etap 5 – Pages CMS (gałąź `cms`)
- [x] Etap 0: prototyp `.pages.yml` (Wstęp, Lokalizacje, FAQ, Kanały – lista + kolekcja Kanały), media = `content/` (zdjęcia zostają w bundle'ach)
- [x] Hook obrazków rozpoznaje ścieżki z CMS (`/cloud/...`) jako zasoby bundle'a (`layouts/_partials/zasob-tresci.html`)
- [x] Zoom dla wszystkich zdjęć (wymóg edytora)
- [x] Test „wczytaj i zapisz” w CMS → edytor **rich-text** (galerie, details, cards, alerty, tabele przetrwały)
- [x] Treść dostosowana do edytora: `<ins>` → pogrubienie (59×), przypisy `\*` → zdania, link z kodem w FAQ, lista z niewciętą kontynuacją w FAQ
- [x] Zdjęcia: domyślny folder wgrywania = katalog strony/sekcji (`options.path`), `rename: safe`; hook obsługuje też pliki w `content/`
- [x] `options.path` działa (domyślny folder = sekcja; strona może mieć zdjęcia w folderze sekcji)
- [x] Nowa strona w kolekcji powstaje jako `slug/index.md` i pojawia się w menu
- [x] Pełna konfiguracja: grupa „Strony” (8 stron stałych) + Automatyka, Kanały, Integracje (strona sekcji + podstrony), wspólne pola przez `components`
- [x] CI `build.yml`: build z `--panicOnWarning` na push do `cms` i PR do `main`; hook ostrzega o brakującym zdjęciu
- [x] README: instrukcja dla redaktorów
- [ ] Sprawdzić pełną konfigurację w CMS (grupy, komponenty pól, widok drzewa w Integracjach z podfolderem `HA/`)
- [x] Karty na stronach sekcji generowane z podstron – shortcode `{{< podstrony >}}` (`description` = podtytuł, `icon` = ikona); w CMS pola „Opis na karcie” i „Ikona na karcie”
- [ ] `gallery-item` nie rozpoznaje ścieżek `/cloud/...` – nadpisać shortcode, jeśli galerie będą edytowane w CMS
- [ ] Merge `hextra-migration` → `main`, potem `cms` → `main`; ustawić ochronę gałęzi `main` (wymagany „Build check”)

## Etap 6 – styl Supli
- [x] Tokeny z `supla-theme.scss` (rola „user”, jasny + ciemny) przepisane do `assets/css/custom.css`; pliki źródłowe w `.gitignore`
- [x] Fonty Quicksand (nagłówki) i Open Sans (tekst) hostowane lokalnie (`static/fonts`, OFL), `@font-face` w `layouts/_partials/custom/head-end.html`
- [x] Zieleń #00d151 jako kolor główny, linki #007d30 (kontrast), alerty/kod/karty/przyciski w kolorach i promieniach Supli, tło #fafbfc / #121416
- [x] Karty funkcji na stronie głównej jako kafelki Supli (pełna zieleń / tonalne w ciemnym), napis „Supla” bez obrysu, kod w tekście zielony
- [ ] Rozmiary tekstu zostawione z Hextry (16 px) – supla-cloud ma 14 px, ale to aplikacja, nie dokumentacja

## Później / propozycje
- [ ] **Optymalizacja zdjęć** – rozszerzyć `layouts/_markup/render-image.html` o przetwarzanie obrazów Hugo (WebP, resize do szerokości treści, `width`/`height`); zoom ma pokazywać oryginał. Galerie już same generują miniatury WebP.
- [x] Wszystkie zdjęcia powiększalne (`params.imageZoom.enable: true`, atrybuty `{data-zoomable}` usunięte) – decyzja z 2026-10-08, pod Pages CMS
- [x] Galerie zostają jako karuzele (`carousel`) – decyzja z 2026-10-07
- [ ] PR z `i18n/pl.yaml` do upstreamu `imfing/hextra`
- [ ] Link-checker w CI (lychee / htmltest)
- [x] Stary szkic `kanaly/przekaznik` zastąpiony nową stroną z docx, widoczną w menu jako typ kanału
- [ ] „Wstęp” (`/pl/cloud/`) jest korzeniem sekcji – nie ma go jako pozycji w sidebarze (dostępny z navbara i breadcrumbów)
- [ ] „Integracje”, „Kanały - lista”, „Funkcje Clouda” wizualnie trafiły pod separator „Sekcje Clouda” – ewentualnie dodać trzeci separator
- [x] Linie `!` z docx zamienione na alerty (`!Uwaga` → WARNING, pozostałe → NOTE/TIP)
- [ ] Strona główna: karty Supla App / supla-device / GUI Generic nie mają jeszcze linków (jak w oryginale)
- [ ] Nieużywany obraz `funkcje-clouda/moje_konto.png` (był nieużywany też w VitePressie)

## Notatki
- Hextra v0.13.0, Hugo ≥ 0.146 (lokalnie 0.167.0), Go 1.27 (`go 1.22` w go.mod).
- Zoom w Hextrze = `medium-zoom` na `[data-zoomable]`, skrypt ładowany tylko gdy strona ma `hasImageZoom` w `.Store`.
- Atrybuty pod obrazkami działają dzięki `markup.goldmark.parser.attribute.block: true` + `wrapStandAloneImageWithinParagraph: false`.
- Wspólne zdjęcia (Wstęp + Smartfony) leżą w `assets/img/wspolne/`.
