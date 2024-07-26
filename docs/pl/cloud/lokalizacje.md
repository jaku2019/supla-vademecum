---
layout: doc
prev:
  text: 'Smartfony'
  link: '/pl/cloud/smartfony'
next:
  text: 'Identyfikatory dostępu'
  link: '/pl//cloud/identyfikatory-dostepu'
---
# Lokalizacje
Lokalizacje to zbiory, do których można przypisywać wybrane kanały oraz grupy kanałów. 

Wyświetlają się one w aplikacji SUPLA w postaci kaskadowo ułożonych list. Istnieje możliwość przypisania poszczególnych lokalizacji do różnych identyfikatorów dostępu :one:.
![szczegóły](/img/pl/cloud/lokalizacje/szczegoly.png){data-zoomable}

Nową lokalizację można utworzyć klikając przycisk `Utwórz nową lokalizację` znajdujący się w prawym górnym rogu. Istnieje również możliwość edycji istniejących lokalizacji, której można dokonać wybierając daną lokalizację z listy. Dokonane zmiany należy zatwierdzić przyciskiem `Zapisz zmiany`.

<script setup>
import { useData } from 'vitepress'
const base = 'https://raw.githubusercontent.com/jaku2019/supla-vademecum/main/docs/public/'
const srcImgs = [
  {
    link: `${base}img/pl/cloud/lokalizacje/utworz.png`,
    description: 'Utwórz nową lokalizację',
  },
  {
    description: 'Szczegóły - edycja',
    link: `${base}img/pl/cloud/lokalizacje/szczegoly.png`
  },
  {
    description: 'Zapisz',
    link: `${base}img/pl/cloud/lokalizacje/zapisz.png`
  },
]

</script>

<many-pictures :srcImgs='srcImgs' :lazy='true' />