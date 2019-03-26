# Codici Catastali

Un semplice script che esporta i codici catastali dalla libreria [CodiceFiscaleJS](https://github.com/lucavandro/CodiceFiscaleJS) e li salva in CSV, per poterli importare altrove.

La libreria CodiceFiscaleJs include sia codici catastali dei paesi italiani che delle nazioni estere, dati altrimenti non disponibili in dataset singoli online

## Build new CSV file
```npm update ##Update CodiceFiscaleJS or new codes won't be exported
npm run build
```
per rigenerare il file CSV

*nix only