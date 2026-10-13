# TechVier+1 — React redesign

Een complete React-website met Vite: Home, Diensten, Ons team en Contact. Zwart en #00B0F0 uit de huisstijl; Plus Jakarta Sans voor koppen en Manrope voor lopende tekst via Google Fonts. De netwerkvisual is opgebouwd met SVG en CSS, inclusief licht, diepte en beweging. Reduced motion wordt gerespecteerd.

## Starten

```sh
npm install
npm run dev
```

## Productie

```sh
npm run build
```

Upload de inhoud van `dist/` naar statische hosting. Navigatie gebruikt hashes en werkt zonder server-side routing. De oude adressen diensten.html, team.html en contact.html worden bij de build meegenomen.

Het formulier gebruikt de bestaande Web3Forms-integratie. De sleutel is een publieke formulier-ID. Live verzending moet met een eigen testbericht gecontroleerd worden; tijdens de ontwerpcontrole is geen bericht verzonden. Persoonsfoto's en contactgegevens komen uit de originele website.

Google Fonts vereist internet; Arial is de fallback. De originele bestanden in Downloads zijn behouden.
