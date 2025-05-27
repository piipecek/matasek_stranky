from collections import defaultdict
import re

# Load the full original text from the user
full_text = """2018	The Theatre Faculty of the Academy of Performing Arts in Prague — external collaboration / lecturer (to this day)
"Struny dětem" — Strings of Autumn 2018 — workshop leadership / lecturer — Praha, Czech Republic
2017	"H jako Hudební seminář aneb dýchat, zpívat, žít" — 87. festival evropského amatérského divadla — external collaboration / lecturer — Jiráskův Hronov, Czech Republic
2014	84. festival evropského amatérského divadla — lecturer of music seminar — Jiráskův Hronov, Czech Republic
2012	"Doc: Od dokumentu k divadlu" — 82. festival evropského amatérského divadla — assistant lecturer — Jiráskův Hronov, Czech Republic
2010	80. festival evropského amatérského divadla — lecturer of music workshop and practical voice seminar for commercial entities — Jiráskův Hronov, Czech Republic
Přehlídka studentských divadelních souborů Mladá scéna — lecturer of music seminar — Ústí nad Orlicí, Czech Republic
"Zvuk—Hlas—Divadlo" — 59. loutkářská Chrudim — lecturer — Chrudim, Czech Republic
2007	"Zvuk—Hlas—Divadlo" — 56. loutkářská Chrudim — lecturer — Chrudim, Czech Republic
2006	"Cesta od zvuků k hudbě" — 55. loutkářská Chrudim — lecturer — Chrudim, Czech Republic
2005	"Cesta od zvuků k hudbě" — 54. loutkářská Chrudim — lecturer — Chrudim, Czech Republic
2004	"Roztoč kolotoč" — lecturer of musical workshop for children and parents — Únětice, Czech Republic
1999	"Od zvuků k hudbě" — Studio Citadela — lecturer of artetherapeutic seminar — Praha, Czech Republic
Diagnostický ústav Hodkovičky — lecturer of artetherapeutic seminar — Praha, Czech Republic
1998	"Prima Jízda—Eldorádo" — Televize Prima — dramaturg of television show for children
1996	"Bílý slon" — drug prevention program — lecturer of music workshop — Praha, Czech Republic (to this day)
1995	"Praktická hudba" — Faculty of Humanities at the Charles University in Prague — external collaboration / lecturer (to this day)
"Od zvuků k hudbě" — Faculty of Humanities at the Charles University in Prague — external collaboration / lecturer (to this day)
1993	Pardubický dětský sbor — assistant conductor — Pardubice, Czech Republic
"""

# Reuse previous parsing and formatting code
projects_by_year = defaultdict(list)
current_year = None

lines = full_text.splitlines()
for line in lines:
    year_match = re.match(r'^(\d{4})\t?', line)
    if year_match:
        current_year = year_match.group(1)
        line = line[len(year_match.group(0)):]  # remove year and optional tab
    elif re.match(r'^\d{4}', line):
        current_year = line[:4]
        line = line[4:].lstrip(' \t-')

    if current_year:
        projects_by_year[current_year].append(line)

# Convert to HTML
html_output_full = ''
for year in sorted(projects_by_year.keys(), reverse=True):
    html_output_full += f'''<div class="row">
                        <div class="year_col">
                            <p>
                                {year}
                            </p>
                        </div>
                        <div class="description_col">
'''
    for project in projects_by_year[year]:
        title_match = re.match(r'["“](.+?)["”](.*)', project)
        if title_match:
            title, rest = title_match.groups()
            html_output_full += f'                            <p>\n                                <strong>{title}</strong>{rest}\n                            </p>\n'
        else:
            html_output_full += f'                            <p>\n                                {project}\n                            </p>\n'
    html_output_full += '                        </div>\n                    </div>\n'

print(html_output_full)
