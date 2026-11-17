// SRD 5.1 italiano di Wizards of the Coast, CC BY 4.0; estrazione: quintaedizione-data-ita.
export const FEATURES_IT: Record<string,{name:string;description:string}> = {
  "flexible-casting-creating-spell-slots": {
    "name": "Lancio Flessibile: creare slot incantesimo",
    "description": "Come azione bonus nel proprio turno, lo stregone può trasformare punti stregoneria in uno slot incantesimo. Per gli slot di livello da 1 a 5 il costo è rispettivamente di 2, 3, 5, 6 e 7 punti. Non può creare slot di livello superiore al 5°. Gli slot creati scompaiono al termine di un riposo lungo."
  },
  "flexible-casting-converting-spell-slot": {
    "name": "Lancio Flessibile: convertire uno slot",
    "description": "Come azione bonus nel proprio turno, lo stregone può consumare uno slot incantesimo e ottenere un numero di punti stregoneria pari al livello dello slot."
  },
  "rage": {
    "name": "Ira",
    "description": "In battaglia, un barbaro combatte animato da una ferocia primordiale. Nel suo turno può scatenare la propria ira come azione bonus. Finché è preda dell'ira, ottiene i benefici seguenti se non indossa un'armatura pesante: •Dispone di vantaggio alle prove di Forza e ai tiri salvezza su Forza. •Quando effettua un attacco con arma da mischia usando Forza, ottiene un bonus al tiro per i danni che aumenta man mano che ottiene nuovi livelli da barbaro, come indicato nella colonna \"Danni dell'ira\" nella tabella \"Barbaro\". •Un barbaro dispone di resistenza ai danni contundenti, perforanti e taglienti. Se è in grado di lanciare incantesimi, non può lanciarli o concentrarsi su di essi quando è in preda all'ira. L'ira del barbaro dura 1 minuto. Termina anticipatamente se il barbaro cade privo di sensi o se il suo turno termina e non ha attaccato una creatura ostile dal suo ultimo turno o non ha subito danni da allora. Un barbaro può anche porre fine all'ira nel proprio turno come azione bonus. Una volta preda dell'ira per il numero di volte indicato dal suo livello di barbaro nella colonna \"Ira\" della tabella \"Barbaro\", un barbaro deve completare un riposo lungo prima di poterla scatenare di nuovo."
  },
  "barbarian-unarmored-defense": {
    "name": "Difesa Senza Armatura",
    "description": "Fintantoché un barbaro non indossa alcuna armatura, la sua Classe Armatura è pari a 10 + il suo modificatore di Destrezza + il suo modificatore di Costituzione. Un barbaro può usare uno scudo e ottenere comunque questo beneficio."
  },
  "reckless-attack": {
    "name": "Attacco Irruento",
    "description": "A partire dal 2° livello, un barbaro può ignorare ogni preoccupazione per la sua difesa e attaccare in preda a una feroce disperazione. Quando effettua il primo attacco nel suo turno, può decidere di sferrare un attacco irruento. Così facendo, durante questo turno, dispone di vantaggio ai tiri per colpire con arma da mischia che usano Forza, ma i tiri per colpire contro di lui dispongono di vantaggio fino al suo turno successivo."
  },
  "danger-sense": {
    "name": "Percezione del Pericolo",
    "description": "Al 2° livello, un barbaro ottiene una percezione prodigiosa di tutto ciò che nei paraggi non è come dovrebbe essere, cosa che lo agevola quando deve evitare i pericoli. Un barbaro dispone di vantaggio ai tiri salvezza su Destrezza contro gli effetti che può vedere, come le trappole e gli incantesimi. Per ottenere questo beneficio non deve essere accecato, assordato o incapacitato."
  },
  "primal-path": {
    "name": "Cammino Primordiale",
    "description": "Al 3° livello, un barbaro sceglie un cammino che definisce la natura della sua ira. Può scegliere il Cammino del Berserker o il Cammino del Combattente Totemico, entrambi descritti alla fine della sezione di questa classe. Questa scelta gli conferisce alcuni privilegi al 3° livello e poi di nuovo al 6°, 10° e 14° livello."
  },
  "barbarian-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un barbaro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "barbarian-extra-attack": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un barbaro può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno."
  },
  "fast-movement": {
    "name": "Movimento Veloce",
    "description": "A partire dal 5° livello, la velocità del barbaro aumenta di 3 metri purché il barbaro non indossi un'armatura pesante."
  },
  "feral-instinct": {
    "name": "Istinto Ferino",
    "description": "Al 7° livello, gli istinti del barbaro sono talmente affinati da fornirgli vantaggio ai tiri per l'iniziativa. Inoltre, se il barbaro è sorpreso all'inizio del combattimento e non è incapacitato, può agire normalmente nel suo primo turno, ma solo se scatena la propria ira prima di fare qualsiasi altra cosa in quel turno."
  },
  "barbarian-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un barbaro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "brutal-critical-1-die": {
    "name": "Critico Brutale",
    "description": "A partire dal 9° livello, un barbaro può tirare un dado dell'arma aggiuntivo quando determina i danni extra di un colpo critico con attacco in mischia. Questo effetto aumenta a due dadi aggiuntivi al 13° livello e a tre dadi aggiuntivi al 17° livello."
  },
  "relentless-rage": {
    "name": "Ira Implacabile",
    "description": "A partire dall'11° livello, grazie alla sua ira il barbaro può continuare a combattere nonostante le ferite più gravi. Se scende a 0 punti ferita mentre è in preda all'ira e non è ucciso sul colpo, può effettuare un tiro salvezza su Costituzione con CD 10. Se lo supera, rimane invece a 1 punto ferita. Ogni volta che utilizza questo privilegio dopo la prima, la CD aumenta di 5. Quando completa un riposo breve o lungo, la CD è ripristinata a 10."
  },
  "barbarian-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un barbaro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "brutal-critical-2-dice": {
    "name": "Critico Brutale",
    "description": "A partire dal 9° livello, un barbaro può tirare un dado dell'arma aggiuntivo quando determina i danni extra di un colpo critico con attacco in mischia. Questo effetto aumenta a due dadi aggiuntivi al 13° livello e a tre dadi aggiuntivi al 17° livello."
  },
  "persistent-rage": {
    "name": "Ira Persistente",
    "description": "A partire dal 15° livello, l'ira del barbaro è talmente feroce che termina prematuramente solo se il barbaro cade privo di sensi o se decide di porvi termine."
  },
  "barbarian-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un barbaro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "brutal-critical-3-dice": {
    "name": "Critico Brutale",
    "description": "A partire dal 9° livello, un barbaro può tirare un dado dell'arma aggiuntivo quando determina i danni extra di un colpo critico con attacco in mischia. Questo effetto aumenta a due dadi aggiuntivi al 13° livello e a tre dadi aggiuntivi al 17° livello."
  },
  "indomitable-might": {
    "name": "Potenza Indomabile",
    "description": "A partire dal 18° livello, se il totale di una prova di Forza del barbaro è inferiore al suo punteggio di Forza, il barbaro può usare quel punteggio al posto del totale."
  },
  "barbarian-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un barbaro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "primal-champion": {
    "name": "Campione Primordiale",
    "description": "Al 20° livello, il barbaro diventa un'incarnazione del potere delle terre selvagge. I suoi punteggi di Forza e Costituzione aumentano di 4. Il suo massimo per quei punteggi è ora di 24."
  },
  "spellcasting-druid": {
    "name": "Incantesimi",
    "description": "Un druido attinge all'essenza divina della natura stessa e può lanciare incantesimi che modellano tale essenza in base alla sua volontà.\n\n#### Trucchetti\n\nAl 1° livello, un druido conosce due trucchetti a sua scelta tratti dalla lista degli incantesimi da druido. Apprende ulteriori trucchetti da druido a sua scelta ai livelli successivi, come indicato dalla colonna \"Trucchetti conosciuti\" nella tabella \"Druido\".\n\n#### Preparare e lanciare incantesimi\n\nLa tabella \"Druido\" indica quanti slot incantesimo possiede un druido per lanciare i suoi incantesimi di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Il druido prepara la lista degli incantesimi da druido disponibili da lanciare scegliendoli dalla lista degli incantesimi da druido. Quando lo fa, deve scegliere un numero di incantesimi da druido pari al suo modificatore di Saggezza + il suo livello da druido (minimo di un incantesimo). Gli incantesimi devono essere di un livello di cui possiede degli slot incantesimo. Per esempio, un druido di 3° livello possiede quattro slot incantesimo di 1° livello e due slot incantesimo di 2° livello. Con Saggezza pari a 16, la lista dei suoi incantesimi preparati può includere sei incantesimi di 1° o 2° livello, in qualsiasi combinazione. Se prepara l'incantesimo di 1° livello *cura ferite*, potrà lanciarlo usando uno slot incantesimo di 1° livello o di 2° livello. Il lancio di quell'incantesimo non rimuove quell'incantesimo dalla lista di incantesimi preparati.Può anche cambiare la lista dei suoi incantesimi preparati quando completa un riposo lungo. Per preparare una nuova lista di incantesimi da druido è necessario un certo ammontare di tempo da trascorrere in preghiera e meditazione: almeno 1 minuto per livello di incantesimo per ogni incantesimo nella sua lista.\n\n#### Caratteristica da incantatore\n\nSaggezza è la caratteristica da incantatore usata per gli incantesimi da druido, dato che il potere della sua magia deriva dalla sua devozione e dalla sua sintonia con la natura. Usa Saggezza ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Saggezza per definire la CD del tiro salvezza di un incantesimo da druido da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di SaggezzaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Saggezza\n\n#### Celebrare rituali\n\nUn druido può lanciare un incantesimo da druido come rituale se quell'incantesimo possiede il descrittore rituale e il druido lo ha preparato.\n\n#### Focus da incantatore\n\nUn druido può usare un focus druidico (vedi \"Equipaggiamento\") come focus da incantatore per i suoi incantesimi da druido."
  },
  "druidic": {
    "name": "Druidico",
    "description": "Un druido conosce il Druidico, la lingua segreta del suo ordine. Può parlarla e usarla per lasciare messaggi segreti. Il druido e coloro che conoscono questa lingua sono in grado di individuare tali messaggi automaticamente. Altri possono notare la presenza di un messaggio in Druidico superando una prova di Saggezza (Percezione) con CD 15, ma non possono decifrarlo senza l'aiuto della magia."
  },
  "wild-shape-cr-1-4-or-below-no-flying-or-swim-speed": {
    "name": "Forma Selvatica",
    "description": "A partire dal 2° livello, un druido può usare la sua azione per assumere magicamente la forma di una bestia che ha già visto in precedenza. Può utilizzare questo privilegio due volte e recupera gli utilizzi spesi quando completa un riposo breve o lungo. Il livello da druido determina le bestie in cui egli può trasformarsi, come indicato nella tabella \"Forme bestiali\" sottostante. Al 2° livello, per esempio, può trasformarsi in qualsiasi bestia che abbia un grado di sfida pari o inferiore a 1/4 che non abbia una velocità di nuotare o di volare.\n\nForme bestiali\n\n| Livello | | GS max | Limitazioni | Esempio |\n| --- | --- | --- | --- | --- |\n| | 2° | 1/4 | Nessuna velocità di nuotare o di volare | Lupo |\n| | 4° | 1/2 | Nessuna velocità di volare | Coccodrillo |\n| Un druido può rimanere in forma bestiale per un numero di ore pari alla metà del suo livello da druido (arrotondato per difetto), poi torna alla sua forma normale, a meno che non spenda un altro utilizzo di questo privilegio. Può tornare alla sua forma normale anticipatamente usando un'azione bonus nel suo turno. Torna automaticamente alla sua forma normale se cade privo di sensi, scende a 0 punti ferita o muore. Finché il druido è trasformato, si applicano le regole seguenti: | 8° | 1 | — | Aquila gigante |\n\n•Le statistiche di gioco del druido vengono sostituite dalle statistiche della bestia, ma il druido conserva il proprio allineamento, la propria personalità e i punteggi di Intelligenza, Saggezza e Carisma. Conserva inoltre tutte le sue abilità e competenze nei tiri salvezza, oltre a ottenere quelle della creatura. Se la creatura possiede una competenza che anche il druido possiede e il bonus nella sua scheda delle statistiche è superiore a quello del druido, il personaggio usa il bonus della creatura anziché il proprio. Se la creatura possiede delle azioni leggendarie o di tana, il druido non può usarle. •Quando si trasforma, il druido assume i punti ferita e i Dadi Vita della bestia. Quando torna alla sua forma normale, torna al numero di punti ferita che possedeva prima della trasformazione. Tuttavia, se torna alla sua forma normale per essere sceso a 0 punti ferita, gli eventuali danni in eccesso si trasmettono alla sua forma normale. Per esempio, se un druido in forma bestiale possiede 1 solo punto ferita e subisce 10 danni, torna alla sua forma normale e subisce 9 danni. Fintantoché i danni in eccesso non portano la forma normale del druido a 0 punti ferita, il druido non cade privo di sensi. •Il druido non può lanciare incantesimi e la sua capacità di parlare o di intraprendere qualsiasi azione che richieda le mani è limitata alle capacità della sua forma bestiale. La trasformazione non interrompe la concentrazione del druido su un incantesimo che ha già lanciato e non gli impedisce di effettuare azioni che fanno partedi un incantesimo già lanciato, come per esempio *invocare il fulmine*. •Un druido mantiene i benefici di tutti i privilegi forniti dalla sua classe, dalla sua razza e da qualsiasi altra fonte e può usarli se nella nuova forma è fisicamente in grado di farlo. Tuttavia, non può usare nessuno dei suoi sensi speciali, come per esempio la scurovisione, a meno che non li possieda anche nella sua nuova forma. •Un druido può scegliere se lasciare cadere l'equipaggiamento nel suo spazio, se tale equipaggiamento si fonde nella sua nuova forma o se indossarlo. L'equipaggiamento indossato funziona normalmente, ma spetta al GM decidere se è pratico o meno che la nuova forma indossi ogni determinato oggetto d'equipaggiamento, in base alla forma e alla taglia della creatura. L'equipaggiamento del druido non cambia per adattarsi alla nuova forma, e ogni oggetto di equipaggiamento che la nuova forma non può indossare deve cadere a terra o fondersi nella nuova forma del druido. L'equipaggiamento fuso non ha alcun effetto finché il druido non l'abbandona."
  },
  "druid-circle": {
    "name": "Circolo Druidico",
    "description": "Al 2° livello, un druido sceglie di aderire a un circolo druidico, per esempio il Circolo della Terra. Questa scelta gli conferisce alcuni privilegi al 2° livello e poi di nuovo al 6°, 10° e 14° livello."
  },
  "wild-shape-cr-1-2-or-below-no-flying-speed": {
    "name": "Forma Selvatica",
    "description": "A partire dal 2° livello, un druido può usare la sua azione per assumere magicamente la forma di una bestia che ha già visto in precedenza. Può utilizzare questo privilegio due volte e recupera gli utilizzi spesi quando completa un riposo breve o lungo. Il livello da druido determina le bestie in cui egli può trasformarsi, come indicato nella tabella \"Forme bestiali\" sottostante. Al 2° livello, per esempio, può trasformarsi in qualsiasi bestia che abbia un grado di sfida pari o inferiore a 1/4 che non abbia una velocità di nuotare o di volare.\n\nForme bestiali\n\n| Livello | | GS max | Limitazioni | Esempio |\n| --- | --- | --- | --- | --- |\n| | 2° | 1/4 | Nessuna velocità di nuotare o di volare | Lupo |\n| | 4° | 1/2 | Nessuna velocità di volare | Coccodrillo |\n| Un druido può rimanere in forma bestiale per un numero di ore pari alla metà del suo livello da druido (arrotondato per difetto), poi torna alla sua forma normale, a meno che non spenda un altro utilizzo di questo privilegio. Può tornare alla sua forma normale anticipatamente usando un'azione bonus nel suo turno. Torna automaticamente alla sua forma normale se cade privo di sensi, scende a 0 punti ferita o muore. Finché il druido è trasformato, si applicano le regole seguenti: | 8° | 1 | — | Aquila gigante |\n\n•Le statistiche di gioco del druido vengono sostituite dalle statistiche della bestia, ma il druido conserva il proprio allineamento, la propria personalità e i punteggi di Intelligenza, Saggezza e Carisma. Conserva inoltre tutte le sue abilità e competenze nei tiri salvezza, oltre a ottenere quelle della creatura. Se la creatura possiede una competenza che anche il druido possiede e il bonus nella sua scheda delle statistiche è superiore a quello del druido, il personaggio usa il bonus della creatura anziché il proprio. Se la creatura possiede delle azioni leggendarie o di tana, il druido non può usarle. •Quando si trasforma, il druido assume i punti ferita e i Dadi Vita della bestia. Quando torna alla sua forma normale, torna al numero di punti ferita che possedeva prima della trasformazione. Tuttavia, se torna alla sua forma normale per essere sceso a 0 punti ferita, gli eventuali danni in eccesso si trasmettono alla sua forma normale. Per esempio, se un druido in forma bestiale possiede 1 solo punto ferita e subisce 10 danni, torna alla sua forma normale e subisce 9 danni. Fintantoché i danni in eccesso non portano la forma normale del druido a 0 punti ferita, il druido non cade privo di sensi. •Il druido non può lanciare incantesimi e la sua capacità di parlare o di intraprendere qualsiasi azione che richieda le mani è limitata alle capacità della sua forma bestiale. La trasformazione non interrompe la concentrazione del druido su un incantesimo che ha già lanciato e non gli impedisce di effettuare azioni che fanno partedi un incantesimo già lanciato, come per esempio *invocare il fulmine*. •Un druido mantiene i benefici di tutti i privilegi forniti dalla sua classe, dalla sua razza e da qualsiasi altra fonte e può usarli se nella nuova forma è fisicamente in grado di farlo. Tuttavia, non può usare nessuno dei suoi sensi speciali, come per esempio la scurovisione, a meno che non li possieda anche nella sua nuova forma. •Un druido può scegliere se lasciare cadere l'equipaggiamento nel suo spazio, se tale equipaggiamento si fonde nella sua nuova forma o se indossarlo. L'equipaggiamento indossato funziona normalmente, ma spetta al GM decidere se è pratico o meno che la nuova forma indossi ogni determinato oggetto d'equipaggiamento, in base alla forma e alla taglia della creatura. L'equipaggiamento del druido non cambia per adattarsi alla nuova forma, e ogni oggetto di equipaggiamento che la nuova forma non può indossare deve cadere a terra o fondersi nella nuova forma del druido. L'equipaggiamento fuso non ha alcun effetto finché il druido non l'abbandona."
  },
  "druid-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un druido può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "wild-shape-cr-1-or-below": {
    "name": "Forma Selvatica",
    "description": "A partire dal 2° livello, un druido può usare la sua azione per assumere magicamente la forma di una bestia che ha già visto in precedenza. Può utilizzare questo privilegio due volte e recupera gli utilizzi spesi quando completa un riposo breve o lungo. Il livello da druido determina le bestie in cui egli può trasformarsi, come indicato nella tabella \"Forme bestiali\" sottostante. Al 2° livello, per esempio, può trasformarsi in qualsiasi bestia che abbia un grado di sfida pari o inferiore a 1/4 che non abbia una velocità di nuotare o di volare.\n\nForme bestiali\n\n| Livello | | GS max | Limitazioni | Esempio |\n| --- | --- | --- | --- | --- |\n| | 2° | 1/4 | Nessuna velocità di nuotare o di volare | Lupo |\n| | 4° | 1/2 | Nessuna velocità di volare | Coccodrillo |\n| Un druido può rimanere in forma bestiale per un numero di ore pari alla metà del suo livello da druido (arrotondato per difetto), poi torna alla sua forma normale, a meno che non spenda un altro utilizzo di questo privilegio. Può tornare alla sua forma normale anticipatamente usando un'azione bonus nel suo turno. Torna automaticamente alla sua forma normale se cade privo di sensi, scende a 0 punti ferita o muore. Finché il druido è trasformato, si applicano le regole seguenti: | 8° | 1 | — | Aquila gigante |\n\n•Le statistiche di gioco del druido vengono sostituite dalle statistiche della bestia, ma il druido conserva il proprio allineamento, la propria personalità e i punteggi di Intelligenza, Saggezza e Carisma. Conserva inoltre tutte le sue abilità e competenze nei tiri salvezza, oltre a ottenere quelle della creatura. Se la creatura possiede una competenza che anche il druido possiede e il bonus nella sua scheda delle statistiche è superiore a quello del druido, il personaggio usa il bonus della creatura anziché il proprio. Se la creatura possiede delle azioni leggendarie o di tana, il druido non può usarle. •Quando si trasforma, il druido assume i punti ferita e i Dadi Vita della bestia. Quando torna alla sua forma normale, torna al numero di punti ferita che possedeva prima della trasformazione. Tuttavia, se torna alla sua forma normale per essere sceso a 0 punti ferita, gli eventuali danni in eccesso si trasmettono alla sua forma normale. Per esempio, se un druido in forma bestiale possiede 1 solo punto ferita e subisce 10 danni, torna alla sua forma normale e subisce 9 danni. Fintantoché i danni in eccesso non portano la forma normale del druido a 0 punti ferita, il druido non cade privo di sensi. •Il druido non può lanciare incantesimi e la sua capacità di parlare o di intraprendere qualsiasi azione che richieda le mani è limitata alle capacità della sua forma bestiale. La trasformazione non interrompe la concentrazione del druido su un incantesimo che ha già lanciato e non gli impedisce di effettuare azioni che fanno partedi un incantesimo già lanciato, come per esempio *invocare il fulmine*. •Un druido mantiene i benefici di tutti i privilegi forniti dalla sua classe, dalla sua razza e da qualsiasi altra fonte e può usarli se nella nuova forma è fisicamente in grado di farlo. Tuttavia, non può usare nessuno dei suoi sensi speciali, come per esempio la scurovisione, a meno che non li possieda anche nella sua nuova forma. •Un druido può scegliere se lasciare cadere l'equipaggiamento nel suo spazio, se tale equipaggiamento si fonde nella sua nuova forma o se indossarlo. L'equipaggiamento indossato funziona normalmente, ma spetta al GM decidere se è pratico o meno che la nuova forma indossi ogni determinato oggetto d'equipaggiamento, in base alla forma e alla taglia della creatura. L'equipaggiamento del druido non cambia per adattarsi alla nuova forma, e ogni oggetto di equipaggiamento che la nuova forma non può indossare deve cadere a terra o fondersi nella nuova forma del druido. L'equipaggiamento fuso non ha alcun effetto finché il druido non l'abbandona."
  },
  "druid-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un druido può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "druid-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un druido può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "druid-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un druido può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "druid-timeless-body": {
    "name": "Corpo Senza Tempo",
    "description": "A partire dal 18° livello, la magia primordiale che fluisce nel druido rallenta il suo invecchiamento. Per ogni 10 anni trascorsi, il corpo del druido invecchia soltanto di 1 anno."
  },
  "beast-spells": {
    "name": "Incantesimi Bestiali",
    "description": "A partire dal 18° livello, un druido può lanciare molti dei suoi incantesimi da druido in qualsiasi forma assunta utilizzando Forma Selvatica. Può fornire le componenti somatiche e verbali di un incantesimo da druido anche quando è in forma bestiale, ma non è in grado di fornire componenti materiali."
  },
  "druid-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un druido può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "archdruid": {
    "name": "Arcidruido",
    "description": "Al 20° livello, un druido può utilizzare Forma Selvatica un numero illimitato di volte. Può inoltre ignorare le componenti verbali e somatiche dei suoi incantesimi da druido, nonché le eventuali componenti materiali prive di un costo e quelle che non sono consumate da un incantesimo. Un druido ottiene questo beneficio sia nella sua forma normale che nella forma bestiale assunta grazie a Forma Selvatica."
  },
  "spellcasting-cleric": {
    "name": "Incantesimi",
    "description": "Un chierico è un tramite del potere divino e come tale è in grado di lanciare incantesimi da chierico.\n\n#### Trucchetti\n\nAl 1° livello, un chierico conosce tre trucchetti a sua scelta tratti dalla lista degli incantesimi da chierico. Apprende ulteriori trucchetti da chierico a sua scelta ai livelli successivi, come indicato dalla colonna \"Trucchetti Conosciuti\" nella tabella \"Chierico\".\n\n#### Preparare e lanciare incantesimi\n\nLa tabella \"Chierico\" indica quanti slot incantesimo possiede un chierico per lanciare i suoi incantesimi di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Il chierico prepara la lista degli incantesimi da chierico disponibili da lanciare scegliendoli dalla lista degli incantesimi da chierico. Quando lo fa, deve scegliere un numero di incantesimi da chierico pari al suo modificatore di Saggezza + il suo livello da chierico (minimo di un incantesimo). Gli incantesimi devono essere di un livello di cui possiede degli slot incantesimo. Per esempio, un chierico di 3° livello possiede quattro slot incantesimo di 1° livello e due slot incantesimo di 2° livello. Con Saggezza pari a 16, la lista dei suoi incantesimi preparati può includere sei incantesimi di 1° o 2° livello, in qualsiasi combinazione. Se prepara l'incantesimo di 1° livello *cura ferite*, potrà lanciarlo usando uno slot incantesimo di 1° livello o di 2° livello. Il lancio di quell'incantesimo non rimuove quell'incantesimo dalla lista di incantesimi preparati. Può cambiare la lista dei suoi incantesimi preparati quando completa un riposo lungo. Per preparare una nuova lista di incantesimi da chierico è necessario un certo ammontare di tempo da trascorrere in preghiera e meditazione: almeno 1 minuto per livello di incantesimo per ogni incantesimo nella sua lista.\n\n#### Caratteristica da Incantatore\n\nSaggezza è la caratteristica da incantatore usata per gli incantesimi da chierico. Il potere degli incantesimi di un chierico deriva dalla sua devozione nei confronti della divinità. Usa Saggezza ogni volta che un incantesimo da chierico fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suomodificatore di Saggezza per definire la CD del tiro salvezza di un incantesimo da chierico da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di SaggezzaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Saggezza\n\n#### Celebrare rituali\n\nUn chierico può lanciare un incantesimo da chierico come rituale se quell'incantesimo possiede il descrittore rituale e il chierico lo ha preparato.\n\n#### Focus da incantatore\n\nUn chierico può usare un simbolo sacro (vedi \"Equipaggiamento\") come focus da incantatore per i suoi incantesimi da chierico."
  },
  "divine-domain": {
    "name": "Dominio Divino",
    "description": "Il chierico sceglie un dominio correlato alla sua divinità, per esempio Vita. Ogni dominio è descritto in dettaglio alla fine della sezione di questa classe e fornisce esempi di varie divinità a esso associate. Questa scelta conferisce al chierico alcuni incantesimi di dominio e altri privilegi al 1° livello. Conferisce inoltre ulteriori modi di utilizzare Incanalare Divinità quando il chierico ottiene quel privilegio al 2° livello e benefici ulteriori al 6°, all'8° e al 17° livello.\n\n#### Incantesimi di dominio\n\nA ogni dominio corrisponde una lista di incantesimi (gli incantesimi di dominio) che il chierico ottiene ai livelli da chierico indicati nella descrizione del dominio. Quando un chierico ottiene un incantesimo di dominio, quell'incantesimo è sempre considerato preparato e non conta al fine di determinare il numero di incantesimi che il chierico può preparare ogni giorno. Se il chierico possiede un incantesimo di dominio che non compare nella lista degli incantesimi da chierico, quell'incantesimo è comunque considerato un incantesimo da chierico per lui."
  },
  "channel-divinity-1-rest": {
    "name": "Incanalare Divinità",
    "description": "Al 2° livello, un chierico ottiene la capacità di incanalare energia divina direttamente dalla sua divinità e usa quell'energia per alimentare gli effetti magici. Un chierico parte con due effetti di questo tipo: Scacciare Non Morti e un effetto determinato dal suo dominio. Alcuni domini conferiscono al chierico degli effetti aggiuntivi man mano che avanza di livello, nel modo indicato nella descrizione del dominio. Quando un chierico utilizza Incanalare Divinità, può scegliere quale effetto creare. Deve poi completare un riposo breve o lungo per utilizzare di nuovo Incanalare Divinità. Alcuni effetti di Incanalare Divinità richiedono dei tiri salvezza. Quando un chierico utilizza un tale effetto, la CD è pari alla CD del tiro salvezza sui suoi incantesimi da chierico. A partire dal 6° livello, un chierico può utilizzare Incanalare Divinità due volte tra un riposo e l'altro. Inoltre, a partire dal 18° livello, può usarlo tre volte tra un riposo e l'altro. Quando completa un riposo breve o lungo, recupera gli utilizzi spesi.\n\n#### Incanalare Divinità: Scacciare Non Morti\n\nCon un'azione, il chierico brandisce il suo simbolo sacro e pronuncia una preghiera di condanna nei confronti dei non morti. Ogni non morto che è in grado vedere o sentire il chierico e si trova entro 9 metri da lui deve effettuare un tiro salvezza su Saggezza. Se lo fallisce, la creatura è considerata scacciata per 1 minuto o finché non subisce danni. Una creatura scacciata deve spendere i suoi turni tentando di allontanarsi il più possibile dal chierico e non può volontariamente muoversi in uno spazio entro 9 metri da lui. Inoltre, non può effettuare reazioni. Come sua azione può usare solo l'azione di Scatto o tentare di fuggire da un effetto che gli impedisce di muoversi. Se non può muoversi in alcuno spazio, la creatura può usare l'azione di Schivata."
  },
  "cleric-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un chierico può aumentare di 2 un punteggio di caratteristica a sua scelta,, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "destroy-undead-cr-1-2-or-below": {
    "name": "Distruggere Non Morti",
    "description": "A partire dal 5° livello, quando un non morto fallisce il suo tiro salvezza contro il privilegio Scacciare Non Morti del chierico, quella creatura è distrutta istantaneamente se il suo grado di sfida è pari o inferiore a una certa soglia, come indicato dalla tabella \"Distruggere Non Morti\".\n\nDistruggere Non Morti\n\nLivello da chierico\n\nDistruggere i Non Morti di GS...\n\n5°\n\n1/2 o inferiore\n\n8°\n\n1 o inferiore\n\n11°\n\n2 o inferiore\n\n14°\n\n3 o inferiore\n\n17°\n\n4 o inferiore"
  },
  "channel-divinity-2-rest": {
    "name": "Incanalare Divinità",
    "description": "Al 2° livello, un chierico ottiene la capacità di incanalare energia divina direttamente dalla sua divinità e usa quell'energia per alimentare gli effetti magici. Un chierico parte con due effetti di questo tipo: Scacciare Non Morti e un effetto determinato dal suo dominio. Alcuni domini conferiscono al chierico degli effetti aggiuntivi man mano che avanza di livello, nel modo indicato nella descrizione del dominio. Quando un chierico utilizza Incanalare Divinità, può scegliere quale effetto creare. Deve poi completare un riposo breve o lungo per utilizzare di nuovo Incanalare Divinità. Alcuni effetti di Incanalare Divinità richiedono dei tiri salvezza. Quando un chierico utilizza un tale effetto, la CD è pari alla CD del tiro salvezza sui suoi incantesimi da chierico. A partire dal 6° livello, un chierico può utilizzare Incanalare Divinità due volte tra un riposo e l'altro. Inoltre, a partire dal 18° livello, può usarlo tre volte tra un riposo e l'altro. Quando completa un riposo breve o lungo, recupera gli utilizzi spesi.\n\n#### Incanalare Divinità: Scacciare Non Morti\n\nCon un'azione, il chierico brandisce il suo simbolo sacro e pronuncia una preghiera di condanna nei confronti dei non morti. Ogni non morto che è in grado vedere o sentire il chierico e si trova entro 9 metri da lui deve effettuare un tiro salvezza su Saggezza. Se lo fallisce, la creatura è considerata scacciata per 1 minuto o finché non subisce danni. Una creatura scacciata deve spendere i suoi turni tentando di allontanarsi il più possibile dal chierico e non può volontariamente muoversi in uno spazio entro 9 metri da lui. Inoltre, non può effettuare reazioni. Come sua azione può usare solo l'azione di Scatto o tentare di fuggire da un effetto che gli impedisce di muoversi. Se non può muoversi in alcuno spazio, la creatura può usare l'azione di Schivata."
  },
  "cleric-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un chierico può aumentare di 2 un punteggio di caratteristica a sua scelta,, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "destroy-undead-cr-1-or-below": {
    "name": "Distruggere Non Morti",
    "description": "A partire dal 5° livello, quando un non morto fallisce il suo tiro salvezza contro il privilegio Scacciare Non Morti del chierico, quella creatura è distrutta istantaneamente se il suo grado di sfida è pari o inferiore a una certa soglia, come indicato dalla tabella \"Distruggere Non Morti\".\n\nDistruggere Non Morti\n\nLivello da chierico\n\nDistruggere i Non Morti di GS...\n\n5°\n\n1/2 o inferiore\n\n8°\n\n1 o inferiore\n\n11°\n\n2 o inferiore\n\n14°\n\n3 o inferiore\n\n17°\n\n4 o inferiore"
  },
  "divine-intervention": {
    "name": "Intervento Divino",
    "description": "A partire dal 10° livello, un chierico può appellarsi alla propria divinità affinché intervenga a suo beneficio nel momento del bisogno. Per implorare l'aiuto della sua divinità, il chierico deve usare un'azione. Deve descrivere l'assistenza che desidera ottenere e tirare un dado percentuale. Se ottiene con il tiro un numero pari o inferiore al suo livello da chierico, la divinità interviene. È il GM a scegliere la natura dell'intervento; l'effetto di qualsiasi incantesimo da chierico o incantesimo di dominio è appropriato. Se la divinità interviene, il chierico non può più utilizzare questo privilegio per 7 giorni. Altrimenti può utilizzarlo di nuovo dopo che ha completato un riposo lungo. Al 20° livello, la richiesta di intervento del chierico ha successo automaticamente, senza che sia richiesto alcun tiro."
  },
  "destroy-undead-cr-2-or-below": {
    "name": "Distruggere Non Morti",
    "description": "A partire dal 5° livello, quando un non morto fallisce il suo tiro salvezza contro il privilegio Scacciare Non Morti del chierico, quella creatura è distrutta istantaneamente se il suo grado di sfida è pari o inferiore a una certa soglia, come indicato dalla tabella \"Distruggere Non Morti\".\n\nDistruggere Non Morti\n\nLivello da chierico\n\nDistruggere i Non Morti di GS...\n\n5°\n\n1/2 o inferiore\n\n8°\n\n1 o inferiore\n\n11°\n\n2 o inferiore\n\n14°\n\n3 o inferiore\n\n17°\n\n4 o inferiore"
  },
  "cleric-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un chierico può aumentare di 2 un punteggio di caratteristica a sua scelta,, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "destroy-undead-cr-3-or-below": {
    "name": "Distruggere Non Morti",
    "description": "A partire dal 5° livello, quando un non morto fallisce il suo tiro salvezza contro il privilegio Scacciare Non Morti del chierico, quella creatura è distrutta istantaneamente se il suo grado di sfida è pari o inferiore a una certa soglia, come indicato dalla tabella \"Distruggere Non Morti\".\n\nDistruggere Non Morti\n\nLivello da chierico\n\nDistruggere i Non Morti di GS...\n\n5°\n\n1/2 o inferiore\n\n8°\n\n1 o inferiore\n\n11°\n\n2 o inferiore\n\n14°\n\n3 o inferiore\n\n17°\n\n4 o inferiore"
  },
  "cleric-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un chierico può aumentare di 2 un punteggio di caratteristica a sua scelta,, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "destroy-undead-cr-4-or-below": {
    "name": "Distruggere Non Morti",
    "description": "A partire dal 5° livello, quando un non morto fallisce il suo tiro salvezza contro il privilegio Scacciare Non Morti del chierico, quella creatura è distrutta istantaneamente se il suo grado di sfida è pari o inferiore a una certa soglia, come indicato dalla tabella \"Distruggere Non Morti\".\n\nDistruggere Non Morti\n\nLivello da chierico\n\nDistruggere i Non Morti di GS...\n\n5°\n\n1/2 o inferiore\n\n8°\n\n1 o inferiore\n\n11°\n\n2 o inferiore\n\n14°\n\n3 o inferiore\n\n17°\n\n4 o inferiore"
  },
  "channel-divinity-3-rest": {
    "name": "Incanalare Divinità",
    "description": "Al 2° livello, un chierico ottiene la capacità di incanalare energia divina direttamente dalla sua divinità e usa quell'energia per alimentare gli effetti magici. Un chierico parte con due effetti di questo tipo: Scacciare Non Morti e un effetto determinato dal suo dominio. Alcuni domini conferiscono al chierico degli effetti aggiuntivi man mano che avanza di livello, nel modo indicato nella descrizione del dominio. Quando un chierico utilizza Incanalare Divinità, può scegliere quale effetto creare. Deve poi completare un riposo breve o lungo per utilizzare di nuovo Incanalare Divinità. Alcuni effetti di Incanalare Divinità richiedono dei tiri salvezza. Quando un chierico utilizza un tale effetto, la CD è pari alla CD del tiro salvezza sui suoi incantesimi da chierico. A partire dal 6° livello, un chierico può utilizzare Incanalare Divinità due volte tra un riposo e l'altro. Inoltre, a partire dal 18° livello, può usarlo tre volte tra un riposo e l'altro. Quando completa un riposo breve o lungo, recupera gli utilizzi spesi.\n\n#### Incanalare Divinità: Scacciare Non Morti\n\nCon un'azione, il chierico brandisce il suo simbolo sacro e pronuncia una preghiera di condanna nei confronti dei non morti. Ogni non morto che è in grado vedere o sentire il chierico e si trova entro 9 metri da lui deve effettuare un tiro salvezza su Saggezza. Se lo fallisce, la creatura è considerata scacciata per 1 minuto o finché non subisce danni. Una creatura scacciata deve spendere i suoi turni tentando di allontanarsi il più possibile dal chierico e non può volontariamente muoversi in uno spazio entro 9 metri da lui. Inoltre, non può effettuare reazioni. Come sua azione può usare solo l'azione di Scatto o tentare di fuggire da un effetto che gli impedisce di muoversi. Se non può muoversi in alcuno spazio, la creatura può usare l'azione di Schivata."
  },
  "cleric-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un chierico può aumentare di 2 un punteggio di caratteristica a sua scelta,, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "favored-enemy-1-type": {
    "name": "Nemico Prescelto",
    "description": "A partire dal 1° livello, un ranger dimostra una notevole esperienza nello studiare, seguire le tracce, dare la caccia e perfino parlare con un certo tipo di nemico. Il giocatore seleziona un tipo di nemico prescelto: aberrazioni, bestie, celestiali, costrutti, draghi, elementali, folletti, giganti, immondi, melme, mostruosità, non morti o vegetali. In alternativa, può scegliere due razze di umanoidi (per esempio gnoll e orchi) come nemici prescelti. Il ranger dispone di vantaggio alle prove di Saggezza (Sopravvivenza) effettuate per seguire le tracce dei suoi nemici prescelti, nonché alle prove di Intelligenza per ricordare le informazioni a essi relative. Quando ottiene questo privilegio, il ranger apprende anche un linguaggio a sua scelta tra quelli parlati dal suo nemico prescelto (ammesso che ne parli uno). Il ranger sceglie un nemico prescelto aggiuntivo (e un linguaggio a esso associato) al 6° e al 14° livello. Man mano che acquisisce livelli, le sue scelte dovrebbero riflettere i tipi di mostri che ha incontrato nel corso delle sue avventure."
  },
  "natural-explorer-1-terrain-type": {
    "name": "Esploratore Nato",
    "description": "Il ranger conosce molto bene un tipo di ambiente naturale ed è particolarmente abile nel viaggiare e sopravvivere in quelle regioni. Il giocatore sceglie un tipo di terreno prescelto: artico, costa, deserto, foresta, montagna, palude o prateria. Quando il ranger effettua una prova di Intelligenza o di Saggezza relativa al suo terreno prescelto, raddoppia il suo bonus di competenza se usa un'abilità in cui possiede competenza. Quando viaggia per un'ora o più in una regione del suo terreno prescelto, il ranger ottiene i benefici seguenti: •Il terreno difficile non rallenta il viaggio del suo gruppo. •Il suo gruppo non può smarrirsi, se non per cause magiche. •Anche se il ranger è impegnato in un'altra attività mentre viaggia (per esempio foraggiare, orientarsi o seguire tracce), rimane all'erta nei confronti dei potenziali pericoli. •Se il ranger viaggia da solo, può muoversi furtivamente a passo normale. •Quando foraggia, il ranger trova il doppio del cibo che troverebbe normalmente.•Quando segue le tracce di altre creature, apprende anche il loro numero esatto, le loro taglie e da quanto tempo sono passate nell'area. Il ranger sceglie altri tipi di terreno prescelto al 6° e al 10° livello."
  },
  "ranger-fighting-style": {
    "name": "Stile di Combattimento",
    "description": "Al 2° livello, un ranger adotta uno stile di combattimento in cui specializzarsi scegliendo una tra le opzioni seguenti. Non è consentito scegliere uno stile di combattimento più di una volta, anche se in seguito il ranger ha diritto a scegliere di nuovo.\n\n#### Combattere con Due Armi\n\nQuando il ranger combatte con due armi, può aggiungere il suo modificatore di caratteristica ai danni del secondo attacco.\n\n#### Difesa\n\nFinché indossa un'armatura, il ranger ottiene un bonus di +1 alla CA.\n\n#### Duellare\n\nQuando il ranger impugna un'arma da mischia in una mano e non impugna altre armi, ottiene un bonus di +2 ai tiri per i danni di quell'arma.\n\n#### Tiro\n\nIl ranger ottiene un bonus di +2 ai tiri per colpire che effettua con le armi a distanza."
  },
  "spellcasting-ranger": {
    "name": "Incantesimi",
    "description": "Quando arriva al 2° livello, un ranger impara a usare l'essenza magica della natura per lanciare incantesimi in modo molto simile a un druido.\n\n#### Slot incantesimo\n\nLa tabella \"Ranger\" indica quanti slot incantesimo possiede un ranger per lanciare i suoi incantesimi di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Per esempio, se un ranger conosce l'incantesimo di 1° livello *amicizia con gli animali* e possiede uno slot incantesimo di 1° livello e uno slot incantesimo di 2° livello, può lanciare *amicizia con gli animali* usando uno qualsiasi dei due slot.\n\n#### Incantesimi conosciuti di 1° livello e di livello superiore\n\nUn ranger conosce due incantesimi di 1° livello a sua scelta dalla lista degli incantesimi da ranger. La colonna \"Incantesimi conosciuti\" nella tabella \"Ranger\" indica quando un ranger impara altri incantesimi da ranger a sua scelta. Ognuno di questi incantesimi deve appartenere a un livello di cui possiede degli slot incantesimo. Per esempio, quando un ranger arriva al 5° livello, può imparare un nuovo incantesimo di 1° o di 2° livello. Inoltre, quando un ranger acquisisce un livello, può scegliere un incantesimo da ranger che conosce e sostituirlo con un altro incantesimo dalla lista degli incantesimi da ranger; anche il nuovo incantesimo deve essere di un livello di cui il ranger possiede degli slot incantesimo.\n\n#### Caratteristica da incantatore\n\nSaggezza è la caratteristica da incantatore per gli incantesimi da ranger, dal momento che la sua magia deriva dalla sintonia con la natura. Un ranger usa Saggezza ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Saggezza per definire la CD del tiro salvezza di un incantesimo da ranger da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di SaggezzaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Saggezza"
  },
  "ranger-archetype": {
    "name": "Archetipo Ranger",
    "description": "Al 3° livello, un ranger sceglie un archetipo che si sforzerà di emulare, per esempio il Cacciatore. Questa scelta gli conferisce alcuni privilegi al 3° livello e poi di nuovo al 7°, 11° e 15° livello."
  },
  "primeval-awareness": {
    "name": "Consapevolezza Primordiale",
    "description": "A partire dal 3° livello, un ranger può usare la sua azione e spendere uno slot incantesimo da ranger per concentrare la sua percezione sull'area attorno a lui. Per 1 minuto per ogni livello dello slot incantesimo speso, il ranger può percepire se le seguenti creature sono presenti entro 1,5 km da lui (o entro 9 km se si trova nel suo terreno prescelto): aberrazioni, celestiali, draghi, elementali, folletti,immondi e non morti. Questo privilegio non rivela la posizione esatta o il numero delle creature."
  },
  "ranger-ability-score-improvement-1": {
    "name": "Aumento dei punteggi di caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un ranger può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "ranger-extra-attack": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un ranger può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno."
  },
  "favored-enemy-2-types": {
    "name": "Nemico Prescelto",
    "description": "A partire dal 1° livello, un ranger dimostra una notevole esperienza nello studiare, seguire le tracce, dare la caccia e perfino parlare con un certo tipo di nemico. Il giocatore seleziona un tipo di nemico prescelto: aberrazioni, bestie, celestiali, costrutti, draghi, elementali, folletti, giganti, immondi, melme, mostruosità, non morti o vegetali. In alternativa, può scegliere due razze di umanoidi (per esempio gnoll e orchi) come nemici prescelti. Il ranger dispone di vantaggio alle prove di Saggezza (Sopravvivenza) effettuate per seguire le tracce dei suoi nemici prescelti, nonché alle prove di Intelligenza per ricordare le informazioni a essi relative. Quando ottiene questo privilegio, il ranger apprende anche un linguaggio a sua scelta tra quelli parlati dal suo nemico prescelto (ammesso che ne parli uno). Il ranger sceglie un nemico prescelto aggiuntivo (e un linguaggio a esso associato) al 6° e al 14° livello. Man mano che acquisisce livelli, le sue scelte dovrebbero riflettere i tipi di mostri che ha incontrato nel corso delle sue avventure."
  },
  "natural-explorer-2-terrain-types": {
    "name": "Esploratore Nato",
    "description": "Il ranger conosce molto bene un tipo di ambiente naturale ed è particolarmente abile nel viaggiare e sopravvivere in quelle regioni. Il giocatore sceglie un tipo di terreno prescelto: artico, costa, deserto, foresta, montagna, palude o prateria. Quando il ranger effettua una prova di Intelligenza o di Saggezza relativa al suo terreno prescelto, raddoppia il suo bonus di competenza se usa un'abilità in cui possiede competenza. Quando viaggia per un'ora o più in una regione del suo terreno prescelto, il ranger ottiene i benefici seguenti: •Il terreno difficile non rallenta il viaggio del suo gruppo. •Il suo gruppo non può smarrirsi, se non per cause magiche. •Anche se il ranger è impegnato in un'altra attività mentre viaggia (per esempio foraggiare, orientarsi o seguire tracce), rimane all'erta nei confronti dei potenziali pericoli. •Se il ranger viaggia da solo, può muoversi furtivamente a passo normale. •Quando foraggia, il ranger trova il doppio del cibo che troverebbe normalmente.•Quando segue le tracce di altre creature, apprende anche il loro numero esatto, le loro taglie e da quanto tempo sono passate nell'area. Il ranger sceglie altri tipi di terreno prescelto al 6° e al 10° livello."
  },
  "ranger-ability-score-improvement-2": {
    "name": "Aumento dei punteggi di caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un ranger può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "ranger-lands-stride": {
    "name": "Andatura sul Territorio",
    "description": "A partire dall'8° livello, muoversi attraverso il terreno difficile non magico non richiede più un costo in movimento extra al ranger. Inoltre, può passare attraverso i vegetali non magici senza esserne rallentato e senza subire danni se tali vegetali presentano spine, aculei o altri pericoli simili. Inoltre, il ranger dispone di vantaggio ai tiri salvezza contro i vegetali creati magicamente o manipolati per ostacolare il movimento, come quelli creati dall'incantesimo *intralciare*."
  },
  "natural-explorer-3-terrain-types": {
    "name": "Esploratore Nato",
    "description": "Il ranger conosce molto bene un tipo di ambiente naturale ed è particolarmente abile nel viaggiare e sopravvivere in quelle regioni. Il giocatore sceglie un tipo di terreno prescelto: artico, costa, deserto, foresta, montagna, palude o prateria. Quando il ranger effettua una prova di Intelligenza o di Saggezza relativa al suo terreno prescelto, raddoppia il suo bonus di competenza se usa un'abilità in cui possiede competenza. Quando viaggia per un'ora o più in una regione del suo terreno prescelto, il ranger ottiene i benefici seguenti: •Il terreno difficile non rallenta il viaggio del suo gruppo. •Il suo gruppo non può smarrirsi, se non per cause magiche. •Anche se il ranger è impegnato in un'altra attività mentre viaggia (per esempio foraggiare, orientarsi o seguire tracce), rimane all'erta nei confronti dei potenziali pericoli. •Se il ranger viaggia da solo, può muoversi furtivamente a passo normale. •Quando foraggia, il ranger trova il doppio del cibo che troverebbe normalmente.•Quando segue le tracce di altre creature, apprende anche il loro numero esatto, le loro taglie e da quanto tempo sono passate nell'area. Il ranger sceglie altri tipi di terreno prescelto al 6° e al 10° livello."
  },
  "hide-in-plain-sight": {
    "name": "Nascondersi in Piena Vista",
    "description": "A partire dal 10° livello, un ranger può impiegare 1 minuto per mimetizzarsi con l'ambiente. Deve essere in grado di accedere a fango fresco, terriccio, vegetali, fuliggine e altro materiale naturale adatto con cui mimetizzarsi. Una volta mimetizzatosi in questo modo, può tentare di nascondersi appiattendosi contro una superficie solida, come un albero o una parete, che sia alta e larga almeno quanto lui. Il ranger ottiene un bonus di +10 alle prove di Destrezza (Furtività) finché rimane dove si trova senza muoversi e senza effettuare azioni. Se si muove o effettua un'azione o una reazione, dovrà mimetizzarsi di nuovo per ottenere questo beneficio."
  },
  "ranger-ability-score-improvement-3": {
    "name": "Aumento dei punteggi di caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un ranger può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "favored-enemy-3-enemies": {
    "name": "Nemico Prescelto",
    "description": "A partire dal 1° livello, un ranger dimostra una notevole esperienza nello studiare, seguire le tracce, dare la caccia e perfino parlare con un certo tipo di nemico. Il giocatore seleziona un tipo di nemico prescelto: aberrazioni, bestie, celestiali, costrutti, draghi, elementali, folletti, giganti, immondi, melme, mostruosità, non morti o vegetali. In alternativa, può scegliere due razze di umanoidi (per esempio gnoll e orchi) come nemici prescelti. Il ranger dispone di vantaggio alle prove di Saggezza (Sopravvivenza) effettuate per seguire le tracce dei suoi nemici prescelti, nonché alle prove di Intelligenza per ricordare le informazioni a essi relative. Quando ottiene questo privilegio, il ranger apprende anche un linguaggio a sua scelta tra quelli parlati dal suo nemico prescelto (ammesso che ne parli uno). Il ranger sceglie un nemico prescelto aggiuntivo (e un linguaggio a esso associato) al 6° e al 14° livello. Man mano che acquisisce livelli, le sue scelte dovrebbero riflettere i tipi di mostri che ha incontrato nel corso delle sue avventure."
  },
  "vanish": {
    "name": "Svanire",
    "description": "A partire dal 14° livello, un ranger può usare l'azione Nascondersi come azione bonus nel suo turno. Oltre a questo, non è possibile seguire le sue tracce tramite mezzi non magici, a meno che il ranger non decida di lasciare una pista."
  },
  "ranger-ability-score-improvement-4": {
    "name": "Aumento dei punteggi di caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un ranger può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "feral-senses": {
    "name": "Sensi Ferini",
    "description": "Al 18° livello, un ranger sviluppa un senso soprannaturale che gli permette di combattere anche con le creature che non è in grado di vedere. Quando un ranger attacca una creatura che non è in grado di vedere, la sua incapacità nel localizzarla non impone svantaggio ai suoi tiri per colpire contro di essa. Il ranger è inoltre consapevole della posizione di qualsiasi creatura invisibile entro 9 metri da lui, purché quella creatura non sia nascosta a lui e il ranger non sia accecato o assordato."
  },
  "ranger-ability-score-improvement-5": {
    "name": "Aumento dei punteggi di caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un ranger può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "foe-slayer": {
    "name": "Sterminatore di Nemici",
    "description": "Al 20° livello, un ranger diventa un cacciatore implacabile dei suoi nemici. Una volta per ogni suo turno, può aggiungere il suo modificatore di Saggezza al tiro per colpire o al tiro per i danni di un attacco da lui effettuato contro uno dei suoi nemici prescelti. Può scegliere di utilizzare questo privilegio prima o dopo il tiro, ma prima che qualsiasi effetto del tiro sia applicato."
  },
  "otherworldly-patron": {
    "name": "Patrono Ultraterreno",
    "description": "Al 1° livello, un warlock stipula un patto con un essere ultraterreno a sua scelta: il Signore fatato, l'Immondo o il Grande Antico, ognuno dei quali è descritto in dettaglio alla fine della sezione di questa classe. La scelta del patrono gli conferisce alcuni privilegi al 1° livello e poi ancora al 6°, 10° e 14° livello."
  },
  "pact-magic": {
    "name": "Magia del Patto",
    "description": "Le ricerche arcane condotte dal warlock e l'energia magica che il suo patrono gli conferisce rendono il warlock particolarmente abile nell'uso degli incantesimi.\n\n#### Trucchetti\n\nUn warlock conosce due trucchetti a sua scelta tratti dalla lista degli incantesimi da warlock. Apprende ulteriori trucchetti da warlock a sua scelta ai livelli successivi, come indicato dalla colonna \"Trucchetti conosciuti\" nella tabella \"Warlock\".\n\n#### Slot incantesimo\n\nLa tabella \"Warlock\" indica quanti slot incantesimo possiede un warlock. La tabella indica anche il livello di quegli slot; tutti gli slot incantesimo da warlock sono dello stesso livello. Per lanciare un incantesimo di livello pari o superiore al 1°, il warlock deve spendere uno slot incantesimo. Il warlock recupera tutti gli slot incantesimo spesi quando completa un riposo breve o lungo. Per esempio, un warlock di 5° livello possiede due slot incantesimo di 3° livello. Per lanciare l'incantesimo di 1° livello *onda tonante* deve spendere uno di quegli slot e lanciarlo come incantesimo di 3° livello.\n\n#### Incantesimi conosciuti di 1° livello e di livello superiore\n\nAl 1° livello, un warlock conosce due incantesimi di 1° livello a sua scelta dalla lista degli incantesimi da warlock. La colonna \"Incantesimi conosciuti\" nella tabella \"Warlock\" indica quando un warlock impara altri incantesimi da warlock a sua scelta di 1° livello o superiore. Ognuno di questi incantesimi deve appartenere a un livello pari o inferiore al \"Livello dello slot\" relativo al livello attuale del warlock e indicato nella sua tabella. Per esempio, quando un warlock arriva al 6° livello apprende un nuovo incantesimo da warlock di 1°, 2° o 3° livello.Inoltre, quando un warlock acquisisce un livello, può scegliere un incantesimo da warlock che conosce e sostituirlo con un altro incantesimo della lista degli incantesimi da warlock; anche il nuovo incantesimo deve essere di un livello di cui possiede degli slot incantesimo.\n\n#### Caratteristica da incantatore\n\nCarisma è la caratteristica da incantatore per gli incantesimi da warlock, quindi un warlock usa Carisma ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Carisma per definire la CD del tiro salvezza di un incantesimo da warlock da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di CarismaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Carisma\n\n#### Focus da incantatore\n\nUn warlock può usare un focus arcano come focus da incantatore per i suoi incantesimi da warlock."
  },
  "eldritch-invocations": {
    "name": "Suppliche Occulte",
    "description": "Dedicandosi allo studio delle scienze occulte, un warlock ha scoperto come usare alcune suppliche occulte, frammenti di conoscenze proibite che gli conferiscono persistenti doti magiche. Al 2° livello, il warlock ottiene due suppliche occulte a sua scelta. Le sue opzioni di invocazione sono illustrate alla fine della descrizione di questa classe. Quando il warlock raggiunge livelli superiori, ottiene ulteriori suppliche a sua scelta, come indicato nella colonna \"Suppliche conosciute\" nella tabella \"Warlock\". Inoltre, quando acquisisce un nuovo livello, il warlock può scegliere una delle suppliche che conosce e sostituirla con un'altra che potrebbe imparare a quel livello."
  },
  "pact-boon": {
    "name": "Dono del Patto",
    "description": "Al 3° livello, il patrono ultraterreno elargisce al warlock un dono per ricompensarlo dei suoi fedeli servigi. Il warlock ottiene uno dei seguenti privilegi a sua scelta.\n\n#### Patto della Catena\n\nIl warlock impara l'incantesimo *trova famiglio* e può lanciarlo come rituale. Questo incantesimo non va conteggiato al fine di determinare il numero di incantesimi conosciuti dal warlock. Quando il warlock lancia l'incantesimo, può scegliere per il suo famiglio una delle forme normali o una delle forme speciali seguenti: imp, pseudodrago, quasit o spiritello. Inoltre, quando effettua l'azione Attacco, il warlock può rinunciare a uno dei suoi attacchi per consentire al suo famiglio di effettuare un suo attacco individuale con la sua reazione.\n\n#### Patto della Lama\n\nIl warlock può usare la sua azione per fare apparire un'arma del patto nella sua mano vuota. Può scegliere la forma che questa arma da mischia assume ogni volta che la crea. Il warlock è considerato competente nell'arma fintantoché la impugna. Quest'arma è considerata magica al fine di superare la resistenza e l'immunità agli attacchi e ai danni non magici. L'arma del patto scompare se rimane per un minuto a più di 1,5 metri di distanza dal warlock. L'arma scompare anche se il warlock utilizza di nuovo il privilegio, se la congeda (non è richiesta alcuna azione per farlo), o se muore. Il warlock può trasformare un'arma magica nella sua arma del patto celebrando un rituale speciale mentre la impugna. Il rituale dura 1 ora e può essere completato durante un periodo di riposo breve. Una volta completato il rituale, il warlock può congedare l'arma relegandola in uno spazio extradimensionale; da allora in poi compare ogni volta che il warlock crea la sua arma del patto. Non è possibile influenzare un manufatto o un'arma senziente in questo modo. L'arma cessa di essere l'arma del patto se il warlock muore, se celebra un rituale di 1 ora su un'altra arma o se celebra un altro rituale di 1 ora per spezzare il suo vincolo con l'arma. Se l'arma si trova nello spazio extradimensionale quando il vincolo viene spezzato, ricompare ai piedi del warlock.\n\n#### Patto del Tomo\n\nIl patrono dona al warlock un grimorio chiamato il Libro delle Ombre. Quando ottiene questo privilegio, il warlock può scegliere tre trucchetti dalla lista degli incantesimi di qualsiasi classe (non devono necessariamente appartenere alla stessa lista). Quando il warlock porta il libro con sé, può lanciare quei trucchetti a volontà. Non vengono conteggiatial fine di determinare il numero di trucchetti conosciuti dal warlock. Anche se non compaiono sulla lista degli incantesimi da warlock, sono comunque considerati incantesimi da warlock per lui. Se il Libro delle Ombre va perduto, il warlock può effettuare un cerimoniale da 1 ora per riceverne un altro dal proprio patrono. Tale cerimoniale può essere effettuato durante un periodo di riposo breve o lungo, e provoca la distruzione del vecchio libro. Il libro si riduce in polvere alla morte del warlock."
  },
  "warlock-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un warlock può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "warlock-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un warlock può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "mystic-arcanum-6th-level": {
    "name": "Arcanum Mistico",
    "description": "All'11° livello, il patrono rivela al warlock un segreto magico chiamato arcanum. Il warlock sceglie un incantesimo di 6° livello dalla lista degli incantesimi da warlock come arcanum. Il warlock può lanciare il suo incantesimo arcanum senza spendere uno slot incantesimo. Deve completare un riposo lungo prima di poterlo fare di nuovo. Ai livelli successivi, il warlock ottiene altri incantesimi da warlock a sua scelta da lanciare in questo modo: un incantesimo di 7° livello al 13° livello, un incantesimo di 8° livello al 15° livello e un incantesimo di 9° livello al 17° livello. Recupera tutti gli utilizzi del suo Arcanum Mistico quando completa un riposo lungo."
  },
  "warlock-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un warlock può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "mystic-arcanum-7th-level": {
    "name": "Arcanum Mistico",
    "description": "All'11° livello, il patrono rivela al warlock un segreto magico chiamato arcanum. Il warlock sceglie un incantesimo di 6° livello dalla lista degli incantesimi da warlock come arcanum. Il warlock può lanciare il suo incantesimo arcanum senza spendere uno slot incantesimo. Deve completare un riposo lungo prima di poterlo fare di nuovo. Ai livelli successivi, il warlock ottiene altri incantesimi da warlock a sua scelta da lanciare in questo modo: un incantesimo di 7° livello al 13° livello, un incantesimo di 8° livello al 15° livello e un incantesimo di 9° livello al 17° livello. Recupera tutti gli utilizzi del suo Arcanum Mistico quando completa un riposo lungo."
  },
  "mystic-arcanum-8th-level": {
    "name": "Arcanum Mistico",
    "description": "All'11° livello, il patrono rivela al warlock un segreto magico chiamato arcanum. Il warlock sceglie un incantesimo di 6° livello dalla lista degli incantesimi da warlock come arcanum. Il warlock può lanciare il suo incantesimo arcanum senza spendere uno slot incantesimo. Deve completare un riposo lungo prima di poterlo fare di nuovo. Ai livelli successivi, il warlock ottiene altri incantesimi da warlock a sua scelta da lanciare in questo modo: un incantesimo di 7° livello al 13° livello, un incantesimo di 8° livello al 15° livello e un incantesimo di 9° livello al 17° livello. Recupera tutti gli utilizzi del suo Arcanum Mistico quando completa un riposo lungo."
  },
  "warlock-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un warlock può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "mystic-arcanum-9th-level": {
    "name": "Arcanum Mistico",
    "description": "All'11° livello, il patrono rivela al warlock un segreto magico chiamato arcanum. Il warlock sceglie un incantesimo di 6° livello dalla lista degli incantesimi da warlock come arcanum. Il warlock può lanciare il suo incantesimo arcanum senza spendere uno slot incantesimo. Deve completare un riposo lungo prima di poterlo fare di nuovo. Ai livelli successivi, il warlock ottiene altri incantesimi da warlock a sua scelta da lanciare in questo modo: un incantesimo di 7° livello al 13° livello, un incantesimo di 8° livello al 15° livello e un incantesimo di 9° livello al 17° livello. Recupera tutti gli utilizzi del suo Arcanum Mistico quando completa un riposo lungo."
  },
  "warlock-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un warlock può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "eldritch-master": {
    "name": "Maestro dell'Occulto",
    "description": "Al 20° livello, il warlock è in grado di attingere alla sua riserva interiore di potere mistico quando invoca il suo patrono per riottenere gli slot incantesimo spesi. Il warlock può trascorrere 1 minuto invocando l'aiuto del suo patrono per riottenere tutti gli slot incantesimo concessi dal privilegio Magia del Patto che ha speso. Una volta riottenuti gli slot incantesimo tramite questo privilegio, il warlock deve completare un riposo lungo prima di poterlo fare di nuovo."
  },
  "spellcasting-sorcerer": {
    "name": "Incantesimi",
    "description": "Un evento nel passato dello stregone o nella vita di un suo parente o antenato ha lasciato su di lui un segno indelebile, infondendogli magia arcana. È questa fonte di magia, qualunque sia la sua origine, ad alimentare i suoi incantesimi.\n\n#### Trucchetti\n\nAl 1° livello, uno stregone conosce quattro trucchetti a sua scelta tratti dalla lista degli incantesimi da stregone. Apprende ulteriori trucchetti da stregone a sua scelta ai livelli successivi, come indicato dalla colonna \"Trucchetti conosciuti\" nella tabella \"Stregone\".\n\n#### Slot incantesimo\n\nLa tabella \"Stregone\" indica quanti slot incantesimo possiede uno stregone per lanciare i suoi incantesimi di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Per esempio, se uno stregone conosce l'incantesimo di 1° livello *mani brucianti* e possiede uno slot incantesimo di 1° livello e uno slot incantesimo di 2° livello, può lanciare *mani brucianti* usando uno qualsiasi dei due slot.\n\n#### Incantesimi conosciuti di 1° livello e di livello superiore\n\nUn stregone conosce due incantesimi di 1° livello a sua scelta dalla lista degli incantesimi da stregone. La colonna \"Incantesimi conosciuti\" nella tabella \"Stregone\" indica quando uno stregone impara altri incantesimi da stregone a sua scelta. Ognuno di questi incantesimi deve appartenere a un livello di cui lo stregone possiede degli slot incantesimo. Per esempio, quando uno stregone arriva al 3° livello, può imparare un nuovo incantesimo di 1° o di 2° livello. Inoltre, quando uno stregone acquisisce un livello, può scegliere un incantesimo da stregone che conosce e sostituirlo con un altro incantesimo dalla lista degli incantesimi da stregone; anche il nuovo incantesimo deve essere di un livello di cui possiede degli slot incantesimo.\n\n#### Caratteristica da incantatore\n\nCarisma è la caratteristica da incantatore per gli incantesimi da stregone, dal momento che il potere magico di uno stregone dipende dall'intensità con cui egli riesce a proiettare la sua volontà nel mondo esterno. Usa Carisma ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Carisma per definire la CD del tiro salvezza di un incantesimo da stregone da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di CarismaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Carisma\n\n#### Focus da incantatore\n\nUno stregone può usare un focus arcano come focus da incantatore per i suoi incantesimi da stregone."
  },
  "sorcerous-origin": {
    "name": "Origine Stregonesca",
    "description": "Il giocatore sceglie un'origine stregonesca che definisca la fonte dei poteri magici innati dello stregone, per esempio Discendenza draconica. Questa scelta conferisce allo stregone alcuni privilegi al 1° livello e poi di nuovo al 6°, 14° e 18° livello."
  },
  "font-of-magic": {
    "name": "Fonte di Magia",
    "description": "Dal 2° livello lo stregone dispone di punti stregoneria, indicati dalla tabella della classe. Recupera tutti i punti spesi dopo un riposo lungo e non può superare il massimo previsto dal proprio livello. Può trasformare punti in slot incantesimo o convertire slot in punti usando un’azione bonus. Per costi e limiti, consulta le due voci di Lancio Flessibile."
  },
  "metamagic-1": {
    "name": "Metamagia",
    "description": "Al 3° livello, uno stregone sviluppa la capacità di plasmare i suoi incantesimi per adattarli ai suoi bisogni e ottiene due delle seguenti opzioni di Metamagia a sua scelta. Ne ottiene un'altra al 10° livello e un'altra al 17° livello. Lo stregone può usare soltanto un'opzione di Metamagia su un incantesimo quando lo lancia, a meno che non sia specificato diversamente.\n\n#### Incantesimo celato\n\nQuando lo stregone lancia un incantesimo, può spendere 1 punto stregoneria per lanciarlo senza componenti somatiche o verbali.\n\n#### Incantesimo distante\n\nQuando lo stregone lancia un incantesimo che ha una gittata pari o superiore a 1,5 metri, può spendere 1 punto stregoneria per raddoppiare la gittata dell'incantesimo. Quando lancia un incantesimo che ha una gittata a contatto, può spendere 1 punto stregoneria per cambiare quella gittata in 9 metri.\n\n#### Incantesimo esteso\n\nQuando lo stregone lancia un incantesimo di durata pari o superiore a 1 minuto, può spendere 1 punto stregoneria per raddoppiare la sua durata, fino a una durata massima di 24 ore.\n\n#### Incantesimo intensificato\n\nQuando lo stregone lancia un incantesimo che obbliga una creatura a effettuare un tiro salvezza per resistere ai suoi effetti, può spendere 3 punti stregoneria per infliggere svantaggio a un bersaglio dell'incantesimo in occasione del primo tiro salvezza che effettuerà contro l'incantesimo.\n\n#### Incantesimo potenziato\n\nQuando lo stregone tira per i danni di un incantesimo, può spendere 1 punto stregoneria per ripetere il tiro di un numero massimo di dadi pari al suo modificatore di Carisma (minimo di uno). Deve usare i nuovi risultati. Lo stregone può utilizzare Incantesimo potenziato anche se ha già utilizzato un'opzione diversa di Metamagia durante il lancio dell'incantesimo.\n\n#### Incantesimo preciso\n\nQuando lo stregone lancia un incantesimo che obbliga altre creature a effettuare un tiro salvezza, può proteggere alcune di esse dalla piena forza dell'incantesimo. Per farlo spende 1 punto stregoneria e sceglie un numero massimo di creature pari al suo modificatore di Carisma (minimo una creatura). Ogni creatura scelta supera automaticamente il suo tiro salvezza contro l'incantesimo.\n\n#### Incantesimo raddoppiato\n\nQuando lo stregone lancia un incantesimo che bersaglia una sola creatura e non ha una gittata di \"incantatore\", può spendere un numero di punti stregoneria pari al livello dell'incantesimo per bersagliare con lo stesso incantesimo una seconda creatura entro gittata (1 punto stregoneria se l'incantesimo è un trucchetto). Affinché sia selezionabile, un incantesimo non deve essere in grado di bersagliare più di una creatura al suo livello di incantesimo attuale. Per esempio, *dardo incantato* e *raggio rovente* non sono selezionabili, mentre *raggio di gelo* sì.\n\n#### Incantesimo rapido\n\nQuando lo stregone lancia un incantesimo che ha un tempo di lancio pari a 1 azione, può spendere 2 punti stregoneria per cambiare il tempo di lancio a 1 azione bonus per quel lancio."
  },
  "sorcerer-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, uno stregone può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "sorcerer-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, uno stregone può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "metamagic-2": {
    "name": "Metamagia",
    "description": "Al 3° livello, uno stregone sviluppa la capacità di plasmare i suoi incantesimi per adattarli ai suoi bisogni e ottiene due delle seguenti opzioni di Metamagia a sua scelta. Ne ottiene un'altra al 10° livello e un'altra al 17° livello. Lo stregone può usare soltanto un'opzione di Metamagia su un incantesimo quando lo lancia, a meno che non sia specificato diversamente.\n\n#### Incantesimo celato\n\nQuando lo stregone lancia un incantesimo, può spendere 1 punto stregoneria per lanciarlo senza componenti somatiche o verbali.\n\n#### Incantesimo distante\n\nQuando lo stregone lancia un incantesimo che ha una gittata pari o superiore a 1,5 metri, può spendere 1 punto stregoneria per raddoppiare la gittata dell'incantesimo. Quando lancia un incantesimo che ha una gittata a contatto, può spendere 1 punto stregoneria per cambiare quella gittata in 9 metri.\n\n#### Incantesimo esteso\n\nQuando lo stregone lancia un incantesimo di durata pari o superiore a 1 minuto, può spendere 1 punto stregoneria per raddoppiare la sua durata, fino a una durata massima di 24 ore.\n\n#### Incantesimo intensificato\n\nQuando lo stregone lancia un incantesimo che obbliga una creatura a effettuare un tiro salvezza per resistere ai suoi effetti, può spendere 3 punti stregoneria per infliggere svantaggio a un bersaglio dell'incantesimo in occasione del primo tiro salvezza che effettuerà contro l'incantesimo.\n\n#### Incantesimo potenziato\n\nQuando lo stregone tira per i danni di un incantesimo, può spendere 1 punto stregoneria per ripetere il tiro di un numero massimo di dadi pari al suo modificatore di Carisma (minimo di uno). Deve usare i nuovi risultati. Lo stregone può utilizzare Incantesimo potenziato anche se ha già utilizzato un'opzione diversa di Metamagia durante il lancio dell'incantesimo.\n\n#### Incantesimo preciso\n\nQuando lo stregone lancia un incantesimo che obbliga altre creature a effettuare un tiro salvezza, può proteggere alcune di esse dalla piena forza dell'incantesimo. Per farlo spende 1 punto stregoneria e sceglie un numero massimo di creature pari al suo modificatore di Carisma (minimo una creatura). Ogni creatura scelta supera automaticamente il suo tiro salvezza contro l'incantesimo.\n\n#### Incantesimo raddoppiato\n\nQuando lo stregone lancia un incantesimo che bersaglia una sola creatura e non ha una gittata di \"incantatore\", può spendere un numero di punti stregoneria pari al livello dell'incantesimo per bersagliare con lo stesso incantesimo una seconda creatura entro gittata (1 punto stregoneria se l'incantesimo è un trucchetto). Affinché sia selezionabile, un incantesimo non deve essere in grado di bersagliare più di una creatura al suo livello di incantesimo attuale. Per esempio, *dardo incantato* e *raggio rovente* non sono selezionabili, mentre *raggio di gelo* sì.\n\n#### Incantesimo rapido\n\nQuando lo stregone lancia un incantesimo che ha un tempo di lancio pari a 1 azione, può spendere 2 punti stregoneria per cambiare il tempo di lancio a 1 azione bonus per quel lancio."
  },
  "sorcerer-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, uno stregone può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "sorcerer-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, uno stregone può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "metamagic-3": {
    "name": "Metamagia",
    "description": "Al 3° livello, uno stregone sviluppa la capacità di plasmare i suoi incantesimi per adattarli ai suoi bisogni e ottiene due delle seguenti opzioni di Metamagia a sua scelta. Ne ottiene un'altra al 10° livello e un'altra al 17° livello. Lo stregone può usare soltanto un'opzione di Metamagia su un incantesimo quando lo lancia, a meno che non sia specificato diversamente.\n\n#### Incantesimo celato\n\nQuando lo stregone lancia un incantesimo, può spendere 1 punto stregoneria per lanciarlo senza componenti somatiche o verbali.\n\n#### Incantesimo distante\n\nQuando lo stregone lancia un incantesimo che ha una gittata pari o superiore a 1,5 metri, può spendere 1 punto stregoneria per raddoppiare la gittata dell'incantesimo. Quando lancia un incantesimo che ha una gittata a contatto, può spendere 1 punto stregoneria per cambiare quella gittata in 9 metri.\n\n#### Incantesimo esteso\n\nQuando lo stregone lancia un incantesimo di durata pari o superiore a 1 minuto, può spendere 1 punto stregoneria per raddoppiare la sua durata, fino a una durata massima di 24 ore.\n\n#### Incantesimo intensificato\n\nQuando lo stregone lancia un incantesimo che obbliga una creatura a effettuare un tiro salvezza per resistere ai suoi effetti, può spendere 3 punti stregoneria per infliggere svantaggio a un bersaglio dell'incantesimo in occasione del primo tiro salvezza che effettuerà contro l'incantesimo.\n\n#### Incantesimo potenziato\n\nQuando lo stregone tira per i danni di un incantesimo, può spendere 1 punto stregoneria per ripetere il tiro di un numero massimo di dadi pari al suo modificatore di Carisma (minimo di uno). Deve usare i nuovi risultati. Lo stregone può utilizzare Incantesimo potenziato anche se ha già utilizzato un'opzione diversa di Metamagia durante il lancio dell'incantesimo.\n\n#### Incantesimo preciso\n\nQuando lo stregone lancia un incantesimo che obbliga altre creature a effettuare un tiro salvezza, può proteggere alcune di esse dalla piena forza dell'incantesimo. Per farlo spende 1 punto stregoneria e sceglie un numero massimo di creature pari al suo modificatore di Carisma (minimo una creatura). Ogni creatura scelta supera automaticamente il suo tiro salvezza contro l'incantesimo.\n\n#### Incantesimo raddoppiato\n\nQuando lo stregone lancia un incantesimo che bersaglia una sola creatura e non ha una gittata di \"incantatore\", può spendere un numero di punti stregoneria pari al livello dell'incantesimo per bersagliare con lo stesso incantesimo una seconda creatura entro gittata (1 punto stregoneria se l'incantesimo è un trucchetto). Affinché sia selezionabile, un incantesimo non deve essere in grado di bersagliare più di una creatura al suo livello di incantesimo attuale. Per esempio, *dardo incantato* e *raggio rovente* non sono selezionabili, mentre *raggio di gelo* sì.\n\n#### Incantesimo rapido\n\nQuando lo stregone lancia un incantesimo che ha un tempo di lancio pari a 1 azione, può spendere 2 punti stregoneria per cambiare il tempo di lancio a 1 azione bonus per quel lancio."
  },
  "sorcerer-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, uno stregone può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "sorcerous-restoration": {
    "name": "Ripristino Stregonesco",
    "description": "Al 20° livello, uno stregone recupera 4 punti stregoneria spesi ogni volta che completa un riposo breve."
  },
  "spellcasting-wizard": {
    "name": "Incantesimi",
    "description": "Un mago è uno studioso di magia arcana: possiede un libro degli incantesimi in cui sono contenuti gli incantesimi che costituiscono le prime scintille del suo futuro potere.\n\n#### Trucchetti\n\nAl 1° livello, un mago conosce tre trucchetti a sua scelta tratti dalla lista degli incantesimi da mago. Apprende ulteriori trucchetti da mago a sua scelta**Armi:**Balestre leggere, bastoni ferrati, dardi, fionde, pugnali **Strumenti:**Nessuno **Tiri Salvezza:Intelligenza, SaggezzaAbilità:**Due a scelta tra Arcano, Indagare, Intuizione, Medicina, Religione e Storia\n\n#### Equipaggiamento\n\nInizia con l'equipaggiamento seguente, in aggiunta all'equipaggiamento conferito dal suo background: •(*a*) un bastone ferrato o (*b*) un pugnale •(*a*) una borsa per componenti o (*b*) un focus arcano •(*a*) una dotazione da studioso o (*b*) una dotazione da esploratore •un libro degli incantesimi ai livelli successivi, come indicato dalla colonna \"Trucchetti Conosciuti\" nella tabella \"Mago\".\n\n#### Libro degli incantesimi\n\nAl 1° livello, un mago possiede un libro degli incantesimi che contiene sei incantesimi da mago di 1° livello a sua scelta. Questo libro degli incantesimi contiene tutti gli incantesimi da mago conosciuti dal personaggio, ad eccezione dei suoi trucchetti, che sono impressi direttamente nella sua mente.\n\n#### Preparare e lanciare incantesimi\n\nLa tabella \"Mago\" indica quanti slot incantesimo possiede un mago per lanciare i suoi incantesimi da mago di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Il mago prepara la lista degli incantesimi da mago disponibili da lanciare scegliendoli dalla lista degli incantesimi da mago. Quando lo fa, deve scegliere un numero di incantesimi da mago dal suo libro degli incantesimi pari al suo modificatore di Intelligenza + il suo livello da mago (minimo di un incantesimo). Gli incantesimi devono essere di un livello di cui possiede degli slot incantesimo. Per esempio, un mago di 3° livello possiede quattro slot incantesimo di 1° livello e due slot incantesimo di 2° livello. Con Intelligenza pari a 16, la lista dei suoi incantesimi preparati può includere sei incantesimi di 1° o 2° livello, in qualsiasi combinazione, scelti dal suo libro degli incantesimi. Se prepara l'incantesimo di 1° livello *dardo incantato*, potrà lanciarlo usando uno slot incantesimo di 1° livello o di 2° livello. Il lancio di quell'incantesimo non rimuove quell'incantesimo dalla lista di incantesimi preparati. Può cambiare la lista dei suoi incantesimi preparati quando completa un riposo lungo. Per preparare una nuova lista di incantesimi da mago è necessario un certo ammontare di tempo da trascorrere studiando il libro degli incantesimi e memorizzando le formule e i gesti necessari per lanciare l'incantesimo: almeno 1 minuto per livello di incantesimo per ogni incantesimo nella sua lista.\n\n#### Caratteristica da Incantatore\n\nIntelligenza è la caratteristica da incantatore usata per gli incantesimi da mago, dal momento che egli impara i suoi incantesimi tramite lo studio costante e la memorizzazione. Usa Intelligenza ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Intelligenza per definire la CD del tiro salvezza di un incantesimo da mago da lui lanciato e quando effettua un tiro per colpire con un incantesimo.**CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di IntelligenzaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Intelligenza\n\n#### Celebrare Rituali\n\nUn mago può lanciare un incantesimo da mago come rituale se quell'incantesimo possiede il descrittore rituale ed è presente nel suo libro degli incantesimi. Non è necessario che abbia preparato quell'incantesimo.\n\n#### Focus da incantatore\n\nUn mago può usare un focus arcano come focus da incantatore per i suoi incantesimi da mago.\n\n#### Imparare incantesimi di 1° livello e di livello superiore\n\nOgni volta che il personaggio acquisisce un livello da mago, può aggiungere gratuitamente due incantesimi da mago a sua scelta al suo libro degli incantesimi. Ognuno di questi incantesimi deve essere di un livello di cui il mago possiede degli slot incantesimo, come indicato nella tabella \"Mago\". Nel corso delle sue avventure potrebbe trovare altri incantesimi da aggiungere al suo libro (vedi il riquadro \"Il Libro degli Incantesimi del Mago\")."
  },
  "arcane-recovery": {
    "name": "Recupero Arcano",
    "description": "Un mago impara a recuperare parte della sua energia magica studiando il suo libro degli incantesimi. Una volta al giorno, quando completa un riposo breve, il mago sceglie quali slot incantesimo spesi desidera recuperare. Questi slot incantesimo possono avere un livello totale pari o inferiore alla metà del livello da mago (arrotondato per eccesso) e nessuno slot può essere di livello pari o superiore al 6°. Per esempio, un mago di 4° livello può recuperare slot incantesimo per un valore totale di due livelli. Potrà quindi recuperare uno slot di 2° livello o due slot di 1° livello."
  },
  "arcane-tradition": {
    "name": "Tradizione Arcana",
    "description": "Quando un mago arriva al 2° livello, sceglie una tradizione arcana che modellerà la sua pratica della magia in base ai precetti di una delle otto scuole di magia, per esempio la Scuola di Invocazione. Questa scelta gli conferisce alcuni privilegi al 2° livello e poi di nuovo al 6°, 10° e 14° livello."
  },
  "wizard-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un mago può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "wizard-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un mago può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "wizard-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un mago può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "wizard-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un mago può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "spell-mastery": {
    "name": "Maestria negli Incantesimi",
    "description": "Al 18° livello, il mago raggiunge una tale maestria nell'uso di certi incantesimi da poterli lanciare a volontà. Il personaggio sceglie un incantesimo da mago di 1° livello e un incantesimo da mago di 2° livello contenuti nel suo libro degli incantesimi. Può lanciare quegli incantesimi al loro livello più basso senza spendere uno slot incantesimo quando li ha preparati. Se desidera lanciare uno di quegli incantesimi a un livello superiore, deve spendere uno slot incantesimo come di consueto. Dedicando 8 ore allo studio, il mago può cambiare uno o entrambi gli incantesimi scelti con incantesimi diversi degli stessi livelli."
  },
  "wizard-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un mago può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "signature-spell": {
    "name": "Incantesimi Personali",
    "description": "Quando il mago arriva al 20° livello, padroneggia due potenti incantesimi che è in grado di lanciare con minimo sforzo. Il mago sceglie due incantesimi da mago di 3° livello contenuti nel suo libro degli incantesimi come suoi incantesimi personali. Il mago considera questi incantesimi sempre preparati, non li conta al fine di determinare il numero di incantesimi preparati e può lanciare ognuno di quegli incantesimi una volta al 3° livello senza spendere uno slot incantesimo. Quando lo fa, non può farlo di nuovo finché non completa un riposo breve o lungo. Se desidera lanciare uno di quegli incantesimi a un livello superiore, deve spendere uno slot incantesimo come di consueto."
  },
  "divine-sense": {
    "name": "Percezione del Divino",
    "description": "Un paladino percepisce una presenza del male particolarmente forte, come se un fetore assalisse le sue narici, mentre una forte presenza del bene equivale per lui a una musica celestiale che risuona nelle sue orecchie. Con un'azione, un paladino può proiettare le sue percezioni attorno a sé per avvertire la presenza di queste forze. Fino alla fine del suo turno successivo, il paladino conosce l'ubicazione di ogni celestiale, immondo o non morto**Armi:**Armi semplici, armi da guerra **Strumenti:**Nessuno **Tiri Salvezza:Saggezza, CarismaAbilità:**Due a scelta tra Atletica, Intimidire, Intuizione, Medicina, Persuasione e Religione\n\n#### Equipaggiamento\n\nInizia con l'equipaggiamento seguente, in aggiunta all'equipaggiamento conferito dal suo background: •(*a*) un'arma da guerra e uno scudo o (*b*) due armi da guerra •(*a*) cinque giavellotti o (*b*) una qualsiasi arma semplice da mischia •(*a*) una dotazione da sacerdote o (*b*) una dotazione da esploratore •una cotta di maglia e un simbolo sacro entro 18 metri da lui e che non si trova sotto copertura totale. Il paladino riconosce il tipo (celestiale, immondo o non morto) di qualsiasi creatura di cui riesca a percepire la presenza, ma non la sua identità (il conte vampiro Strahd von Zarovich, per esempio). Entro lo stesso raggio, il paladino individua anche la presenza di qualsiasi luogo o oggetto sacro o sacrilego, con gli stessi effetti dell'incantesimo *santificare*. Il paladino può utilizzare questo privilegio un numero di volte pari a 1 + il suo modificatore di Carisma. Quando completa un riposo lungo, recupera tutti gli utilizzi spesi."
  },
  "lay-on-hands": {
    "name": "Imposizione delle Mani",
    "description": "Il tocco benedetto di un paladino è in grado di guarire le ferite. Un paladino possiede una riserva di poteri curativi che si ricostituisce quando completa un riposo lungo. Grazie a quella riserva, può ripristinare un numero totale di punti ferita pari a 5 volte il proprio livello da paladino. Con un'azione, il paladino può toccare una creatura e attingere al potere della sua riserva per ripristinare un certo numero di punti ferita in quella creatura, fino all'ammontare massimo rimasto nella sua riserva. In alternativa, può spendere 5 punti ferita dalla sua riserva di guarigione per curare il bersaglio da una malattia o neutralizzare un veleno a cui è soggetto. Il paladino può curare più malattie e neutralizzare più veleni con un singolo utilizzo di Imposizione delle Mani, spendendo separatamente i punti ferita per ogni caso. Questo privilegio non ha effetto sui costrutti e sui non morti."
  },
  "paladin-fighting-style": {
    "name": "Stile di Combattimento",
    "description": "Al 2° livello, un paladino adotta uno stile di combattimento in cui specializzarsi scegliendo una tra le opzioni seguenti. Non è consentito scegliere uno stile di combattimento più di una volta, anche se in seguito il paladino ha diritto a scegliere di nuovo.\n\n#### Combattere con Armi Possenti\n\nQuando il paladino ottiene un 1 o un 2 a un tiro per i danni di un attacco che ha effettuato con un'arma da mischia impugnata a due mani, può ripetere il tiro e deve usare il nuovo risultato. L'arma deve possedere la proprietà a due mani o versatile affinché il paladino ottenga questo beneficio.\n\n#### Difesa\n\nFinché indossa un'armatura, il paladino ottiene un bonus di +1 alla CA.\n\n#### Duellare\n\nQuando il paladino impugna un'arma da mischia in una mano e non impugna altre armi, ottiene un bonus di +2 ai tiri per i danni di quell'arma.#### Protezione\n\nQuando una creatura che il paladino sia in grado di vedere attacca un bersaglio diverso dal paladino e situato entro 1,5 metri da lui, il paladino può usare la sua reazione per infliggere svantaggio al tiro per colpire della creatura. Il paladino deve impugnare uno scudo."
  },
  "spellcasting-paladin": {
    "name": "Incantesimi",
    "description": "Quando arriva al 2° livello, un paladino attinge alla magia divina attraverso la preghiera e la meditazione al fine di lanciare incantesimi in modo molto simile a un chierico.\n\n#### Preparare e lanciare incantesimi\n\nLa tabella \"Paladino\" indica quanti slot incantesimo possiede un paladino per lanciare i suoi incantesimi. Per lanciare uno dei suoi incantesimi da paladino di 1° livello o superiore, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Il paladino prepara la lista degli incantesimi da paladino disponibili da lanciare scegliendoli dalla lista degli incantesimi da paladino. Quando lo fa, deve scegliere un numero di incantesimi da paladino pari al suo modificatore di Carisma + metà del suo livello da paladino arrotondato per difetto (minimo un incantesimo). Gli incantesimi devono essere di un livello di cui il paladino possiede degli slot incantesimo. Per esempio, un paladino di 5° livello possiede quattro slot incantesimo di 1° livello e due slot incantesimo di 2° livello. Con Carisma pari a 14, la lista dei suoi incantesimi preparati può includere quattro incantesimi di 1° o 2° livello, in qualsiasi combinazione. Se prepara l'incantesimo di 1° livello *cura ferite*, potrà lanciarlo usando uno slot incantesimo di 1° livello o di 2° livello. Il lancio di quell'incantesimo non lo rimuove dalla lista di incantesimi preparati. Il paladino può cambiare la lista dei suoi incantesimi preparati quando completa un riposo lungo. Per preparare una nuova lista di incantesimi da paladino, il personaggio deve passare un certo ammontare di tempo in preghiera e meditazione: almeno 1 minuto per livello di incantesimo per ogni incantesimo nella sua lista.\n\n#### Caratteristica da incantatore\n\nCarisma è la caratteristica da incantatore usata per gli incantesimi da paladino, dal momento che il suo potere deriva dalla forza delle sue convinzioni. Usa Carisma ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Carisma per definire la CD del tiro salvezza di un incantesimo da paladino da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo**= 8 + il bonus di competenza + il modificatore di CarismaModificatore di attacco dell'incantesimo**= il bonus di competenza + il modificatore di Carisma\n\n#### Focus da incantatore\n\nUn paladino può usare un simbolo sacro come focus da incantatore per i suoi incantesimi da paladino."
  },
  "divine-smite": {
    "name": "Punizione Divina",
    "description": "A partire dal 2° livello, quando il paladino colpisce una creatura con un attacco con arma da mischia, può spendere uno slot incantesimo per infliggere danni radiosi al bersaglio in aggiunta ai danni dell'arma. I danni extra sono 2d8 per uno slot incantesimo di 1° livello, più 1d8 per ogni livello di incantesimo superiore al 1°, fino a un massimo di 5d8. I danni aumentano di 1d8 se il bersaglio è un non morto o un immondo."
  },
  "divine-health": {
    "name": "Salute Divina",
    "description": "Giunto al 3° livello, un paladino diventa immune alle malattie grazie alla magia divina."
  },
  "sacred-oath": {
    "name": "Giuramento Sacro",
    "description": "Una volta giunto al 3° livello, il paladino formula il giuramento che lo vincolerà alla sua vocazione per sempre. Finora il paladino ha vissuto una fase preparatoria in cui si è dedicato a una causa, ma non ha ancora formulato un giuramento. Ora deve sceglierne uno, per esempio il Giuramento di Devozione. Il giuramento scelto gli conferisce alcuni privilegi al 3° livello e poi di nuovo al 7°, 15° e 20° livello. Questi privilegi includono alcuni incantesimi di giuramento e il privilegio Incanalare divinità.#### Incantesimi di giuramento\n\nA ogni giuramento è associata una lista di incantesimi. Il paladino ottiene l'accesso a questi incantesimi ai livelli specificati nella descrizione del giuramento. Una volta ottenuto l'accesso a un incantesimo, quell'incantesimo è sempre considerato preparato e non conta al fine di determinare il numero di incantesimi che il paladino può preparare ogni giorno. Se il paladino possiede un incantesimo di giuramento che non compare sulla lista degli incantesimi da paladino, quell'incantesimo è comunque considerato un incantesimo da paladino per lui.\n\n#### Incanalare Divinità\n\nGrazie al suo giuramento, un paladino può incanalare l'energia divina per alimentare alcuni effetti magici. Ogni opzione di Incanalare Divinità fornitagli dal suo giuramento include la spiegazione del suo utilizzo. Quando un paladino utilizza Incanalare Divinità, può scegliere quale opzione usare. Deve poi completare un riposo breve o lungo per utilizzare di nuovo Incanalare Divinità. Alcuni effetti di Incanalare Divinità richiedono dei tiri salvezza. Quando un paladino utilizza un tale effetto, la CD è pari alla CD del tiro salvezza sui suoi incantesimi da paladino."
  },
  "paladin-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un paladino può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "paladin-extra-attack": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un paladino può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno."
  },
  "aura-of-protection": {
    "name": "Aura di Protezione",
    "description": "A partire dal 6° livello, ogni volta che il paladino o una creatura amica entro 3 metri da lui deve effettuare un tiro salvezza, il paladino o la creatura in questione ottiene un bonus al tiro salvezza pari al modificatore di Carisma del paladino (fino a un bonus minimo di +1). Il paladino deve essere cosciente per conferire questo bonus. Al 18° livello, la gittata di quest'aura aumenta a 9 metri."
  },
  "paladin-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un paladino può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "aura-of-courage": {
    "name": "Aura di Coraggio",
    "description": "A partire dal 10° livello, il paladino e le creature amiche entro 3 metri da lui non possono essere spaventati finché il paladino è cosciente. Al 18° livello, la gittata di quest'aura aumenta a 9 metri."
  },
  "improved-divine-smite": {
    "name": "Punizione Divina Migliorata",
    "description": "All'11° livello, il paladino è talmente pervaso dalla potenza della giustizia che tutti i suoi colpi con le armi si caricano di potere divino. Ogni volta che colpisce una creatura con un'arma da mischia, quella creatura subisce 1d8 danni radiosi extra. Se il paladino usa anche Punizione Divina insieme a un attacco, aggiunge questi danni ai danni extra di Punizione Divina."
  },
  "paladin-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un paladino può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "cleansing-touch": {
    "name": "Tocco Purificatore",
    "description": "A partire dal 14° livello, il paladino può usare la sua azione per terminare un incantesimo su se stesso o su una creatura consenziente che sta toccando. Il paladino può utilizzare questo privilegio un numero di volte pari al suo modificatore di Carisma (fino a un minimo di una volta). Recupera gli utilizzi spesi quando completa un riposo lungo."
  },
  "paladin-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un paladino può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "paladin-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un paladino può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "fighter-fighting-style": {
    "name": "Stile di Combattimento",
    "description": "Un guerriero adotta uno stile di combattimento in cui specializzarsi scegliendo una tra le opzioni seguenti. Non è consentito scegliere uno stile di combattimento più di una volta, anche se in seguito il guerriero ha diritto a scegliere di nuovo.\n\n#### Combattere con Armi Possenti\n\nQuando il guerriero ottiene un 1 o un 2 a un tiro per i danni di un attacco che ha effettuato con un'arma da mischia impugnata a due mani, può ripetere il tiro e deve usare il nuovo risultato, anche se ottiene ancora un 1 o un 2. L'arma deve possedere la proprietà a due mani o versatile affinché il guerriero ottenga questo beneficio.\n\n#### Combattere con Due Armi\n\nQuando il guerriero combatte con due armi, può aggiungere il suo modificatore di caratteristica ai danni del secondo attacco.\n\n#### Difesa\n\nFinché indossa un'armatura, il guerriero ottiene un bonus di +1 alla CA.\n\n#### Duellare\n\nQuando il guerriero impugna un'arma da mischia in una mano e non impugna altre armi, ottiene un bonus di +2 ai tiri per i danni di quell'arma.\n\n#### Protezione\n\nQuando una creatura che il guerriero sia in grado di vedere attacca un bersaglio diverso dal guerriero e situato entro 1,5 metri da lui, il guerriero può usare la sua reazione per infliggere svantaggio al tiro per colpire della creatura. Il guerriero deve impugnare uno scudo.\n\n#### Tiro\n\nIl guerriero ottiene un bonus di +2 ai tiri per colpire che effettua con le armi a distanza."
  },
  "second-wind": {
    "name": "Recuperare Energie",
    "description": "Un guerriero possiede una riserva limitata di resistenza fisica a cui può attingere per proteggersi dai danni. Nel suo turno può usare un'azione bonus per recuperare un ammontare di punti ferita pari a 1d10 + il suo livello da guerriero. Una volta utilizzato questo privilegio, il guerriero non può più utilizzarlo finché non completa un riposo breve o lungo."
  },
  "action-surge-1-use": {
    "name": "Azione Impetuosa",
    "description": "A partire dal 2° livello, un guerriero può spingersi oltre i suoi normali limiti per un istante. Nel suo turno può effettuare un'azione aggiuntiva e una possibile azione bonus. Una volta utilizzato questo privilegio, il guerriero non può più utilizzarlo finché non completa un riposo breve o lungo. A partire dal 17° livello, il guerriero può utilizzare questo privilegio due volte prima di un riposo, ma soltanto una volta nello stesso turno."
  },
  "martial-archetype": {
    "name": "Archetipo Marziale",
    "description": "Al 3° livello, un guerriero sceglie un archetipo che si sforzerà di emulare tramite i suoi stili di combattimento e le sue tecniche, per esempio il Campione. L'archetipo scelto conferisce al guerriero alcuni privilegi al 3° livello e poi di nuovo al 7°, 10°, 15° e 18° livello."
  },
  "fighter-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "extra-attack-1": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un guerriero può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno. Il numero di attacchi aumenta a tre quando il guerriero arriva all'11° livello e a quattro quando arriva al 20° livello."
  },
  "fighter-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "fighter-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "indomitable-1-use": {
    "name": "Indomabile",
    "description": "A partire dal 9° livello, un guerriero può ripetere un tiro salvezza che ha fallito. Se lo fa, deve usare il nuovo risultato e non può più utilizzare questo privilegio finché non completa un riposo lungo. Un guerriero può utilizzare questo privilegio due volte tra un riposo lungo e l'altro a partire dal 13° livello e tre volte tra un riposo lungo e l'altro a partire dal 17° livello."
  },
  "extra-attack-2": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un guerriero può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno. Il numero di attacchi aumenta a tre quando il guerriero arriva all'11° livello e a quattro quando arriva al 20° livello."
  },
  "fighter-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "indomitable-2-uses": {
    "name": "Indomabile",
    "description": "A partire dal 9° livello, un guerriero può ripetere un tiro salvezza che ha fallito. Se lo fa, deve usare il nuovo risultato e non può più utilizzare questo privilegio finché non completa un riposo lungo. Un guerriero può utilizzare questo privilegio due volte tra un riposo lungo e l'altro a partire dal 13° livello e tre volte tra un riposo lungo e l'altro a partire dal 17° livello."
  },
  "fighter-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "fighter-ability-score-improvement-6": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "action-surge-2-uses": {
    "name": "Azione Impetuosa",
    "description": "A partire dal 2° livello, un guerriero può spingersi oltre i suoi normali limiti per un istante. Nel suo turno può effettuare un'azione aggiuntiva e una possibile azione bonus. Una volta utilizzato questo privilegio, il guerriero non può più utilizzarlo finché non completa un riposo breve o lungo. A partire dal 17° livello, il guerriero può utilizzare questo privilegio due volte prima di un riposo, ma soltanto una volta nello stesso turno."
  },
  "indomitable-3-uses": {
    "name": "Indomabile",
    "description": "A partire dal 9° livello, un guerriero può ripetere un tiro salvezza che ha fallito. Se lo fa, deve usare il nuovo risultato e non può più utilizzare questo privilegio finché non completa un riposo lungo. Un guerriero può utilizzare questo privilegio due volte tra un riposo lungo e l'altro a partire dal 13° livello e tre volte tra un riposo lungo e l'altro a partire dal 17° livello."
  },
  "fighter-ability-score-improvement-7": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo al 6°, all'8°, al 12°, al 14°, al 16° e al 19° livello, un guerriero può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "extra-attack-3": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un guerriero può attaccare due volte anziché una, ogni volta che effettua l'azione Attacco nel proprio turno. Il numero di attacchi aumenta a tre quando il guerriero arriva all'11° livello e a quattro quando arriva al 20° livello."
  },
  "rogue-expertise-1": {
    "name": "Maestria",
    "description": "Al 1° livello, un ladro sceglie due tra le sue competenze nelle abilità, oppure una sua competenza in una abilità e la competenza negli arnesi da scasso. Il suo bonus di competenza raddoppia in ogni prova di caratteristica effettuata usando una delle competenze scelte. Al 6° livello, il ladro sceglie altre due sue competenze (nelle abilità o negli arnesi da scasso) che ottengono questo beneficio."
  },
  "sneak-attack": {
    "name": "Attacco Furtivo",
    "description": "A partire dal 1° livello, un ladro sa come colpire con precisione sfruttando la distrazione di un avversario. Una volta per turno, il ladro può infliggere 1d6 danni extra a una creatura che colpisce con un attacco, se dispone di vantaggio al tiro per colpire. L'attacco deve utilizzare un'arma accurata o un'arma a distanza. Il ladro non necessita di vantaggio al tiro per colpire se un altro nemico del bersaglio si trova entro 1,5 metri da esso (purché tale nemico non sia incapacitato) e se il tiro per colpire del ladro non subisce svantaggio. L'ammontare di danni extra aumenta man mano che il ladro acquisisce livelli, come indicato nella colonna \"Attacco Furtivo\" nella tabella \"Ladro\"."
  },
  "thieves-cant": {
    "name": "Gergo Ladresco",
    "description": "Durante il proprio addestramento, il ladro apprende il gergo ladresco, un misto di dialetto, termini colloquiali e codici che gli permette di nascondere dei messaggi in una conversazione apparentemente normale. Soltanto un'altra creatura che conosca il gergo ladresco capisce questi messaggi. Per trasmettere un concetto tramite il gergo ladresco serve il quadruplo del tempo che normalmente servirebbe per esprimerlo direttamente. Inoltre, il ladro capisce una serie di simboli e segni segreti usati per trasmettere semplici messaggi brevi, per esempio per indicare se un'area è pericolosa, se un territorio ricade sotto il controllo di una gilda di ladri, se ci sono bottini o bersagli facili nei paraggi o se qualcuno è disposto a offrire un rifugio sicuro a un ladro in fuga."
  },
  "cunning-action": {
    "name": "Azione Scaltra",
    "description": "A partire dal 2° livello, la prontezza di spirito e l'agilità del ladro gli consentono di muoversi e di agire in fretta. Il ladro può effettuare un'azione bonus in ognuno dei suoi turni in combattimento. Questa azione può essere usata solo per effettuare l'azione di Disimpegno, Nascondersi o Scatto."
  },
  "roguish-archetype": {
    "name": "Archetipo Ladresco",
    "description": "Al 3° livello, un ladro sceglie un archetipo da emulare nell'esercizio delle sue capacità da ladro, per esempio il Furfante. L'archetipo scelto conferisce al ladro alcuni privilegi al 3° livello e poi di nuovo al 9°, 13° e 17° livello."
  },
  "rogue-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "uncanny-dodge": {
    "name": "Schivata Prodigiosa",
    "description": "A partire dal 5° livello, quando un attaccante che il ladro è in grado di vedere colpisce il ladro con un attacco, quest'ultimo può usare la sua reazione per dimezzare i danni che subirebbe."
  },
  "rogue-expertise-2": {
    "name": "Maestria",
    "description": "Al 1° livello, un ladro sceglie due tra le sue competenze nelle abilità, oppure una sua competenza in una abilità e la competenza negli arnesi da scasso. Il suo bonus di competenza raddoppia in ogni prova di caratteristica effettuata usando una delle competenze scelte. Al 6° livello, il ladro sceglie altre due sue competenze (nelle abilità o negli arnesi da scasso) che ottengono questo beneficio."
  },
  "rogue-evasion": {
    "name": "Elusione",
    "description": "A partire dal 7° livello, un ladro può schivare agilmente certi effetti ad area come il soffio di fuoco di un drago rosso o un incantesimo *tempesta di* *ghiaccio*. Quando il ladro è soggetto a un effetto che gli consente di effettuare un tiro salvezza su Destrezza per dimezzare i danni, non subisce alcun danno se lo supera, e soltanto la metà dei danni se lo fallisce."
  },
  "rogue-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "rogue-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "reliable-talent": {
    "name": "Dote Affidabile",
    "description": "All'11° livello, un ladro ha affinato le abilità da lui scelte fino a portarle quasi alla perfezione. Ogni volta che il ladro effettua una prova di caratteristica che gli permette di aggiungere il suo bonus di competenza, può considerare un tiro del d20 pari o inferiore a 9 come se fosse un 10."
  },
  "rogue-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "blindsense": {
    "name": "Percezione Cieca",
    "description": "A partire dal 14° livello, se il ladro è in grado di sentire, è consapevole della posizione di ogni creatura nascosta o invisibile entro 3 metri da lui."
  },
  "slippery-mind": {
    "name": "Mente Sfuggente",
    "description": "Al 15° livello, il ladro sviluppa una maggiore resistenza mentale. Ottiene competenza nei tiri salvezza su Saggezza."
  },
  "rogue-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "elusive": {
    "name": "Inafferrabile",
    "description": "A partire dal 18° livello, il ladro è talmente sfuggente che gli attaccanti riescono raramente ad avere il sopravvento su di lui. Nessun tiro per colpire effettuato contro il ladro dispone di vantaggio, a meno che il ladro non sia incapacitato."
  },
  "rogue-ability-score-improvement-6": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 10°, 12°, 16° e 19° livello, un ladro può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "stroke-of-luck": {
    "name": "Colpo di Fortuna",
    "description": "Al 20° livello, il ladro sviluppa la prodigiosa tendenza ad avere successo proprio nel momento più opportuno. Se il suo attacco manca un bersaglio entro gittata, il ladro può trasformare l'attacco fallito in un attacco con successo. In alternativa, se fallisce una prova di caratteristica, può considerare il risultato del tiro del d20 come un 20. Una volta utilizzato questo privilegio, il ladro non può più utilizzarlo finché non completa un riposo breve o lungo."
  },
  "spellcasting-bard": {
    "name": "Incantesimi",
    "description": "Un bardo ha imparato a districare e rimodellare la trama della realtà in armonia con i suoi desideri e con la musica. I suoi incantesimi fanno parte del suo vasto repertorio come magie che il bardo può mettere in sintonia con le situazioni più disparate.\n\n#### Trucchetti\n\nUn bardo conosce due trucchetti a sua scelta tratti dalla lista degli incantesimi da bardo. Apprende ulteriori trucchetti da bardo a sua scelta ai livelli successivi, come indicato dalla colonna \"Trucchetti Conosciuti\" nella tabella \"Bardo\".\n\n#### Slot incantesimo\n\nLa tabella \"Bardo\" indica quanti slot incantesimo possiede un bardo per lanciare i suoi incantesimi di 1° livello e di livello superiore. Per lanciare uno di questi incantesimi, deve spendere uno slot incantesimo di livello pari o superiore a quello dell'incantesimo. Recupera tutti gli slot incantesimo spesi quando completa un riposo lungo. Per esempio, se un bardo conosce l'incantesimo di 1° livello *cura ferite* e possiede uno slot incantesimo di 1° livello e uno slot incantesimo di 2° livello, può lanciare *cura ferite* usando uno qualsiasi dei due slot.\n\n#### Incantesimi conosciuti di 1° livello e di livello superiore\n\nUn bardo conosce quattro incantesimi di 1° livello a sua scelta dalla lista degli incantesimi da bardo. La colonna \"Incantesimi conosciuti\" nella tabella \"Bardo\" indica quando un bardo impara altri incantesimi da bardo a sua scelta. Ognuno di questi incantesimi deve appartenere a un livello di cui il bardo possiede degli slot incantesimo, come indicato nella tabella. Per esempio, quando un bardo arriva al 3° livello, può imparare un nuovo incantesimo di 1° o di 2° livello. Inoltre, quando un bardo acquisisce un livello, può scegliere un incantesimo da bardo che conosce e sostituirlo con un altro incantesimo dalla lista degli incantesimi da bardo; anche il nuovo incantesimo deve essere di un livello di cui il bardo possiede degli slot incantesimo.\n\n#### Caratteristica da incantatore\n\nCarisma è la caratteristica da incantatore per gli incantesimi da bardo. La magia di un bardo fluisce dal cuore e dall'anima che egli riversa in ogni esibizione della sua musica o della sua oratoria.Usa Carisma ogni volta che un incantesimo fa riferimento alla sua caratteristica da incantatore. Usa inoltre il suo modificatore di Carisma per definire la CD del tiro salvezza di un incantesimo da bardo da lui lanciato e quando effettua un tiro per colpire con un incantesimo. **CD del tiro salvezza sull'incantesimo** = 8 + il bonus di competenza + il modificatore di CarismaModificatore di attacco dell'incantesimo** = il bonus di competenza + il modificatore di Carisma\n\n#### Celebrare rituali\n\nUn bardo può lanciare qualsiasi incantesimo da bardo a lui conosciuto come rituale se quell'incantesimo possiede il descrittore rituale.\n\n#### Focus da incantatore\n\nUn bardo può usare uno strumento musicale (vedi \"Equipaggiamento\") come focus da incantatore per i suoi incantesimi da bardo."
  },
  "bardic-inspiration-d6": {
    "name": "Ispirazione Bardica",
    "description": "Un bardo può ispirare gli altri tramite il lirismo delle sue parole o della sua musica. Per farlo usa un'azione bonus nel suo turno per scegliere una creatura diversa da se stesso, situata entro 18 metri da lui e in grado di sentirlo. Quella creatura ottiene un dado di Ispirazione Bardica, un d6. Una volta entro i 10 minuti successivi, quella creatura può tirare il dado e aggiungere il risultato ottenuto a una prova di caratteristica, un tiro per colpire o un tiro salvezza da essa effettuato. La creatura può aspettare di avere tirato il d20 prima di decidere se utilizzare il dado di Ispirazione Bardica, ma deve decidere se utilizzarlo prima che il GM dichiari se il tiro ha avuto successo o meno. Una volta tirato il dado di Ispirazione Bardica, quel dado è perduto. Una creatura può possedere un solo dado di Ispirazione Bardica alla volta. Il bardo può utilizzare questo privilegio un numero di volte pari al suo modificatore di Carisma (minimo di una volta). Recupera tutti gli utilizzi spesi quando completa un riposo lungo. Il dado di Ispirazione Bardica cambia quando vengono raggiunti determinati livelli in questa classe. Il dado diventa un d8 al 5° livello, un d10 al 10° livello e un d12 al 15° livello."
  },
  "jack-of-all-trades": {
    "name": "Factotum",
    "description": "A partire dal 2° livello, un bardo può aggiungere metà del suo bonus di competenza, arrotondato per difetto, a ogni prova di caratteristica da lui effettuata che non includa già il suo bonus di competenza."
  },
  "song-of-rest-d6": {
    "name": "Canto di Riposo",
    "description": "Dal 2° livello, un bardo può usare una musica o un'orazione lenitiva per infondere nuova vita nei suoi alleati feriti durante un riposo breve. Se il bardo o le eventuali creature amiche in grado di udire la sua esibizione recuperano punti ferita alla fine di un riposo breve spendendo uno o più Dadi Vita, ognuna di quelle creature recupera 1d6 punti ferita extra. I punti ferita extra aumentano quando il bardo raggiunge determinati livelli in questa classe: 1d8 al 9° livello, 1d10 al 13° livello e 1d12 al 17° livello."
  },
  "bard-expertise-1": {
    "name": "Maestria",
    "description": "Al 3° livello, un bardo sceglie due tra le sue competenze nelle abilità. Il suo bonus di competenza raddoppia in ogni prova di caratteristica effettuata usando una delle competenze scelte. Al 10° livello, un bardo può scegliere altre due competenze nelle abilità per ottenere questo beneficio."
  },
  "bard-college": {
    "name": "Collegio Bardico",
    "description": "Al 3° livello, un bardo apprende le tecniche più avanzate di un collegio bardico a sua scelta, come il Collegio della Sapienza. Questa scelta gli conferisce alcuni privilegi al 3° livello e poi di nuovo al 6° e al 14° livello."
  },
  "bard-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un bardo può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "bardic-inspiration-d8": {
    "name": "Ispirazione Bardica",
    "description": "Un bardo può ispirare gli altri tramite il lirismo delle sue parole o della sua musica. Per farlo usa un'azione bonus nel suo turno per scegliere una creatura diversa da se stesso, situata entro 18 metri da lui e in grado di sentirlo. Quella creatura ottiene un dado di Ispirazione Bardica, un d6. Una volta entro i 10 minuti successivi, quella creatura può tirare il dado e aggiungere il risultato ottenuto a una prova di caratteristica, un tiro per colpire o un tiro salvezza da essa effettuato. La creatura può aspettare di avere tirato il d20 prima di decidere se utilizzare il dado di Ispirazione Bardica, ma deve decidere se utilizzarlo prima che il GM dichiari se il tiro ha avuto successo o meno. Una volta tirato il dado di Ispirazione Bardica, quel dado è perduto. Una creatura può possedere un solo dado di Ispirazione Bardica alla volta. Il bardo può utilizzare questo privilegio un numero di volte pari al suo modificatore di Carisma (minimo di una volta). Recupera tutti gli utilizzi spesi quando completa un riposo lungo. Il dado di Ispirazione Bardica cambia quando vengono raggiunti determinati livelli in questa classe. Il dado diventa un d8 al 5° livello, un d10 al 10° livello e un d12 al 15° livello."
  },
  "font-of-inspiration": {
    "name": "Fonte di Ispirazione",
    "description": "A partire dal 5° livello, un bardo recupera tutti i suoi utilizzi spesi di Ispirazione Bardica quando completa un riposo breve o lungo."
  },
  "countercharm": {
    "name": "Controfascino",
    "description": "Al 6° livello, un bardo ottiene la capacità di usare note musicali o parole del potere per interferire negli effetti di influenza mentale. Con un'azione può iniziare un'esibizione che dura fino alla fine del suo turno successivo. Durante quel periodo, il bardo e ogni creatura amica entro 9 metri da lui dispongono di vantaggio ai tiri salvezza per non essere affascinati o spaventati. Una creatura deve essere in grado di sentire il bardo per ottenere questo beneficio. L'esibizione termina prematuramente se il bardo diventa incapacitato o è ridotto al silenzio, o se vi pone fine volontariamente (nessuna azione richiesta)."
  },
  "bard-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un bardo può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "song-of-rest-d8": {
    "name": "Canto di Riposo",
    "description": "Dal 2° livello, un bardo può usare una musica o un'orazione lenitiva per infondere nuova vita nei suoi alleati feriti durante un riposo breve. Se il bardo o le eventuali creature amiche in grado di udire la sua esibizione recuperano punti ferita alla fine di un riposo breve spendendo uno o più Dadi Vita, ognuna di quelle creature recupera 1d6 punti ferita extra. I punti ferita extra aumentano quando il bardo raggiunge determinati livelli in questa classe: 1d8 al 9° livello, 1d10 al 13° livello e 1d12 al 17° livello."
  },
  "bard-expertise-2": {
    "name": "Maestria",
    "description": "Al 3° livello, un bardo sceglie due tra le sue competenze nelle abilità. Il suo bonus di competenza raddoppia in ogni prova di caratteristica effettuata usando una delle competenze scelte. Al 10° livello, un bardo può scegliere altre due competenze nelle abilità per ottenere questo beneficio."
  },
  "bardic-inspiration-d10": {
    "name": "Ispirazione Bardica",
    "description": "Un bardo può ispirare gli altri tramite il lirismo delle sue parole o della sua musica. Per farlo usa un'azione bonus nel suo turno per scegliere una creatura diversa da se stesso, situata entro 18 metri da lui e in grado di sentirlo. Quella creatura ottiene un dado di Ispirazione Bardica, un d6. Una volta entro i 10 minuti successivi, quella creatura può tirare il dado e aggiungere il risultato ottenuto a una prova di caratteristica, un tiro per colpire o un tiro salvezza da essa effettuato. La creatura può aspettare di avere tirato il d20 prima di decidere se utilizzare il dado di Ispirazione Bardica, ma deve decidere se utilizzarlo prima che il GM dichiari se il tiro ha avuto successo o meno. Una volta tirato il dado di Ispirazione Bardica, quel dado è perduto. Una creatura può possedere un solo dado di Ispirazione Bardica alla volta. Il bardo può utilizzare questo privilegio un numero di volte pari al suo modificatore di Carisma (minimo di una volta). Recupera tutti gli utilizzi spesi quando completa un riposo lungo. Il dado di Ispirazione Bardica cambia quando vengono raggiunti determinati livelli in questa classe. Il dado diventa un d8 al 5° livello, un d10 al 10° livello e un d12 al 15° livello."
  },
  "magical-secrets-1": {
    "name": "Segreti Magici",
    "description": "Giunto al 10° livello, un bardo ha attinto alle conoscenze magiche provenienti da una vasta gamma di discipline. Il bardo sceglie due incantesimi di qualsiasi classe, inclusa questa stessa classe. Ogni incantesimo scelto deve essere di un livello che il bardo sia in grado di lanciare, come indicato dalla tabella \"Bardo\", oppure deve essere un trucchetto. Gli incantesimi scelti contano come incantesimi da bardo e vanno inclusi nel numero specificato dalla colonna \"Incantesimi conosciuti\" nella tabella \"Bardo\". Un bardo apprende due incantesimi aggiuntivi di qualsiasi classe al 14° livello e poi di nuovo al 18° livello."
  },
  "bard-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un bardo può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "song-of-rest-d10": {
    "name": "Canto di Riposo",
    "description": "Dal 2° livello, un bardo può usare una musica o un'orazione lenitiva per infondere nuova vita nei suoi alleati feriti durante un riposo breve. Se il bardo o le eventuali creature amiche in grado di udire la sua esibizione recuperano punti ferita alla fine di un riposo breve spendendo uno o più Dadi Vita, ognuna di quelle creature recupera 1d6 punti ferita extra. I punti ferita extra aumentano quando il bardo raggiunge determinati livelli in questa classe: 1d8 al 9° livello, 1d10 al 13° livello e 1d12 al 17° livello."
  },
  "magical-secrets-2": {
    "name": "Segreti Magici",
    "description": "Giunto al 10° livello, un bardo ha attinto alle conoscenze magiche provenienti da una vasta gamma di discipline. Il bardo sceglie due incantesimi di qualsiasi classe, inclusa questa stessa classe. Ogni incantesimo scelto deve essere di un livello che il bardo sia in grado di lanciare, come indicato dalla tabella \"Bardo\", oppure deve essere un trucchetto. Gli incantesimi scelti contano come incantesimi da bardo e vanno inclusi nel numero specificato dalla colonna \"Incantesimi conosciuti\" nella tabella \"Bardo\". Un bardo apprende due incantesimi aggiuntivi di qualsiasi classe al 14° livello e poi di nuovo al 18° livello."
  },
  "bardic-inspiration-d12": {
    "name": "Ispirazione Bardica",
    "description": "Un bardo può ispirare gli altri tramite il lirismo delle sue parole o della sua musica. Per farlo usa un'azione bonus nel suo turno per scegliere una creatura diversa da se stesso, situata entro 18 metri da lui e in grado di sentirlo. Quella creatura ottiene un dado di Ispirazione Bardica, un d6. Una volta entro i 10 minuti successivi, quella creatura può tirare il dado e aggiungere il risultato ottenuto a una prova di caratteristica, un tiro per colpire o un tiro salvezza da essa effettuato. La creatura può aspettare di avere tirato il d20 prima di decidere se utilizzare il dado di Ispirazione Bardica, ma deve decidere se utilizzarlo prima che il GM dichiari se il tiro ha avuto successo o meno. Una volta tirato il dado di Ispirazione Bardica, quel dado è perduto. Una creatura può possedere un solo dado di Ispirazione Bardica alla volta. Il bardo può utilizzare questo privilegio un numero di volte pari al suo modificatore di Carisma (minimo di una volta). Recupera tutti gli utilizzi spesi quando completa un riposo lungo. Il dado di Ispirazione Bardica cambia quando vengono raggiunti determinati livelli in questa classe. Il dado diventa un d8 al 5° livello, un d10 al 10° livello e un d12 al 15° livello."
  },
  "bard-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un bardo può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "song-of-rest-d12": {
    "name": "Canto di Riposo",
    "description": "Dal 2° livello, un bardo può usare una musica o un'orazione lenitiva per infondere nuova vita nei suoi alleati feriti durante un riposo breve. Se il bardo o le eventuali creature amiche in grado di udire la sua esibizione recuperano punti ferita alla fine di un riposo breve spendendo uno o più Dadi Vita, ognuna di quelle creature recupera 1d6 punti ferita extra. I punti ferita extra aumentano quando il bardo raggiunge determinati livelli in questa classe: 1d8 al 9° livello, 1d10 al 13° livello e 1d12 al 17° livello."
  },
  "magical-secrets-3": {
    "name": "Segreti Magici",
    "description": "Giunto al 10° livello, un bardo ha attinto alle conoscenze magiche provenienti da una vasta gamma di discipline. Il bardo sceglie due incantesimi di qualsiasi classe, inclusa questa stessa classe. Ogni incantesimo scelto deve essere di un livello che il bardo sia in grado di lanciare, come indicato dalla tabella \"Bardo\", oppure deve essere un trucchetto. Gli incantesimi scelti contano come incantesimi da bardo e vanno inclusi nel numero specificato dalla colonna \"Incantesimi conosciuti\" nella tabella \"Bardo\". Un bardo apprende due incantesimi aggiuntivi di qualsiasi classe al 14° livello e poi di nuovo al 18° livello."
  },
  "bard-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello e poi di nuovo all'8°, al 12°, al 16° e al 19° livello, un bardo può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "superior-inspiration": {
    "name": "Ispirazione Superiore",
    "description": "Al 20° livello, quando il bardo tira per l'iniziativa e non gli rimane alcun utilizzo di Ispirazione Bardica, ne recupera un utilizzo."
  },
  "martial-arts": {
    "name": "Arti Marziali",
    "description": "Al 1° livello, grazie alla sua perizia nelle arti marziali, un monaco padroneggia uno stile di combattimento che fa uso di colpi senz'armi e armi da monaco, vale a dire spade corte e qualsiasi arma da mischia semplice che non possieda la proprietà a due mani o la proprietà pesante. Un monaco ottiene i benefici seguenti fintantoché è senz'armi o impugna soltanto armi da monaco, non indossa alcuna armatura e non impugna uno scudo: •Un monaco può usare Destrezza anziché Forza per i tiri per colpire e i tiri per i danni dei suoi colpi senz'armi e delle sue armi da monaco. •Un monaco può tirare un d4 al posto dei normali danni del suo colpo senz'armi o della sua arma da monaco. Questo dado cambia man mano che il personaggio acquisisce altri livelli da monaco, come indicato nella colonna \"Arti Marziali\" nella tabella \"Monaco\". •Quando un monaco usa l'azione Attacco con un colpo senz'armi o un'arma da monaco nel suo turno, può effettuare un colpo senz'armi come azione bonus. Per esempio, se il monaco effettua l'azione Attacco con un bastone ferrato, può anche effettuare un colpo senz'armi come azione bonus, presumendo che non abbia già effettuato un'azione bonus in quel turno. Alcuni monasteri utilizzano armi da monaco dalla forma particolare. Per esempio, un monaco potrebbe usare un randello composto da due sbarre di legno collegate da una breve catena (chiamato nunchaku) o un falcetto con una lama più corta e meno ricurva (chiamato kama). A prescindere dal nome usato per un'arma da monaco, il monaco può usare le statistiche di gioco fornite dall'arma."
  },
  "ki": {
    "name": "Ki",
    "description": "A partire dal 2° livello, il monaco è in grado di imbrigliare l'energia mistica del ki grazie al suo addestramento. Il suo accesso a questa energia è rappresentato da un certo numero di punti ki determinato dal livello da monaco, come indicato nella colonna \"Punti Ki\" nella tabella \"Monaco\". Un monaco può spendere questi punti per alimentare i vari privilegi del ki. Inizialmente il monaco conosce tre di questi privilegi: Difesa Paziente, Passo del Vento e Raffica di Colpi. Apprenderà ulteriori privilegi del ki man mano che acquisirà altri livelli in questa classe. Quando il monaco spende un punto ki, quel punto non è più disponibile finché non completa un riposo breve o lungo, alla fine del quale il monaco riassorbe in sé tutto il ki che aveva speso. Il monaco deve trascorrere almeno 30 minuti in meditazione durante il riposo per recuperare i suoi punti ki. Alcuni privilegi del ki di un monaco richiedono al bersaglio di effettuare un tiro salvezza per resistere ai loro effetti. La CD del tiro salvezza viene definita nel modo seguente:**CD del tiro salvezza del Ki**= 8 + il bonus di competenza + il modificatore di Saggezza\n\n#### Difesa Paziente\n\nUn monaco può spendere 1 punto ki per effettuare l'azione Schivata come azione bonus nel suo turno.\n\n#### Passo del Vento\n\nUn monaco può spendere 1 punto ki per effettuare l'azione Disimpegno o Scatto come azione bonus nel suo turno; inoltre, la sua distanza di salto raddoppia per quel turno.\n\n#### Raffica di Colpi\n\nSubito dopo avere effettuato l'azione Attacco nel suo turno, il monaco può spendere 1 punto ki per sferrare due colpi senz'armi come azione bonus."
  },
  "unarmored-movement-1": {
    "name": "Movimento Senza Armatura",
    "description": "A partire dal 2° livello, la velocità di un monaco aumenta di 3 metri finché il monaco non indossa alcuna armatura e non impugna uno scudo. Questo bonus aumenta man mano che il personaggio acquisisce altri livelli da monaco, come indicato nella tabella \"Monaco\". Al 9° livello, un monaco ottiene la capacità di muoversi lungo le superfici verticali e sulle superfici liquide durante il suo turno senza cadere durante il movimento."
  },
  "monastic-tradition": {
    "name": "Tradizione Monastica",
    "description": "Quando arriva al 3° livello, il monaco si vota a una tradizione monastica, per esempio la Via della Mano Aperta. La tradizione scelta conferisce al monaco alcuni privilegi al 3° livello e poi di nuovo al 6°, 11° e 17° livello."
  },
  "deflect-missiles": {
    "name": "Deviare Proiettili",
    "description": "A partire dal 3° livello, un monaco può usare la sua reazione per deviare o afferrare un proiettile quando viene colpito da un attacco con arma a distanza. Quando lo fa, il danno che subisce dall'attacco è ridotto di 1d10 + il suo modificatore di Destrezza + il suo livello da monaco. Se il monaco riduce i danni a 0, può afferrare il proiettile, se quest'ultimo è abbastanza piccolo da essere tenuto in mano e se il monaco ha almeno una mano libera. Se afferra un proiettile in questo modo, può spendere 1 punto ki per effettuare un attacco a distanza con l'arma o con la munizione che ha appena afferrato, come parte della stessa reazione. Il monaco effettua questo attacco con competenza, a prescindere dalle sue competenze nelle armi, e il proiettile è considerato un'arma da monaco ai fini di questo attacco, con una gittata normale di 6 metri e una gittata lunga di 18 metri."
  },
  "monk-ability-score-improvement-1": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un monaco può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "slow-fall": {
    "name": "Caduta Lenta",
    "description": "A partire dal 4° livello, un monaco può usare la sua reazione quando cade per ridurre gli eventuali danni da caduta di un ammontare pari a cinque volte il suo livello da monaco."
  },
  "monk-extra-attack": {
    "name": "Attacco Extra",
    "description": "A partire dal 5° livello, un guerriero può attaccare due volte anziché una, ogni volta che effettua l'azione di Attacco nel proprio turno."
  },
  "stunning-strike": {
    "name": "Colpo Stordente",
    "description": "A partire dal 5° livello, un monaco può interferire con il ki che fluisce nel corpo di un avversario. Quando il monaco colpisce un'altra creatura con un attacco con arma da mischia, può spendere 1 punto ki per tentare di eseguire un Colpo Stordente. Il bersaglio deve superare un tiro salvezza su Costituzione, altrimenti sarà stordito fino alla fine del turno successivo del monaco."
  },
  "ki-empowered-strikes": {
    "name": "Colpi Ki Potenziati",
    "description": "A partire dal 6° livello, i colpi senz'armi del monaco sono considerati magici ai fini di oltrepassare la resistenza e l'immunità agli attacchi e ai danni non magici."
  },
  "monk-evasion": {
    "name": "Elusione",
    "description": "Al 7° livello, grazie alla sua agilità istintiva, il monaco può schivare certi effetti ad area come il soffio di fulmine di un drago blu o un incantesimo *palla di* *fuoco*. Quando il monaco è soggetto a un effetto che gli consente di effettuare un tiro salvezza su Destrezza per dimezzare i danni, non subisce alcun danno se supera il tiro salvezza, e soltanto la metà dei danni se lo fallisce."
  },
  "stillness-of-mind": {
    "name": "Mente Lucida",
    "description": "A partire dal 7° livello, un monaco può usare la sua azione per porre termine a un effetto su se stesso che lo rende affascinato o spaventato."
  },
  "monk-ability-score-improvement-2": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un monaco può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "unarmored-movement-2": {
    "name": "Movimento Senza Armatura",
    "description": "A partire dal 2° livello, la velocità di un monaco aumenta di 3 metri finché il monaco non indossa alcuna armatura e non impugna uno scudo. Questo bonus aumenta man mano che il personaggio acquisisce altri livelli da monaco, come indicato nella tabella \"Monaco\". Al 9° livello, un monaco ottiene la capacità di muoversi lungo le superfici verticali e sulle superfici liquide durante il suo turno senza cadere durante il movimento."
  },
  "purity-of-body": {
    "name": "Purezza del Corpo",
    "description": "Al 10° livello, il monaco ha una tale padronanza del ki da diventare immune alle malattie e al veleno."
  },
  "monk-ability-score-improvement-3": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un monaco può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "tongue-of-the-sun-and-moon": {
    "name": "Lingua del Sole e della Luna",
    "description": "A partire dal 13° livello, un monaco impara a sfiorare il ki delle altre menti ed è in grado di comprendere tutte le lingue parlate. Inoltre, qualsiasi creatura che sia in grado di capire una lingua può anche capire ciò che il monaco dice."
  },
  "diamond-soul": {
    "name": "Anima Adamantina",
    "description": "A partire dal 14° livello, il monaco ha una tale padronanza del ki da ottenere competenza in tutti i tiri salvezza. Inoltre, ogni volta che effettua un tiro salvezza e fallisce, può spendere 1 punto ki per ripetere il tiro. Deve usare il nuovo risultato."
  },
  "monk-timeless-body": {
    "name": "Corpo Senza Tempo",
    "description": "Al 15° livello, il monaco è pervaso dal ki a tal punto da non essere toccato dalla fragilità della vecchiaia. Inoltre, non può invecchiare magicamente. Tuttavia, può sempre morire di vecchiaia. Oltre a ciò, non ha più bisogno di bere o di mangiare."
  },
  "monk-ability-score-improvement-4": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un monaco può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "empty-body": {
    "name": "Corpo Vuoto",
    "description": "A partire dal 18° livello, il monaco può usare la sua azione per spendere 4 punti ki e diventare invisibile per 1 minuto. Durante quel periodo di tempo ottiene anche resistenza a tutti i danni tranne a quelli da forza. Inoltre, il monaco può spendere 8 punti ki in modo da lanciare l'incantesimo *proiezione astrale* senza avere bisogno di componenti materiali. Quando lo fa, non può portare nessun'altra creatura con sé."
  },
  "monk-ability-score-improvement-5": {
    "name": "Aumento dei Punteggi di Caratteristica",
    "description": "Quando arriva al 4° livello, e poi di nuovo all'8°, 12°, 16° e 19° livello, un monaco può aumentare di 2 un punteggio di caratteristica a sua scelta, oppure può aumentare di 1 due punteggi di caratteristica a sua scelta. Come di consueto, non è consentito aumentare un punteggio di caratteristica a più di 20 utilizzando questo privilegio."
  },
  "perfect-self": {
    "name": "Perfezione Interiore",
    "description": "Al 20° livello, quando un monaco tira per l'iniziativa e non gli rimane alcun punto ki, recupera 4 punti ki."
  },
  "frenzy": {
    "name": "Frenesia",
    "description": "A partire da quando sceglie questo cammino al 3° livello, il barbaro può entrare in frenesia quando è preda dell'ira. Se lo fa, per la durata della sua ira può effettuare un singolo attacco con arma da mischia come azione bonus in ognuno dei suoi turni successivi dopo questo. Quando l'ira termina, il barbaro subisce un livello di indebolimento (come descritto nell'appendice A del *Manuale* *del Giocatore*)."
  },
  "mindless-rage": {
    "name": "Ira Incontenibile",
    "description": "A partire dal 6° livello, il barbaro non può essere affascinato o spaventato mentre è in preda all'ira. Se è affascinato o spaventato quando scatena l'ira, quell'effetto è sospeso per tutta la durata dell'ira."
  },
  "intimidating-presence": {
    "name": "Presenza Intimidatoria",
    "description": "A partire dal 10° livello, il barbaro può usare la sua azione per spaventare qualcuno con la sua presenza minacciosa. Quando lo fa, sceglie una creatura che è in grado di vedere entro 9 metri. Se la creatura è in grado di vedere o sentire il barbaro, deve superare un tiro salvezza su Saggezza (CD pari a 8 + il bonus di competenza del barbaro + il modificatore di Carisma del barbaro), altrimenti sarà spaventata dal barbaro fino alla fine del turno successivo di quest'ultimo. Nei turni successivi, il barbaro puòusare la sua azione per estendere la durata di questo effetto sulla creatura spaventata fino alla fine del proprio turno successivo. Questo effetto si esaurisce se la creatura termina il suo turno fuori dalla linea di vista o oltre 18 metri di distanza dal barbaro. Se la creatura supera il suo tiro salvezza, il barbaro non può più utilizzare questo privilegio su quella creatura per 24 ore."
  },
  "retaliation": {
    "name": "Ritorsione",
    "description": "A partire dal 14° livello, quando il barbaro subisce danni da una creatura che si trova entro 1,5 metri da lui, può usare la sua reazione per effettuare un attacco con arma da mischia contro quella creatura."
  },
  "improved-critical": {
    "name": "Critico Migliorato",
    "description": "A partire da quando il guerriero sceglie questo archetipo al 3° livello, i suoi attacchi con un'arma mettono a segno un colpo critico con un risultato di 19 o 20 al tiro."
  },
  "remarkable-athlete": {
    "name": "Atleta Straordinario",
    "description": "A partire dal 7° livello, il guerriero può aggiungere metà del suo bonus di competenza (arrotondato per eccesso) a qualsiasi prova di Forza, Destrezza o Costituzione che effettua e che non utilizzi già il suo bonus di competenza. Inoltre, quando il guerriero effettua un salto in lungo con rincorsa, la distanza che copre aumenta di un numero di metri pari al suo modificatore di Forza."
  },
  "additional-fighting-style": {
    "name": "Stile di combattimento aggiuntivo",
    "description": "Al 10° livello, il guerriero può scegliere una seconda opzione dal privilegio di classe Stile di combattimento."
  },
  "superior-critical": {
    "name": "Critico Superiore",
    "description": "A partire dal 15° livello, gli attacchi con arma del guerriero mettono a segno un colpo critico con un risultato di 18–20 al tiro."
  },
  "survivor": {
    "name": "Sopravvissuto",
    "description": "Al 18° livello, il guerriero giunge all'apice della sua resilienza in battaglia. All'inizio di ogni suo turno, recupera un ammontare di punti ferita pari a 5 + il suo modificatore di Costituzione, se non gli rimane più della metà dei suoi punti ferita. Non ottiene questo beneficio se ha 0 punti ferita."
  },
  "dragon-ancestor": {
    "name": "Antenato draconico",
    "description": "Al 1° livello, lo stregone sceglie un tipo di drago come suo antenato. Il tipo di danno associato a ogni drago sarà utilizzato dai privilegi che lo stregone otterrà in seguito.\n\nAntenato draconico\n\nDrago\n\nTipo di Danni\n\nArgento\n\nFreddo\n\nBianco\n\nFreddo\n\nBlu\n\nFulmine\n\nBronzo\n\nFulmine\n\nNero\n\nAcido\n\nOro\n\nFuoco\n\nOttone\n\nFuoco\n\nRame\n\nAcido\n\nRosso\n\nFuoco\n\nVerde\n\nVeleno\n\nLo stregone è in grado di parlare, leggere e scrivere in Draconico. Inoltre, ogni volta che effettua una prova di Carisma per interagire con i draghi, il suo bonus di competenza raddoppia se è applicabile alla prova."
  },
  "draconic-resilience": {
    "name": "Resilienza draconica",
    "description": "La magia, scorrendo nel corpo dello stregone, fa emergere alcuni tratti fisici dei draghi suoi antenati. Al 1° livello, il massimo dei punti ferita dello stregone aumenta di 1 e aumenta di nuovo di 1 ogni volta che il personaggio acquisisce un livello in questa classe. Inoltre, alcune parti della sua pelle si ricoprono di un sottile strato di scaglie simili a quelle di un drago. Quando lo stregone non indossa armature, la sua CA è pari a 13 + il suo modificatore di Destrezza."
  },
  "elemental-affinity": {
    "name": "Affinità elementale",
    "description": "A partire dal 6° livello, quando lo stregone lancia un incantesimo che infligge danni del tipo associato al suo antenato draconico, può aggiungere il suo modificatore di Carisma a un tiro per i danni di quell'incantesimo. Allo stesso tempo, lo stregone può spendere 1 punto stregoneria per ottenere resistenza a quel tipo di danno per 1 ora."
  },
  "dragon-wings": {
    "name": "Ali di drago",
    "description": "Al 14° livello, lo stregone sviluppa la capacità di generare un paio di ali di drago sulla sua schiena, ottenendo una velocità di volare pari alla sua velocità attuale. Lo stregone può generare queste ali come azione bonus nel suo turno. Le ali durano finché lo stregone non le congeda con un'azione bonus durante il proprio turno. Lo stregone non può manifestare le sue ali mentre indossa un'armatura, a meno che l'armatura non sia concepita per accoglierle; i vestiti che non sono stati concepiti per tale scopo potrebbero venire distrutti quando lo stregone le manifesta."
  },
  "draconic-presence": {
    "name": "Presenza draconica",
    "description": "A partire dal 18° livello, lo stregone può incanalare la presenza terrificante del suo antenato draconico, rendendo le creature intorno a lui affascinate o spaventate. Con un'azione, lo stregone può spendere 5 punti stregoneria per attingere a questo potere ed emanare un'aura di soggezione o di paura (a sua scelta) entro una distanza di 18 metri. Per 1 minuto o finché non perde la sua concentrazione (come se stesse lanciando un incantesimo che richiede concentrazione), ogni creatura ostile che inizia il suo turno entro questa aura deve superare un tiro salvezza su Saggezza o sarà affascinata (se lo stregone ha scelto soggezione) o spaventata (se ha scelto paura) finché l'aura non termina. Una creatura che supera questo tiro salvezza è immune all'aura dello stregone per 24 ore."
  },
  "evocation-savant": {
    "name": "Invocatore Sapiente",
    "description": "A partire da quando il mago sceglie questa scuola al 2° livello, il tempo e il denaro che egli deve spendere per copiare un incantesimo di invocazione nel suo libro degli incantesimi sono dimezzati."
  },
  "sculpt-spells": {
    "name": "Plasmare Incantesimi",
    "description": "A partire dal 2° livello, il mago è in grado di creare delle sacche di relativa sicurezza all'interno degli effetti dei suoi incantesimi di invocazione. Quando il mago lancia un incantesimo di invocazione che influenza le altre creature che è in grado di vedere, può scegliere un numero di quelle creature pari a 1 + il livello dell'incantesimo. Le creature scelte superano automaticamente i loro tiri salvezza contro l'incantesimo e non subiscono alcun danno se normalmente subirebbero la metà dei danni in caso di tiro salvezza superato."
  },
  "potent-cantrip": {
    "name": "Trucchetto Potente",
    "description": "A partire dal 6° livello, i trucchetti del mago che infliggono danni possono influenzare perfino le creature che altrimenti eviterebbero il grosso dell'effetto. Quando una creatura supera un tiro salvezza contro un trucchetto del mago, quella creatura subisce la metà dei danni del trucchetto (se previsti), ma non subisce alcun effetto aggiuntivo da quel trucchetto."
  },
  "empowered-evocation": {
    "name": "Invocazione potente",
    "description": "A partire dal 10° livello, il mago può aggiungere il suo modificatore di Intelligenza a un tiro per i danni di un qualsiasi incantesimo di invocazione da mago da lui lanciato."
  },
  "overchannel": {
    "name": "Saturazione Magica",
    "description": "A partire dal 14° livello, il mago può intensificare il potere dei suoi incantesimi più semplici. Quando lancia un incantesimo da mago compreso tra il 1° e il 5° livello che infligge danni, può infliggere il massimo dei danni con quell'incantesimo. La prima volta che il mago lo fa, non subisce alcun effetto avverso. Se però utilizza questo privilegio di nuovo prima di avere completato un riposo lungo, subisce 2d12 danni necrotici per ogni livello dell'incantesimo in questione, subito dopo averlo lanciato. Ogni volta che utilizza di nuovo questo privilegio prima di avere completato un riposo lungo, i danni necrotici per livello dell'incantesimo aumentano di 1d12. Questi danni ignorano le varie forme di resistenza e immunità.\n\nIl libro degli incantesimi del mago\n\nGli incantesimi che il mago aggiunge al suo libro man mano\n\nche acquisisce livelli derivano dalle ricerche arcane che\n\nconduce personalmente, nonché dalle scoperte intellettuali\n\nche riesce a fare sulla natura del multiverso. Potrebbe\n\ntrovare altri incantesimi nel corso delle sue avventure,\n\nmagari scoprendone uno trascritto su una pergamena\n\nnascosta nel forziere di un mago malvagio o in un tomo\n\npolveroso custodito in un'antica biblioteca.\n\nAspetto del libro. Il libro degli incantesimi di un mago\n\nè una combinazione unica di incantesimi, dotato di rifiniture\n\ndecorative personali. Potrebbe trattarsi di un semplice\n\ne pratico volume in cuoio che il mago ha ricevuto in dono\n\ndal suo maestro, di un tomo finemente rilegato rinvenuto\n\nin un'antica biblioteca, o perfino di un cumulo disordinato\n\ndi appunti messi assieme in tutta fretta dopo che il libro\n\nprecedente è andato perduto.Copiare un incantesimo nel libro. Quando il mago entra\n\nin possesso di un incantesimo da mago di livello pari\n\no superiore al 1°, può aggiungerlo al suo libro se si tratta\n\ndi un incantesimo di un livello che egli può preparare e se\n\ndispone del tempo per decifrarlo e copiarlo.\n\nPer copiare un incantesimo nel libro è necessario\n\nriprodurre il formato basilare dell'incantesimo per poi\n\ndecifrare il sistema di trascrizione speciale usato dal mago\n\nche lo ha scritto. Il personaggio deve fare pratica con\n\nl'incantesimo finché non comprende i suoni o i gesti richiesti\n\ne poi trascriverlo nel proprio libro degli incantesimi usando\n\nil suo metodo personale di trascrizione.\n\nPer ogni livello dell'incantesimo, il processo di trascrizione\n\nrichiede 2 ore e costa 50 mo. Il costo rappresenta le\n\ncomponenti materiali consumate dal mago nel corso dei suoi\n\nesperimenti per padroneggiare l'incantesimo, nonché gli\n\ninchiostri pregiati necessari per trascriverlo. Una volta speso\n\nl'ammontare di tempo e il denaro necessario, il mago può\n\npreparare l'incantesimo proprio come tutti gli altri suoi\n\nincantesimi.\n\nSostituire il libro. Un mago può copiare un incantesimo\n\ndal suo libro degli incantesimi a un altro (per esempio,\n\nse desidera farne una copia di riserva). Procede come se\n\ncopiasse un nuovo incantesimo nel proprio libro degli\n\nincantesimi, ma in modo più rapido e facile, dal momento\n\nche conosce il proprio metodo di trascrizione e sa già come si\n\nlancia l'incantesimo. Dovrà spendere solo 1 ora e 10 mo per\n\nogni livello dell'incantesimo copiato.\n\nSe il mago perde il suo libro degli incantesimi, può usare\n\nla stessa procedura per trascrivere gli incantesimi che ha\n\npreparato in un nuovo libro degli incantesimi. Per completare\n\nil resto del suo libro degli incantesimi dovrà trovarne di nuovi\n\ncome di consueto. È per questo motivo che molti maghi\n\ncustodiscono delle copie di riserva dei loro libri degli\n\nincantesimi in luoghi sicuri."
  },
  "dark-ones-blessing": {
    "name": "Benedizione dell'Oscuro",
    "description": "A partire dal 1° livello, quando il warlock porta una creatura ostile a 0 punti ferita, ottiene un ammontare di punti ferita temporanei pari al proprio modificatore di Carisma + il proprio livello da warlock (minimo 1)."
  },
  "dark-ones-own-luck": {
    "name": "Fortuna dell'Oscuro",
    "description": "A partire dal 6° livello, il warlock può appellarsi al suo patrono per alterare il fato in suo favore. Quando effettua una prova di caratteristica o un tiro salvezza, può utilizzare questo privilegio per aggiungere un d10 al suo tiro. Può farlo dopo avere visto il tiro iniziale, ma prima che qualsiasi effetto del tiro sia applicato. Una volta utilizzato questo privilegio, il warlock non può più utilizzarlo finché non completa un riposo breve o lungo."
  },
  "fiendish-resilience": {
    "name": "Resilienza Immonda",
    "description": "A partire dal 10° livello, il warlock può scegliere un tipo di danno quando completa un riposo breve o lungo. Ottiene resistenza a quel tipo di danno finché non ne sceglie uno diverso tramite questo privilegio. I danni delle armi magiche o delle armi argentate ignorano questa resistenza."
  },
  "hurl-through-hell": {
    "name": "Scagliare all'inferno",
    "description": "A partire dal 14° livello, quando il warlock colpisce una creatura con un attacco, può utilizzare questo privilegio per trascinare istantaneamente il bersaglio sui piani inferiori. La creatura scompare e sfreccia attraverso un territorio da incubo. Alla fine del turno successivo del warlock, il bersaglio torna nello spazio che occupava in precedenza, o nello spazio libero più vicino. Se il bersaglio non è un immondo, subisce 10d10 danni psichici in quanto resta sconvolto da questa esperienza terrificante. Una volta utilizzato questo privilegio, il warlock non può più utilizzarlo finché non completa un riposo lungo.\n\nI Doni del Patto\n\nOgni opzione di Dono del Patto genera una creatura o un\n\noggetto speciale, che riflette la natura del patrono del\n\nwarlock.\n\nPatto della Catena. Il famiglio del warlock è più\n\nintelligente dei famigli normali. La sua forma standard può\n\nriflettere l'essenza del suo patrono: gli imp e i quasit sono\n\ncollegati all'Immondo.\n\nPatto della Lama. Se il warlock serve l'Immondo, la sua\n\narma potrebbe essere un'ascia fatta di metallo nero\n\ne decorata con simboli fiammeggianti.\n\nPatto del Tomo. Il Libro delle Ombre del warlock potrebbe\n\nessere un poderoso tomo rilegato in pelle demoniaca\n\ne borchie metalliche, pieno di incantesimi di evocazione\n\ne informazioni proibite sulle più sinistre regioni del cosmo,\n\nin quanto dono dell'Immondo."
  },
  "hunters-prey": {
    "name": "Preda del Cacciatore",
    "description": "Al 3° livello, il ranger ottiene uno dei seguenti privilegi a sua scelta. _**Devastatore dell'orda.**_ Una volta per ogni suo turno, quando sferra un attacco con arma, il ranger può effettuare un altro attacco con la stessa arma contro una creatura diversa situata entro 1,5 metri dal bersaglio originale ed entro la gittata della sua arma. _**Sterminatore di colossi.**_ La tenacia del ranger può logorare anche il più potente degli avversari. Quando il ranger colpisce una creatura con un attacco con arma, quella creatura subisce 1d8 danni extra se è al di sotto dei suoi punti ferita massimi. Può infliggere questi danni extra solo una volta per turno. _**Uccisore di giganti.**_ Quando una creatura di taglia Grande o superiore entro 1,5 metri dal ranger colpisce o manca il ranger con un attacco, quest'ultimo può usare la sua reazione per attaccare la creatura immediatamente dopo il suo attacco, purché sia in grado di vederla."
  },
  "defensive-tactics": {
    "name": "Tattiche difensive",
    "description": "Al 3° livello, il ranger ottiene uno dei seguenti privilegi a sua scelta. _**Difesa dal multiattacco.**_ Quando una creatura colpisce il ranger con un attacco, il ranger ottiene un bonus di +4 alla CA contro tutti gli attacchi successivi effettuati da quella creatura per il resto del turno. _**Volontà d'acciaio.**_ Il ranger dispone di vantaggio ai tiri salvezza contro l'essere spaventato. _**Sfuggire all'orda.**_ Gli attacchi di opportunità contro il ranger subiscono svantaggio."
  },
  "multiattack": {
    "name": "Multiattacco",
    "description": "All'11° livello, il ranger ottiene uno dei seguenti privilegi a sua scelta. _**Attacco turbinante.**_ Il ranger può usare la sua azione per sferrare un attacco in mischia contro un qualsiasi numero di creature entro 1,5 metri da sé, effettuando un tiro per colpire separato per ogni bersaglio. _**Raffica.**_ Il ranger può usare la sua azione per effettuare un attacco a distanza contro un qualsiasi numero di creature entro 3 metri da un punto che egli sia in grado di vedere e che si trovi entro la gittata della sua arma. Il ranger deve avere munizioni sufficienti per ogni bersaglio, come di consueto, ed effettua un tiro per colpire separato per ogni bersaglio."
  },
  "superior-hunters-defense": {
    "name": "Difesa del cacciatore superiore",
    "description": "Al 15° livello, il ranger ottiene uno dei seguenti privilegi a sua scelta. _**Elusione.**_Quando il ranger è soggetto a un effetto che gli consente di effettuare un tiro salvezza su Destrezza per dimezzare i danni, come il soffio di fuoco di un drago rosso o un incantesimo *fulmine*, non subisce alcun danno se supera il tiro salvezza, e soltanto la metà dei danni se lo fallisce. _**Opporsi alla marea.**_Quando una creatura ostile manca il ranger con un attacco in mischia, il ranger può usare la sua reazione per obbligare quella creatura a ripetere lo stesso attacco contro un'altra creatura (che non sia essa stessa) a scelta del ranger. _**Schivata prodigiosa.**_Quando un attaccante che il ranger è in grado di vedere colpisce il ranger con un attacco, quest'ultimo può usare la sua reazione per dimezzare i danni che subirebbe dall'attacco."
  },
  "bonus-cantrip": {
    "name": "Trucchetto bonus",
    "description": "Quando il druido sceglie questo circolo al 2° livello, apprende un trucchetto da druido aggiuntivo a sua scelta."
  },
  "natural-recovery": {
    "name": "Recupero naturale",
    "description": "A partire dal 2° livello, il druido recupera parte della sua energia magica mettendosi seduto a meditare per entrare in comunione con la natura. Durante un riposo breve, il druido sceglie quali slot incantesimo spesi desidera recuperare. Questi slot incantesimo possono avere un livello totale pari o inferiore alla metà del livello da druido (arrotondato per eccesso) e nessuno slot può essere di livello pari o superiore al 6°. Il druido non può più utilizzare questo privilegio finché non completa un riposo lungo. Per esempio, un druido di 4° livello può recuperare slot incantesimo per un valore totale di due livelli. Potrà quindi recuperare uno slot di 2° livello o due slot di 1° livello."
  },
  "druid-lands-stride": {
    "name": "Andatura sul Territorio",
    "description": "A partire dal 6° livello, muoversi attraverso il terreno difficile non magico non richiede più un costo in movimento extra al druido. Inoltre, può passare attraverso i vegetali non magici senza esserne rallentato e senza subire danni se tali vegetali presentano spine, aculei o altri pericoli simili. Infine, il druido dispone di vantaggio ai tiri salvezza contro i vegetali creati magicamente o manipolati per ostacolare il movimento, come quelli creati dall'incantesimo *intralciare*."
  },
  "natures-ward": {
    "name": "Interdizione della Natura",
    "description": "Quando il druido arriva al 10° livello, non può essere affascinato o spaventato dagli elementali o dai folletti ed è immune ai veleni e alle malattie."
  },
  "natures-sanctuary": {
    "name": "Rifugio della Natura",
    "description": "Quando il druido arriva al 14° livello, le creature del mondo naturale percepiscono il suo legame con la natura ed esitano ad attaccarlo. Quando una bestia o una creatura vegetale lo attacca, quella creatura deve effettuare un tiro salvezza su Saggezza contro la CD del tiro salvezza sull'incantesimo del druido. Se lo fallisce, deve scegliere un bersaglio diverso, altrimenti l'attacco manca automaticamente. Se invece lo supera, la creatura è immune a questo effetto per 24 ore. La creatura è consapevole di questo effetto prima di effettuare il suo attacco contro il druido.\n\nAlberi e piante sacre\n\nUn druido considera alcune piante particolarmente sacre:\n\nbetulla, frassino, ginepro, nocciolo, ontano, quercia, salice,\n\nsambuco, sorbo, tasso e vischio. I druidi spesso usano queste\n\npiante come parte di un focus da incantatore, incorporando\n\nframmenti di quercia o di tasso, o rametti di vischio.\n\nAllo stesso modo, un druido usa il legno di queste piante\n\nper fabbricare altri oggetti come armi e scudi. Il tasso\n\nè associato alla morte e alla rinascita, quindi in genere viene\n\nusato per costruire le impugnature di scimitarre e falcetti.\n\nIl frassino è associato alla vita e la quercia alla forza. Con il\n\nlegno di queste piante si fabbricano ottime impugnature\n\no addirittura armi intere, come randelli e bastoni ferrati,\n\ne perfino degli scudi. L'ontano è associato all'aria e può\n\nessere usato per armi come dardi e giavellotti.\n\nI druidi delle regioni in cui le piante elencate finora non\n\nesistono scelgono in genere altre piante da utilizzare in modo\n\nanalogo. Per esempio, un druido di una regione desertica\n\npotrebbe considerare sacri l'albero della gomma e il cactus.\n\nI druidi e gli dèi\n\nAnche se esistono alcuni druidi che venerano le forze della\n\nnatura in generale, la maggior parte è fedele a una delle\n\ntante divinità della natura venerate nel multiverso (le liste\n\ndegli dèi nell'appendice B del Manuale del Giocatore\n\nincludono molte di queste divinità). L'adorazione di queste\n\ndivinità è spesso considerata un culto di una tradizione più\n\nantica rispetto alle fedi dei chierici e dei popoli urbanizzati."
  },
  "bonus-proficiency": {
    "name": "Competenza Bonus",
    "description": "Quando il chierico sceglie questo dominio al 1° livello, ottiene competenza nelle armature pesanti."
  },
  "disciple-of-life": {
    "name": "Discepolo della Vita",
    "description": "A partire dal 1° livello, gli incantesimi di guarigione del chierico diventano più efficaci. Ogni volta che il chierico usa un incantesimo di 1° livello o di livello superiore per ripristinare i punti ferita di una creatura, quella creatura recupera un ammontare di punti ferita aggiuntivi pari a 2 + il livello dell'incantesimo."
  },
  "channel-divinity-preserve-life": {
    "name": "Incanalare Divinità: Preservare Vita",
    "description": "A partire dal 2° livello, il chierico può utilizzare Incanalare Divinità per curare chi è stato gravemente ferito. Con un'azione, il chierico brandisce il suo simbolo sacro ed evoca un flusso di energia curativa che può ripristinare un numero di punti ferita pari a cinque volte il suo livello da chierico. Sceglie le creature desiderate purché siano situate entro 9 metri da lui e suddivide questo ammontare di punti ferita tra di esse. Questo privilegio può ripristinare in una creatura un ammontare di punti ferita che la riporti a non più della metà del suo massimo dei punti ferita.Il chierico non può utilizzare questo privilegio su un costrutto o su un non morto."
  },
  "blessed-healer": {
    "name": "Guaritore Benedetto",
    "description": "A partire dal 6° livello, gli incantesimi curativi che il chierico lancia sugli altri guariscono anche lui. Quando il chierico lancia un incantesimo di 1° livello o di livello superiore che ripristina punti ferita in una creatura diversa da lui, recupera un ammontare di punti ferita pari a 2 + il livello dell'incantesimo."
  },
  "divine-strike": {
    "name": "Colpo Divino",
    "description": "All'8° livello il chierico ottiene la capacità di infondere energia divina ai colpi della sua arma. Una volta per ogni suo turno, quando colpisce una creatura con un attacco con arma, il chierico può fare in modo che l'attacco infligga 1d8 danni radiosi extra al bersaglio. Una volta raggiunto il 14° livello, il danno aggiuntivo aumenta a 2d8."
  },
  "supreme-healing": {
    "name": "Guarigione Suprema",
    "description": "A partire dal 17° livello, quando il chierico normalmente dovrebbe tirare uno o più dadi per ripristinare i punti ferita con un incantesimo, usa invece il numero più alto possibile per ogni dado. Ad esempio, invece di ripristinare 2d6 punti ferita a una creatura, un chierico ne ripristina 12."
  },
  "bonus-proficiencies": {
    "name": "Competenze bonus",
    "description": "Quando un bardo si unisce al Collegio della Sapienza al 3° livello, ottiene competenza in tre abilità a sua scelta."
  },
  "cutting-words": {
    "name": "Parole Taglienti",
    "description": "Sempre al 3° livello, il bardo impara anche a fare buon uso del suo ingegno per distrarre, confondere e fiaccare la determinazione e la competenza altrui. Quando una creatura situata entro 18 metri e che il bardo è in grado di vedere effettua un tiro per colpire, una prova di caratteristica o un tiro per i danni, il bardo può usare la sua reazione per spendere uno dei suoi utilizzi di Ispirazione Bardica, tirare un dado di Ispirazione Bardica e sottrarre il numero ottenuto dal tiro della creatura. Può scegliere di utilizzare questo privilegio dopo che la creatura ha effettuato il suo tiro, ma prima che il GM dichiari se il tiro per colpire o la prova di caratteristica abbia avuto successo o meno, o prima che la creatura infligga i danni. La creatura è immune se non è in grado di sentire il bardo o se non può essere affascinata."
  },
  "additional-magical-secrets": {
    "name": "Segreti Magici Aggiuntivi",
    "description": "Al 6° livello, un bardo impara due incantesimi a sua scelta da qualsiasi classe. Ogni incantesimo scelto deve essere di un livello che il bardo sia in grado di lanciare, come indicato dalla tabella \"Bardo\", oppure deve essere un trucchetto. Gli incantesimi scelti contano come incantesimi da bardo, ma non contano al fine di determinare il numero di incantesimi da bardo conosciuti."
  },
  "peerless-skill": {
    "name": "Abilità Impareggiabile",
    "description": "A partire dal 14° livello, quando un bardo effettua una prova di caratteristica, può spendere un utilizzo di Ispirazione Bardica. Se lo fa, tira un dado di Ispirazione Bardica e aggiunge il risultato ottenuto alla sua prova di caratteristica. Può scegliere di farlo dopo avere tirato il dado per la prova di caratteristica, ma prima che il GM dichiari se la prova abbia avuto successo o meno."
  },
  "open-hand-technique": {
    "name": "Tecnica della Mano Aperta",
    "description": "A partire da quando sceglie questa tradizione al 3° livello, il monaco può manipolare il ki del suo nemico quando imbriglia il proprio. Ogni volta che il monaco colpisce una creatura con un attacco concessogli dalla sua Raffica di Colpi, può imporre a quel bersaglio uno degli effetti seguenti: •Deve superare un tiro salvezza su Destrezza, altrimenti viene buttato a terra prono. •Deve superare un tiro salvezza su Forza. Se lo fallisce, il monaco può spingerlo di 4,5 metri allontanandolo da sé. •Non può effettuare reazioni fino alla fine del turno successivo del monaco."
  },
  "wholeness-of-body": {
    "name": "Integrità del Corpo",
    "description": "Al 6° livello, il monaco ottiene la capacità di curarsi. Con un'azione, recupera un ammontare di punti ferita pari a tre volte il suo livello da monaco. Deve completare un riposo lungo prima di poter utilizzare di nuovo questo privilegio."
  },
  "tranquility": {
    "name": "Tranquillità",
    "description": "A partire dall'11° livello, il monaco può entrare in una speciale forma di meditazione, circondandosi di un'aura di pace. Alla fine di un riposo lungo ottiene l'effetto di un incantesimo *santuario* che dura fino all'inizio del suo riposo lungo successivo (l'incantesimo può terminare anticipatamente come di consueto). La CD del tiro salvezza dell'incantesimo è pari a 8 + il modificatore di Saggezza del monaco + il bonus di competenza del monaco."
  },
  "quivering-palm": {
    "name": "Palmo Tremante",
    "description": "Al 17° livello, il monaco ottiene la capacità di scatenare vibrazioni letali nel corpo di un altro. Quando il monaco colpisce una creatura con un colpo senz'armi, può spendere 3 punti ki per dare il via a queste vibrazioni impercettibili, che durano un numero di giorni pari al suo livello da monaco. Le vibrazioni sono innocue, a meno che il monaco non usi la sua azione per interromperle. Per farlo, il monaco e il bersaglio devono trovarsi sullo stesso piano di esistenza. Quando il monaco usa questa azione, la creatura deve effettuare un tiro salvezza su Costituzione. Se lo fallisce, scende a 0 punti ferita, mentre se lo supera subisce 10d10 danni necrotici. Il monaco può tenere soltanto una creatura alla volta sotto l'effetto di questo privilegio. Può scegliere di porre fine alle vibrazioni in modo innocuo senza usare un'azione."
  },
  "fast-hands": {
    "name": "Mani Veloci",
    "description": "A partire dal 3° livello, un ladro può usare l'azione bonus conferitagli da Azione Scaltra per effettuare una prova di Destrezza (Rapidità di Mano), usare i propri arnesi da scasso per disattivare una trappola o scassinare una serratura, o effettuare un'azione di Usare un Oggetto."
  },
  "second-story-work": {
    "name": "Lavoro al Secondo Piano",
    "description": "Quando un ladro sceglie questo archetipo al 3° livello, diventa in grado di scalare più velocemente rispetto al normale; scalare non richiede più un movimento extra. Inoltre, quando il ladro effettua un salto in lungo con rincorsa, la distanza che copre aumenta di 30 cm per ogni punto del suo modificatore di Destrezza."
  },
  "supreme-sneak": {
    "name": "Furtività Suprema",
    "description": "A partire dal 9° livello, un ladro dispone di vantaggio a una prova di Destrezza (Furtività) se si muove di non più della metà della sua velocità in quello stesso turno."
  },
  "use-magic-device": {
    "name": "Usare Oggetto Magico",
    "description": "Giunto al 13° livello, un ladro ha imparato come funziona la magia quanto basta per improvvisare un utilizzo di quegli oggetti che non sono destinati a lui. Il ladro ignora tutti i requisiti di classe, razza e livello quando usa gli oggetti magici."
  },
  "thiefs-reflexes": {
    "name": "Riflessi da Furfante",
    "description": "Una volta giunto al 17° livello, un ladro diventa particolarmente abile nel tendere imboscate e nello sfuggire rapidamente ai pericoli. Il ladro può effettuare due turni durante il primo round di ogni combattimento. Effettua il suo primo turno alla sua normale iniziativa e il secondo turno alla sua iniziativa meno 10. Non può utilizzare questo privilegio se è sorpreso."
  },
  "darkvision": {
    "name": "Scurovisione",
    "description": "Un elfo, abituato a muoversi nella penombra del sottobosco e alla luce della luna, beneficia di una vista superiore nell'oscurità e nelle condizioni di luce fioca. In condizioni di luce fioca, può vedere fino a una distanza di 18 metri come se si trovasse in condizioni di luce intensa e nell'oscurità come se si trovasse in presenza di luce fioca. Nell'oscurità non è in grado di discernere i colori, ma solo le tonalità di grigio."
  },
  "keen-senses": {
    "name": "Sensi acuti",
    "description": "Un elfo ha competenza nell'abilità Percezione."
  },
  "fey-ancestry": {
    "name": "Retaggio fatato",
    "description": "Un elfo dispone di vantaggio ai tiri salvezza per non essere affascinato e non può essere addormentato tramite la magia."
  },
  "trance": {
    "name": "Trance",
    "description": "Gli elfi non hanno bisogno di dormire. Anziché dormire entrano per 4 ore al giorno in una profonda meditazione e in uno stato semicosciente. (Il termine in Comune per tale meditazione è \"trance\".) Durante questa meditazione, l'elfo entra in una sorta di stato sognante, che in realtà non è altro che una serie di esercizi mentali che anni di pratica hanno reso automatici. Dopo tale periodo, l'elfo ottiene gli stessi benefici di 8 ore di sonno per un umano."
  },
  "lucky": {
    "name": "Fortunato",
    "description": "Quando ottiene 1 con un d20 a un tiro per colpire, a una prova di caratteristica o a un tiro salvezza, un halfling può ripetere il tiro del dado e deve usare il nuovo risultato."
  },
  "brave": {
    "name": "Coraggioso",
    "description": "Un halfling dispone di vantaggio ai tiri salvezza per non essere spaventato."
  },
  "halfling-nimbleness": {
    "name": "Agilità halfling",
    "description": "Un halfling può muoversi attraverso gli spazi di qualsiasi creatura di taglia più grande."
  },
  "dwarven-resilience": {
    "name": "Resilienza nanica",
    "description": "Un nano dispone di vantaggio ai tiri salvezza contro il veleno e di resistenza ai danni da veleno."
  },
  "dwarven-combat-training": {
    "name": "Addestramento da combattimento nanico",
    "description": "Ha competenza nelle asce, nelle asce da battaglia, nei martelli da guerra e nei martelli leggeri."
  },
  "tool-proficiency": {
    "name": "Competenza negli strumenti",
    "description": "Un nano ha competenza in un gruppo di strumenti da artigiano a sua scelta: strumenti da fabbro, scorte da birraio o strumenti da costruttore."
  },
  "stonecunning": {
    "name": "Esperto minatore",
    "description": "Ogni volta che un nano effettua una prova di Intelligenza (Storia) relativa all'origine di una struttura in pietra, è considerato avere competenza nell'abilità Storia e aggiunge il doppiodel suo bonus di competenza alla prova anziché il suo normale bonus di competenza."
  },
  "gnome-cunning": {
    "name": "Astuzia gnomesca",
    "description": "Uno gnomo dispone di vantaggio a tutti i tiri salvezza su Intelligenza, Saggezza e Carisma contro la magia."
  },
  "skill-versatility": {
    "name": "Versatilità nelle abilità",
    "description": "Un mezzelfo ha competenza in due abilità a sua scelta."
  },
  "menacing": {
    "name": "Minaccioso",
    "description": "Un mezzorco ha competenza nell'abilità Intimidire."
  },
  "relentless-endurance": {
    "name": "Resistenza implacabile",
    "description": "Quando un mezzorco scende a 0 punti ferita ma non viene ucciso sul colpo, può decidere di rimanere a 1 punto ferita. Non può più utilizzare questa capacità finché non completa un riposo lungo."
  },
  "savage-attacks": {
    "name": "Attacchi selvaggi",
    "description": "Quando un mezzorco mette a segno un colpo critico con un attacco con arma damischia, può tirare un dado dell'arma aggiuntivo quando determina i danni extra del colpo critico."
  },
  "hellish-resistance": {
    "name": "Resistenza infernale",
    "description": "Un tiefling dispone di resistenza ai danni da fuoco."
  },
  "infernal-legacy": {
    "name": "Eredità infernale",
    "description": "Un tiefling conosce il trucchetto *taumaturgia*. Quando raggiunge il 3° livello, può lanciare l'incantesimo *intimorire infernale* come incantesimo di 2° livello una volta con questo tratto e recuperare la capacità di farlo quando completa un riposo lungo. Quando raggiunge il 5° livello può lanciare l'incantesimo *oscurità* una volta con questo tratto e recuperare la capacità di farlo quando completa un riposo lungo. La caratteristica da incantatore per questi incantesimi è Carisma."
  }
};
