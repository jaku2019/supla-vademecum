// Karuzela ({{< karuzela >}}) – opis w layouts/_shortcodes/karuzela.html.
document.querySelectorAll(".karuzela").forEach((k) => {
  const slajdy = [...k.querySelectorAll(".karuzela-slajd")];
  const kropki = [...k.querySelectorAll(".karuzela-kropki button")];
  const tytul = k.querySelector(".karuzela-tytul");
  const podtytul = k.querySelector(".karuzela-podtytul");
  const spokojnie = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CZAS = 8000, PRZEJSCIE = 260;
  let biezacy = 0, zegar = null, wstrzymana = false;
  if (slajdy.length < 2) return;
  k.querySelector(".karuzela-kropki").hidden = false;
  // kolejne zdjęcia (ukryte – leniwie by się nie wczytały) ładują się po pierwszym
  const reszta = () => slajdy.forEach((s) => { s.loading = "eager"; });
  slajdy[0].complete ? reszta() : slajdy[0].addEventListener("load", reszta, { once: true });
  function pokaz(n) {
    n = (n + slajdy.length) % slajdy.length;
    if (n === biezacy) return;
    const stary = slajdy[biezacy], nowy = slajdy[n];
    biezacy = n;
    // nagłówek zmienia się od razu, zdjęcie: stare wychodzi, potem wchodzi nowe
    tytul.textContent = nowy.dataset.tytul;
    podtytul.textContent = nowy.dataset.podtytul;
    kropki.forEach((b, i) => i === n ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current"));
    slajdy.forEach((s) => { if (s !== stary) { s.hidden = true; s.classList.remove("wychodzi", "wchodzi"); } });
    if (spokojnie) { stary.hidden = true; nowy.hidden = false; return; }
    stary.classList.add("wychodzi");
    setTimeout(() => {
      stary.hidden = true;
      stary.classList.remove("wychodzi");
      if (slajdy[biezacy] !== nowy) return;
      nowy.classList.add("wchodzi");
      nowy.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => nowy.classList.remove("wchodzi")));
    }, PRZEJSCIE);
  }
  function start() {
    clearInterval(zegar);
    if (!spokojnie && !wstrzymana) zegar = setInterval(() => pokaz(biezacy + 1), CZAS);
  }
  kropki.forEach((b, i) => b.addEventListener("click", () => { pokaz(i); start(); }));
  // fokus z klawiatury na kropkach wstrzymuje zmianę (jak na supla.org – najechanie myszą nie)
  // (kliknięcie myszą też daje fokus – wtedy tylko liczy 8 s od nowa)
  k.addEventListener("focusin", (e) => { wstrzymana = e.target.matches(":focus-visible"); start(); });
  k.addEventListener("focusout", () => { wstrzymana = false; start(); });
  start();
});
