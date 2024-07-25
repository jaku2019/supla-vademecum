---
layout: doc
prev:
  text: 'Moja Supla'
  link: '/pl/cloud/moja-supla'
next:
  text: 'Lokalizacje'
  link: '/pl/cloud/lokalizacje'
---

# Smartfony

W zakładce Smartfony można zarządzać telefonami, które za pomocą aplikacji SUPLA mają dostęp do konta. Po kliknięciu w wybrany kafelek istnieje możliwość edycji wyświetlanej w Cloudzie nazwy telefonu^1^, zmiany przypisanego identyfikatora dostępu^2^ (aby edytować, kliknij w zielony napis), wyłączenia urządzenia^3^ (tymczasowego odbioru dostępu do konta) oraz usunięcia urządzenia z konta^4^. 
![język](/img/pl/cloud/smartfony/app_szczegoly.png){data-zoomable}

Aby zarejestrować nowe urządzenie należy:

1. Włączyć rejestrację klientów
2. Uzupełnić dane konta w aplikacji SUPLA na urządzeniu mobilnym
3. Wyłączyć rejestrację klientów.

:::warning <i/>
W przypadku niewyłączenia rejestracji klientów, dezaktywuje się ona automatycznie po upływie 24 godzin.
:::
<script setup>
import { useData } from 'vitepress'
const base = 'https://raw.githubusercontent.com/jaku2019/supla-vademecum/main/docs/public/'
const srcImgs = [
  {
    link: `${base}img/pl/cloud/wstep/app_rejestr1`,
    description: 'Kliknięcie w przycisk włącza rejestrację',
  },
  {
    description: 'Zarejestrowane urządzenie mobilne',
    link: `${base}img/pl/cloud/wprowadzenie/app_klik.png`
  },
  {
    description: 'Szczegóły',
    link: `${base}img/pl/cloud/smartfony/app_szczegoly.png`
  },
]

</script>

<many-pictures :srcImgs='srcImgs' :lazy='true' />