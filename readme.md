# janmatasek.com

- Stránka přepsaná podle předlohy, která byla k dispozici poouze v built verzi, bez zdroje
- nevyužívá žádné knihovny ani frameworky
- repo: https://github.com/piipecek/matasek_stranky

Josef Lát

##  Lokální spuštění

1. `git clone`
2. `python -m http:server` nebo jakýkoli jiný http server

##  Spuštění na Wedos

1. přístupové údaje na FTP hledej buď uložené ve FileZile, nebo v mailu podle předmětu `Kopie kontaktního formuláře`
2. Push do `main` větve aktivuje github action, která to deployne

##  Úpravy obsahu

- Pro založení nových stránek a nové struktury oslovit Josefa
- Pro menší úpravy obsahu:
1) všechen obsah je v souboru `index.html`
2) ten se dá zde na githubu upravit, poté `commit changes` -> volitelně přidat popis -> zanechat dirrectly to main -> hotovo. Na živé stránce se změny projeví snad do minuty.
