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
3) Níže je popis struktury jednoho "roku" v kterékoli kategorii music/film/appod.

```
<div id="music" hidden>
    <div class="table_wrapper">
        <div class="row">
            <div class="year_col">
                <p>2024</p>
            </div>
            <div class="description_col">
                <p>
                    <strong>Co je uvnitř?/What is inside?<strong>
                    — Divadlo DRAK — directed by Dominika
                    Špalková and Anna Klimešová / music by J.
                    Matásek
                </p>
            </div>
        </div>
    </div>
</div>
```

Věci, které nejsppíš měnit nebudeš: 

- `id="music"` - kategorie, máme music, theatre, education, seminars.
- `hidden` - atribut, který skrývá všechny kategorie kromě té, která je zrovna aktivní
- `class="table_wrapper"` - wrapper pro tabulku, zajišťuje správné chování na mobilu

Věci, které měnit můžeš kdykoli:
- `class="row"` - Řádek, každý rok je jeden řádek.
- `class="year_col"` - Místo pro rok, např. 2024
- `class="description_col"` - Místo pro popis všech aktivit toho roku
- `p` - paragraph. Jeden odstavec = jedna akce / představení / událost.
- `strong` - tučné písmo
- Každý tag (`div`, `p`, `strong`) musí začít (např `<div>`) a skončit (např `</div>`).
