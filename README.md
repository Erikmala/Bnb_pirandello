# Pirandello Rooms - Sito vetrina

Sito vetrina statico per il B&B Pirandello Rooms.

## Contenuto incluso

- Home con hero section professionale
- Sezione "Chi siamo" con punti di forza della struttura
- Sezione camere con 3 card per tipologia
- Immagini locali dedicate per camera doppia, matrimoniale e tripla
- Descrizione, disponibilità e caratteristiche principali per ogni tipologia
- Selettore lingua italiano/inglese nella navbar
- Sezione contatti
- Layout responsive per desktop, tablet e mobile

## File principali

- index.html
- styles.css
- script.js
- assets/camere/doppia/
- assets/camere/matrimoniale/
- assets/camere/tripla/

## Come aprire il sito

Apri `index.html` nel browser oppure usa il server locale su `http://127.0.0.1:5500/`.

## Personalizzazione futura

Quando saranno disponibili i dati ufficiali, potremo aggiornare:

- testi e tono di voce
- prezzi definitivi
- caratteristiche definitive delle tipologie di camera
- immagini ufficiali ad alta risoluzione
- contatti e link di prenotazione

## Gestione immagini locali delle camere

Le immagini vengono caricate direttamente dalle cartelle locali dedicate alla tipologia:

- `assets/camere/doppia/`
- `assets/camere/matrimoniale/`
- `assets/camere/tripla/`

Il sito usa i nomi file presenti in `script.js`. Se cambi o aggiungi foto, aggiorna anche
l'elenco `files` della tipologia corrispondente.
