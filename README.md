# cra-noise-proxy

Proxy služba pro rozdělění volání mezi "resource" serever a data server.

## Konfigurace
Konfigurace je uložena v `config.yaml`.
Nastavuje se zde:  

`dataUrl` url pro přístup k datov0mu serveru.  
`resourceUrl` url pro přístup resource serveru.
`prefixToDataUrl` url prefix, který určuje jaký request půjde na `dataUrl`.

## Předpoklady pro spuštění
Pro spuštění i vývoj aplikace je potřeba mít nainstalovaný [Node.js]

## Spuštění
Pokud chcete službu spustit, stáhněte a rozbalte [poslední verzi]. A spusťte souborem `start.bat`, nebo příkazen `npm run prod_start`. 

## Vývoj
Instalace balíčků: `npm install`  
Run: `npm start`

## Licence
GPLv3

[poslední verzi]: <https://github.com/oksystem-as/cra-noise-proxy/releases/latest>
[Node.js]: <https://nodejs.org/en/>