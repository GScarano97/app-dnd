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

I file compilati si trovano in `dist/client/`.

## Struttura

- `src/app/core/character.service.ts`: stato della scheda, persistenza e importazione/esportazione.
- `src/app/core/srd.service.ts`: accesso in sola lettura al catalogo D&D 5e SRD 2014.
- `src/app/overview`, `abilities`, `magic`, `inventory`, `notes`, `catalog`: componenti delle sezioni.
- `src/app/shared`: controlli e componenti riutilizzabili.
- `src/styles.css`: stile globale e stampa.

Il catalogo richiede una connessione Internet. I contenuti SRD 5.1 sono di Wizards of the Coast, distribuiti secondo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); sono forniti dalla [D&D 5e SRD API](https://www.dnd5eapi.co/). La scheda non verifica automaticamente tutti i requisiti di classe o le scelte legali del personaggio.

I nomi degli incantesimi in italiano sono basati sulla traduzione italiana SRD e sul confronto con il [compendio italiano per Foundry VTT](https://github.com/LuckyFrico/dnd5e-it-translation-foundryVTT); le descrizioni degli incantesimi provengono dallo SRD 5.1 italiano. Il testo è stato estratto dal PDF e formattato per la visualizzazione; gli altri contenuti del catalogo restano in inglese.

Questo lavoro include materiale del System Reference Document 5.1 (“SRD 5.1”) di Wizards of the Coast LLC disponibile al sito https://dnd.wizards.com/resources/systems-reference-document. L’SRD 5.1 è concesso in licenza sotto l’Attribuzione 4.0 Internazionale di Creative Commons disponibile al sito https://creativecommons.org/licenses/by/4.0/legalcode.it.

## Pubblicazione automatica con GitHub Pages

Il workflow `.github/workflows/deploy.yml` compila il frontend e lo pubblica su GitHub Pages dopo ogni push sul ramo `main`. La prima volta apri **Settings → Pages** nel repository e seleziona **GitHub Actions** come origine. Il deploy è visibile nella scheda **Actions** del repository.

Il nuovo URL GitHub Pages utilizza un'origine diversa dal sito precedente: i dati salvati localmente nel browser non vengono trasferiti automaticamente. Esporta la scheda in JSON dal vecchio indirizzo e importala nel nuovo.

Le scelte di identità usano le regole 2014: i nomi delle classi e sottoclassi provengono dall’indice [dnd_5e_classes](https://github.com/ahhh/dnd_5e_classes). Le liste di razze e background includono le opzioni base; contenuti non elencati possono essere aggiunti manualmente. Il livello di sottoclasse indicato si riferisce alla classe, non calcola il multiclasse.

## App installabile (PWA)

La build di produzione include un manifest e il service worker Angular. Dopo la pubblicazione su GitHub Pages, apri il sito da un browser compatibile e scegli **Installa**; su iPhone o iPad aprilo in Safari e usa **Condividi → Aggiungi alla schermata Home**. L'installazione e il primo caricamento richiedono la connessione; successivamente l'interfaccia già caricata può avviarsi offline. Le schede rimangono nel browser/dispositivo corrente: l'installazione non sincronizza dati tra dispositivi. Esporta una copia JSON prima di passare a un altro browser o a un'app installata.

Il catalogo online e i dettagli richiesti all'API SRD richiedono una connessione. Il service worker non memorizza risposte API o dati delle schede: questi ultimi restano nel localStorage. Quando una nuova versione è pronta compare un pulsante per aggiornarla. Il service worker è attivo solo nelle build di produzione, non nel normale `npm start`.

## Risorse di classe

La sezione «Magia e capacità» mostra i contatori legati alla classe selezionata e, dove previsto, al livello e alla sottoclasse. I massimi e i ripristini sono gestiti manualmente: le risorse proposte non coprono ogni sottoclasse, variante o privilegio. Puoi aggiungere contatori personali, conservati separatamente per classe ed esportati nel JSON. Le regole predefinite fanno riferimento alla 5e 2014; il livello mostrato nella scheda non distingue i livelli di un personaggio multiclasse. Gli incantesimi facoltativi restano accessibili anche per personaggi senza incantesimi di classe.
