# Wsparcie
Możesz przyczynić się do rozwoju dokumentacji Supli na różne sposoby.

## 1 - zgłoszenie błędu
Możesz zgłosić błąd w sekcji `Issues` tego repozytorium.

## 2 - edycja istniejących dokumentów
Aby edytować istniejącą stronę kliknij `Edytuj na GitHubie` (link po prawej stronie każdego rozdziału). Link przeniesie Cię do widoku wybranego pliku na tym repozytorium. Dokonaj edycji pliku i wybierz `Commit changes...`, a następnie krótko opisz wprowadzone zmiany. Następnie kliknij `Propose changes`. Twoja edycja zostanie zweryfikowana i opublikowana na stronie.

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

Jeśli chcesz, aby zdjęcie dało się powiększyć, dodaj w **następnej linii** atrybut `{data-zoomable="true"}` (zdjęcie musi być w osobnym akapicie – z pustą linią przed nim):

```md
![Opis zdjęcia](szczegoly.png)
{data-zoomable="true"}
```

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
