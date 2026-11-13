# Registro Arcano — audit e decisioni UX

## Contesto tecnico e percorsi

Angular 21 standalone, senza router: le sezioni sono componenti mantenuti montati e mostrati in base allo stato. La scheda singola è salvata in localStorage (`registro-arcano-v1`), con importazione/esportazione JSON e stampa. Il catalogo consulta l'API SRD; le risorse dipendono dalla classe. Non sono presenti account o selezione tra più personaggi. I percorsi prioritari in sessione sono punti vita, statistiche e abilità, risorse/incantesimi e inventario; identità, note, catalogo e gestione file sono meno frequenti. Le dipendenze non sono state aggiornate.

## Criticità verificate e risposta

| Priorità | Schermata | Problema e impatto | Intervento |
| --- | --- | --- | --- |
| High | Navigazione mobile | Sei destinazioni contemporanee comprimono le etichette su schermi piccoli. | Quattro destinazioni frequenti e Altro per note e catalogo; etichette e stato attivo. |
| High | Panoramica | Statistiche strutturali editabili nella vista operativa aumentano la possibilità di modifiche accidentali. | Valori in sola lettura con modifica esplicita; punti vita prima delle difese. |
| Medium | Caratteristiche | Il segmento selezionato non aveva la stessa evidenza visiva degli altri gruppi. | Stato selezionato coerente anche visivamente. |
| Medium | Navigazione | Il cambio pagina non aggiornava la cronologia del browser. | Frammenti URL e gestione avanti/indietro, senza sostituire i componenti montati. |
| Medium | Catalogo | Informazioni di licenza precedono i filtri e occupano spazio durante la ricerca. | Fonte e licenza disponibili in un pannello espandibile. |
| Medium | Ricerca e risorse | Alcuni campi e controlli degli slot non avevano nomi espliciti. | Etichette accessibili per ricerca, note e pulsanti slot. |

## Limiti

L'audit ha verificato la struttura e la navigazione con scheda vuota; non copre tutte le combinazioni di classe o dati reali, né costituisce una certificazione WCAG. Form complessi e dialog preesistenti richiedono ulteriori verifiche di focus e tastiera. La chiamata esterna al catalogo dipende dalla rete. Il progetto non contiene una suite di test configurata funzionante: `npm test` passa un'opzione non riconosciuta dal builder disponibile.
