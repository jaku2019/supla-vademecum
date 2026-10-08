# Wsparcie
Możesz przyczynić się do rozwoju dokumentacji Supli na różne sposoby.

## 1 - zgłoszenie błędu
Możesz zgłosić błąd w sekcji `Issues` tego repozytorium.

## 2 - edycja istniejących dokumentów
Aby edytować istniejącą stronę kliknij `Edytuj na GitHubie` (link po prawej stronie każdego rozdziału). Link przeniesie Cię do widoku wybranego pliku na tym repozytorium. Dokonaj edycji pliku i wybierz `Commit changes...`, a następnie krótko opisz wprowadzone zmiany. Następnie kliknij `Propose changes`. Twoja edycja zostanie zweryfikowana i opublikowana na stronie.

## Edycja w Pages CMS (bez znajomości Markdowna)
Tekst, zdjęcia i nowe podstrony można edytować w przeglądarce w [Pages CMS](https://pagescms.org). W tym celu potrzebujesz dostępu do tego repo - napisz do mnie, a wyślę Ci zaproszenie do edycji. 

1. Otwórz [app.pagescms.org/jaku2019/supla-vademecum/cms](https://app.pagescms.org/jaku2019/supla-vademecum/cms) – pracujemy na gałęzi **`cms`**, nie na `main`.
2. W menu po lewej wybierz stronę (grupa **Strony**) albo sekcję (**Automatyka**, **Kanały**, **Integracje**).
3. Każde `Save` to osobny commit na gałęzi `cms`. Na stronie zmiany pojawią się dopiero po zatwierdzeniu przez któregoś z administratorów (Pull Request `cms` → `main`).

**Nowa strona** – w sekcji wybierz pozycję „podstrony” / „typy kanałów” i dodaj wpis. Z tytułu powstaje adres strony (np. „Nowy czujnik” → `nowy-czujnik/index.md`), więc wybierz go starannie. Pole **Kolejność w menu** decyduje o pozycji w menu bocznym (mniejsza liczba = wyżej; bez numeru strona trafia na koniec sekcji). Strona sama pojawi się jako karta na stronie sekcji – podtytuł i ikonę karty ustawisz w polach **Opis na karcie** i **Ikona na karcie**. Nowych sekcji nie da się dodać z CMS.

**Zdjęcia** – "obrazek" w pasku edytora. Okno wyboru otwiera folder strony lub sekcji; nazwa pliku zostanie zamieniona na bezpieczną (bez spacji i polskich znaków). Po wstawieniu zmień opis zdjęcia – domyślnie jest nim nazwa pliku.

**Czego edytor nie obsługuje** (znika po zapisie): podkreślenie (używaj pogrubienia), przypisy z gwiazdką `\*` (napisz zwykłe zdanie), kod wewnątrz linku. Linii w nawiasach `{{< … >}}` / `{{% … %}}` (galerie, karty, rozwijane odpowiedzi) oraz znaczników `[!TIP]`, `[!WARNING]` itp. nie zmieniaj – edytuj tylko tekst wokół nich.

Po każdym zapisie GitHub sprawdza, czy strona się buduje (zakładka `Actions`, „Build check”). Czerwony krzyżyk oznacza błąd, np. odwołanie do usuniętego zdjęcia.

## 3 - dodanie nowego rozdziału strony
Aby dodać do strony coś zupełnie nowego, utwórz Forka tego repozytorium - GitHub stworzy jego kopię na Twoim koncie.

Strona zbudowana jest w [Hugo](https://gohugo.io) z motywem [Hextra](https://imfing.github.io/hextra/). Każdy rozdział to osobny katalog w `content/cloud/` (tzw. *page bundle*) zawierający plik `index.md` oraz zdjęcia używane na tej stronie, np.:

```
content/cloud/lokalizacje/
├── index.md
├── szczegoly.png
└── utworz.png
```

Każdy plik `index.md` zaczyna się od:

```yaml
---
title: Tytuł strony
weight: 13   # kolejność w menu bocznym
---
```

Po dodaniu pliku wybierz `Contribute` &rarr; `Open Pull request`. Twoje zmiany zostaną sprawdzone i opublikowane na stronie.

## Jak dodać zdjęcie
Umieść plik w katalogu rozdziału (obok `index.md`) i wstaw go w tekście samą nazwą pliku:

```md
![Opis zdjęcia](szczegoly.png)
```

Każde zdjęcie w treści można powiększyć kliknięciem – nie trzeba nic dodawać.

Kilka zdjęć można pokazać jako galerię (z powiększeniem i przewijaniem):

```md
{{< gallery type="carousel" >}}
  {{< gallery-item src="utworz.png" caption="Utwórz nową lokalizację" >}}
  {{< gallery-item src="zapisz.png" caption="Zapisz" >}}
{{< /gallery >}}
```

## Ramki z uwagami
```md
> [!TIP]
> Wskazówka

> [!NOTE]
> Informacja

> [!WARNING] Własny tytuł
> Uwaga

> [!CAUTION]
> Ostrzeżenie
```

Karty z linkami do wszystkich podstron sekcji (na stronie `_index.md` sekcji; tytuł karty z `linkTitle`/`title`, podtytuł z `description`, ikona z `icon` we frontmatterze podstrony):

```md
{{< podstrony >}}
```

Rozwijana odpowiedź (np. w FAQ):

```md
{{% details title="Odpowiedź" closed="true" %}}
Treść
{{% /details %}}
```

# Uruchomienie testowe
Wymagane: [Hugo extended](https://gohugo.io/installation/) (≥ 0.146) oraz [Go](https://go.dev/dl/) – motyw Hextra jest pobierany jako moduł Hugo.

```
hugo server
```

Strona będzie dostępna pod adresem `http://localhost:1313/supla-vademecum/`.
