# Codici Catastali
a.k.a. Codici Belfiore

Un semplice script che esporta i codici catastali dalla libreria [CodiceFiscaleJS](https://github.com/lucavandro/CodiceFiscaleJS) e li salva in CSV, per poterli importare altrove.

La libreria CodiceFiscaleJs include sia codici catastali dei paesi italiani che delle nazioni estere, dati altrimenti non disponibili in dataset singoli online
## Raw file link
[CSV](https://raw.githubusercontent.com/giorgioma/codici-catastali/master/codici-catastali.csv)
## Build new CSV file
```
npm update ##Update CodiceFiscaleJS or new codes won't be exported
npm run build
```
per rigenerare il file CSV

*nix only
