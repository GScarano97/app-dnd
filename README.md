# Registro Arcano

Scheda personaggio D&D 5e: frontend Angular standalone, senza backend. I dati vengono salvati nel `localStorage` del browser con la chiave `registro-arcano-v1`, compatibile con la precedente versione della scheda. L'esportazione e l'importazione JSON consentono di trasferire una scheda tra browser.

## Avvio

Richiede Node.js compatibile con Angular 21 (ad esempio Node 22.12 o successivo).

```sh
npm ci
npm start
```

Aprire l'indirizzo indicato dal server Angular. Per generare il sito statico:

```sh
npm run build
```

I file compilati si trovano in `dist/browser/`.

## Struttura

- `src/app/core/character.service.ts`: stato della scheda, persistenza e importazione/esportazione.
- `src/app/core/srd.service.ts`: accesso in sola lettura al catalogo D&D 5e SRD 2014.
- `src/app/overview`, `abilities`, `magic`, `inventory`, `notes`, `catalog`: componenti delle sezioni.
- `src/app/shared`: controlli e componenti riutilizzabili.
- `src/styles.css`: stile globale e stampa.

Il catalogo richiede una connessione Internet. I contenuti SRD 5.1 sono di Wizards of the Coast, distribuiti secondo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); sono forniti dalla [D&D 5e SRD API](https://www.dnd5eapi.co/). La scheda non verifica automaticamente tutti i requisiti di classe o le scelte legali del personaggio.
