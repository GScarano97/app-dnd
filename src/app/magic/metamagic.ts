/** Sintesi italiana non ufficiale delle opzioni SRD 5.1 (2014), CC BY 4.0. */
export const METAMAGIC = [
 {index:'metamagic-careful-spell', name:'Incantesimo Accurato', cost:'1 punto', description:'Quando un incantesimo richiede un tiro salvezza, scegli fino al tuo modificatore di Carisma di creature coinvolte (minimo una): superano automaticamente quel tiro salvezza.'},
 {index:'metamagic-distant-spell', name:'Incantesimo Distante', cost:'1 punto', description:'Raddoppia la gittata di un incantesimo con gittata di almeno 1,5 metri; se la gittata è a contatto, diventa 9 metri.'},
 {index:'metamagic-empowered-spell', name:'Incantesimo Potenziato', cost:'1 punto', description:'Quando tiri i danni, puoi ritirare fino al tuo modificatore di Carisma di dadi (minimo uno) e devi usare i nuovi risultati. Puoi usarlo anche insieme a un’altra metamagia sullo stesso incantesimo.'},
 {index:'metamagic-extended-spell', name:'Incantesimo Esteso', cost:'1 punto', description:'Raddoppia la durata di un incantesimo che dura almeno un minuto, fino a un massimo di 24 ore.'},
 {index:'metamagic-heightened-spell', name:'Incantesimo Intensificato', cost:'3 punti', description:'Quando un incantesimo richiede un tiro salvezza per resistere ai suoi effetti, un bersaglio ha svantaggio al primo tiro salvezza contro quell’incantesimo.'},
 {index:'metamagic-quickened-spell', name:'Incantesimo Rapido', cost:'2 punti', description:'Per questo lancio, cambia il tempo di lancio di un incantesimo da un’azione a un’azione bonus.'},
 {index:'metamagic-subtle-spell', name:'Incantesimo Celato', cost:'1 punto', description:'Lancia l’incantesimo senza componenti somatiche o verbali.'},
 {index:'metamagic-twinned-spell', name:'Incantesimo Gemellato', cost:'Livello dell’incantesimo; 1 per un trucchetto', description:'Un incantesimo con gittata diversa da sé che può bersagliare una sola creatura al livello a cui è lanciato può bersagliare una seconda creatura entro gittata.'}
] as const;
