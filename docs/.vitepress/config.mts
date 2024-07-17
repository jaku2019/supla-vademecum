import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pl',
  title: "Vademecum Supla",
  description: "Testowa wersja podręcznika Supla Cloud",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  base: '/supla-vademecum/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
//tłumaczenia por.: https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/es.ts
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edytuj na GitHubie'
    },
    footer: {
      message: 'Potrzebujesz pomocy? Zajrzyj na',
      copyright: '<a href="https://forum.supla.org">forum.supla.org</a>'
    },
    docFooter: {
      prev: 'Poprzednia strona',
      next: 'Następna strona'
    },
    outline: {
      label: 'Na stronie'
    },
    lastUpdated: {
      text: 'Zaktualizowano',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: 'Zmień język',
    returnToTopLabel: 'Powrót na górę',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Ciemny motyw',
    lightModeSwitchTitle: 'Przełącz na jasny motyw',
    darkModeSwitchTitle: 'Przełącz na ciemny motyw',
    notFound: {
      title: 'Nie znaleziono',
      quote: 'Lubię wracać tam gdzie byłem',
      linkLabel: 'Powrót',
      linkText: 'Powrót na główną',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Szukaj',
                buttonAriaLabel: 'Szukaj',
              },
              modal: {
                noResultsText: 'Nie znaleziono odpowiedzi',
                resetButtonTitle: 'Wyczyść wyszukiwania',
                displayDetails: 'Pokaż szczegóły',
                backButtonTitle: 'Powrót',
                footer: {
                  selectText: 'aby wybrać tekst',
                  navigateText: 'aby się poruszać',
                  closeText: 'aby zamknąć',
                  selectKeyAriaLabel: 'Wybierz',
                  navigateUpKeyAriaLabel: 'W górę',
                  navigateDownKeyAriaLabel: 'W dół',
                  closeKeyAriaLabel: 'Zamknij',
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search documents',
                buttonAriaLabel: 'Search documents',
              },
              modal: {
                noResultsText: 'No relevant results found',
                resetButtonTitle: 'Clear query conditions',
                displayDetails: 'Show Detailed Results',
                backButtonTitle: 'Go Back',
                footer: {
                  selectText: 'Choose',
                  navigateText: 'Switch',
                  closeText: 'Close',
                  selectKeyAriaLabel: 'Choose',
                  navigateUpKeyAriaLabel: 'Go Up',
                  navigateDownKeyAriaLabel: 'Go Down',
                  closeKeyAriaLabel: 'Close',
                },
              },
            },
          },
        },
      },
    },
    externalLinkIcon: true,
    nav: [
      { text: 'Supla Cloud', link: '/pl/cloud' },
      { text: 'supla.org', link: 'https://supla.org' }
    ],

    sidebar: [
      {
        items: [
          {
          },
          { text: 'Wprowadzenie',
            collapsed: false,
            items: [
              { text: 'Wstęp', link: '/pl/cloud/' },
              { text: 'FAQ', link: '/pl/cloud/faq.md' },
            ]
          },
          {
            text: 'Sekcje Clouda',
            collapsed: false,
            items: [
              { text: 'Moja Supla', link: '/pl/cloud/moja-supla.md' },
              { text: 'Smartfony', link: '/pl/cloud/smartfony.md' },
              { text: 'Lokalizacje', link: '/pl/cloud/lokalizacje.md' },
              { text: 'Identyfikatory dostępu', link: '/pl/cloud/identyfikatory.md' },
              { text: 'Automatyka',
                collapsed: true,
                items: [
                  { text: 'Harmonogramy', link: '/pl/cloud/automatyka/harmonogramy.md' },
                  { text: 'Grupy kanałów', link: '/pl/cloud/automatyka/grupy-kanalow.md' },
                  { text: 'Linki bezpośrednie', link: '/pl/cloud/automatyka/linki-bezposrednie.md' },
                  { text: 'Sceny', link: '/pl/cloud/automatyka/sceny.md' },
                  { text: 'Reakcje', link: '/pl/cloud/automatyka/reakcje.md' },
                  { text: 'Aplikacje', link: '/pl/cloud/integracje/aplikacje.md' },
                ]
              },
              { text: 'Moje konto', link: '/pl/cloud/moje-konto.md' },              
            ]
          },
          { text: 'Intergacje', link: '/pl/cloud/integracje/aplikacje.md' },
          { text: 'Kanały - lista', link: '/pl/cloud/kanaly/kanaly.md' },
          { text: 'Funkcje Clouda', link: '/pl/cloud/funkcje-clouda.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SUPLA' }
    ],
}
})

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Odniesienia',
      items: [
        { text: 'Konfiguracja strony', link: 'site-config' },
        { text: 'Konfiguracja frontmattera', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Motyw domyślny',
          base: '/pl/reference/default-theme-',
          items: [
            { text: 'Przegląd', link: 'config' },
            { text: 'Nawigacja', link: 'nav' },
            { text: 'Pasek boczny', link: 'sidebar' },
            { text: 'Strona główna', link: 'home-page' },
            { text: 'Stopka', link: 'footer' },
            { text: 'Układ', link: 'layout' },
            { text: 'Etykieta', link: 'badge' },
            { text: 'Strona grupy', link: 'team-page' },
            { text: 'Link poprzedni / następny', link: 'prev-next-links' },
            { text: 'Edytuj link', link: 'edit-link' },
            { text: 'Zaktualizowano', link: 'last-updated' },
            { text: 'Szukaj', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  pl: {
    placeholder: 'Przeszukaj stronę',
    translations: {
      button: {
        buttonText: 'Szukaj',
        buttonAriaLabel: 'Szukaj'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Wyczyść wyszukiwanie',
          resetButtonAriaLabel: 'Wyczyść wyszukiwanie',
          cancelButtonText: 'Anuluj',
          cancelButtonAriaLabel: 'Anuluj'
        },
        startScreen: {
          recentSearchesTitle: 'Historia wyszukiwania',
          noRecentSearchesText: 'Brak historii',
          saveRecentSearchButtonTitle: 'Zachowaj ostatnio wyszukiwane',
          removeRecentSearchButtonTitle: 'Wyczyść historię wyszukiwania',
          favoriteSearchesTitle: 'Ulubione',
          removeFavoriteSearchButtonTitle: 'Usuń z ulubionych'
        },
        errorScreen: {
          titleText: 'Nie znaleziono',
          helpText: 'Sprawdź połączenie z siecią'
        },
        footer: {
          selectText: 'Wybierz',
          navigateText: 'Poruszaj się',
          closeText: 'Zamknij',
          searchByText: 'Szukaj'
        },
        noResultsScreen: {
          noResultsText: 'Nie znaleziono',
          suggestedQueryText: 'Spróbuj wyszukać jeszcze raz',
          reportMissingResultsText:
            'Powinny pojawić się jakieś wyniki?',
          reportMissingResultsLinkText: 'Kliknij, aby podzielić się swoją opinią'
        }
      }
    }
  }
}
