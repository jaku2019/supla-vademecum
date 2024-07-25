---
layout: doc
lastupdated: true
next:
  text: 'Moja Supla'
  link: '/pl/cloud/moja-supla'
---
# Wprowadzenie

Supla to polski system automatyki budynkowej popularnie zwanej “smart home”. Rozwijany na zasadzie open-source (otwartych źródeł dostępnych na Githubie) zyskał wielu entuzjastów gromadzących się na [forum.supla.org](https://forum.supla.org/index.php).

![diagram](/img/pl/cloud/wstep/supla_diagram_2.png)

Elementem centralnym całego systemu jest chmura Supla Cloud dostępna pod adresem cloud.supla.org. Istnieje również opcja zainstalowania własnej instancji serwera Supli.

Aby zacząć przygodę z Suplą, należy założyć darmowe konto na cloud.supla.org. Następnym krokiem jest dodanie urządzenia mobilnego, za pomocą którego można zdalnie sterować podłączonymi urządzeniami. W tym celu przechodzimy do zakładki `Smartfony`. Upewniwszy się, że rejestracja urządzeń jest aktywna, uruchamiamy telefon i pobieramy aplikację SUPLA. Uzupełniamy odpowiednie dane i klikamy `OK`. Nowo dodane urządzenie powinno pojawić się na liście zarejestrowanych aplikacji klienckich w Cloudzie. Z poziomu aplikacji można nie tylko sterować urządzeniami podłączonymi do Clouda, ale też dodawać nowe urządzenia do konta Supla Cloud, zmieniać nazwy kanałów, lokalizacji i wiele więcej. 
Temat aplikacji został szerzej poruszony w odpowiednim dziale strony.
<script setup>
import { useData } from 'vitepress'
const base = 'https://raw.githubusercontent.com/jaku2019/supla-vademecum/9f82437cd980b9811cd9550e8a9f0054bebdba9c/docs/public/'
const srcImgs = [
  {
    link: `${base}img/pl/cloud/wstep/app_rejestr1.png`,
    description: 'Kliknięcie w przycisk włącza rejestrację',
  },
  {
    description: 'Zarejestrowane urządzenie mobilne',
    link: `${base}img/pl/cloud/wprowadzenie/app_klik.png`
  },
]

</script>

<many-pictures :srcImgs='srcImgs' :lazy='true' />

Język Clouda można zmienić wybierając pożądany z listy widocznej w lewym dolnym rogu strony.
![język](/img/pl/cloud/wstep/jezyk.png){data-zoomable}
:::warning <i/>
Niezrozumiałe zapisy w Cloudzie mogą wynikać z ustawienia języka Clouda na inny niż polski i automatycznego tłumaczenia przez przeglądarkę. W przypadku wystąpienia niezrozumiałych/nieskładnych informacji zaleca się weryfikację języka Clouda.
:::
W dalszej części tekstu zostały omówione poszczególne funkcje Supla Cloud.