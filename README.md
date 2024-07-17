# Wsparcie
Możesz przyczynić się do rozwoju dokumentacji Supli na różne sposoby.

## 1 - edycja istniejących dokumentów
Aby edytować istniejącą stronę kliknij przycisk `Edytuj stronę na GitHubie` (dostępny na dole każdego rozdziału strony). Link przeniesie Cię do widoku wybranego pliku na tym repozytorium. Dokonaj edycji pliku i wybierz `Commit changes...`, a następnie krótko opisz wprowadzone zmiany. Następnie kliknij `Propose changes`. Twoja edycja zostanie zweryfikowana i opublikowana na stronie.

## 2 - dodanie nowego rozdziału strony
Aby dodać do strony coś zupełnie nowego, utwórz Forka tego repozytorium - GitHub stworzy jego kopię na Twoim koncie. Dzięki temu możesz dodać tekst. Pliki z tekstem zapisane są w formacie markdown `.md` i przechowywane są w lokalizacji `/docs/img/pl/cloud`. Po dodaniu pliku wybierz `Contribute` &rarr; `Open Pull request`. Twoje zmiany zostaną sprawdzone i opublikowane na stronie.

## Jak dodać zdjęcie
Zdjęcia przechowywane są w lokalizacji `/docs/public/pl/cloud`. Po wgraniu pliku do wskazanego folderu, możesz umieścić je w tekście, np. `![nazwa_zdj](/img/pl/cloud/wprowadzenie/supla_diagram_2.png)`. W nawiasie kwadratowym znajduje się nazwa zdjęcia, a w okrągłym - jego dokładna lokalizacja wraz z nazwą pliku (począwszy od /img/.).

# Uruchomienie testowe
Możesz pobrać to repozytorium i uruchomić stronę na własnym komputerze poleceniem`npm run docs:dev`.
Strona powinna być dostępna na `http://localhost:5173`.
