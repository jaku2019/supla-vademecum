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

## Później / propozycje
- [ ] **Optymalizacja zdjęć** – rozszerzyć `layouts/_markup/render-image.html` o przetwarzanie obrazów Hugo (WebP, resize do szerokości treści, `width`/`height`); zoom ma pokazywać oryginał. Galerie już same generują miniatury WebP.
- [ ] Decyzja: czy wszystkie zdjęcia mają być powiększalne (wtedy `params.imageZoom.enable: true` i można usunąć atrybuty)
- [ ] Galerie: `carousel` vs `grid` – zdecydować, który układ lepiej zastępuje many-pictures
- [ ] PR z `i18n/pl.yaml` do upstreamu `imfing/hextra`
- [ ] Link-checker w CI (lychee / htmltest)
- [ ] `kanaly/przekaznik` – w starym sidebarze go nie było; teraz `sidebar.exclude: true` (ale jest w wyszukiwarce). Zdecydować, czy pokazać w menu.
- [ ] „Wstęp” (`/pl/cloud/`) jest korzeniem sekcji – nie ma go jako pozycji w sidebarze (dostępny z navbara i breadcrumbów)
- [ ] „Integracje”, „Kanały - lista”, „Funkcje Clouda” wizualnie trafiły pod separator „Sekcje Clouda” – ewentualnie dodać trzeci separator
- [ ] Treść: linie zaczynające się od `!` w `kanaly/przekaznik` (np. `!Uwaga ...`) to pewnie niedokończone uwagi – zamienić na alerty
- [ ] Strona główna: karty Supla App / supla-device / GUI Generic nie mają jeszcze linków (jak w oryginale)
- [ ] Nieużywany obraz `funkcje-clouda/moje_konto.png` (był nieużywany też w VitePressie)

## Notatki
- Hextra v0.13.0, Hugo ≥ 0.146 (lokalnie 0.167.0), Go 1.27 (`go 1.22` w go.mod).
- Zoom w Hextrze = `medium-zoom` na `[data-zoomable]`, skrypt ładowany tylko gdy strona ma `hasImageZoom` w `.Store`.
- Atrybuty pod obrazkami działają dzięki `markup.goldmark.parser.attribute.block: true` + `wrapStandAloneImageWithinParagraph: false`.
- Wspólne zdjęcia (Wstęp + Smartfony) leżą w `assets/img/wspolne/`.
