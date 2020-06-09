




## Introductie

🕺🎵 Je eigen favo song-saver maken! 🎵💃

Vandaag gaan jullie aan de slag om een Single Page Application (SPA) te maken waarin je al je favoriete lievelingsliedjes kunt opslaan met rating.

## Requirements:

Om aan de eisen van de (denkbeeldige) werkgever te moeten voldoen verwachten we dat jullie SPA aan de volgende **core functionaliteiten** voldoet:

- Als gebruiker wil ik de volgende gegevens over mijn nummer willen invullen: titel, artiest, genre, rating (dropdown menu is geen vereiste).
- Als gebruiker wil ik op één button kunnen klikken waardoor mijn ingevulde nummer toegevoegd wordt aan mijn playlist.
- Als gebruiker wil ik mijn nummers kunnen zien in een overzicht (mijn playlist), waar alle ingevulde gegevens in zichtbaar zijn.

## Overige voorwaarden:

- Je bent helemaal vrij om je components zelf op te bouwen: Stateful en/of Smart versus Dumb, dan wel met Class components, dan wel Functional Components (met de UseState Hook)....
    - .....Maar, let wel op dat je geen spaghetti code krijgt, waarin elk component alles doet (én State beheert, én functies beheert én UI display, etc.)

## Design

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a75dc1c-2cd2-42cd-8b06-00588a873d33/ezgif-6-d24ac08d8561.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a75dc1c-2cd2-42cd-8b06-00588a873d33/ezgif-6-d24ac08d8561.gif)

## ✅ Geslaagd = Core Functionaliteiten + 3 punten

Naast deze bovenstaande Core Functionaliteiten zijn jullie verplicht om 3 extra punten uit de onderstaande lijst te kiezen.

**Aanvullende punten:**

- **1 PUNT** – **Sorteren** van de liedjes op naam (a-z of z-a) of artiest (a-z of z-a), sorteren op sterren (5-1 of 1-5)
- **1 PUNT** – **Delete knop**: verwijderen van liedjes uit de state (super bonus punten als deze dan ook nog verwijderd worden uit de database)
- **1 PUNT** – **Categoriseren:** elke genre krijgt zijn eigen lijstje en het nummer dat je toevoegt komt terecht bij het respectievelijke genre
- **2 PUNTEN** – **Filteren** van liedjes op
    - genre (selecteren welke genres je wilt) in de UI zie je of een dropdown waarmee je 1 genre kan selecteren, of je maakt een checkbox per genre, als die checkbox is aangevinkt: toon het genre (dit kunnen er dus ook meerdere of geen één zijn)
    - sterren (sorteren welke resultaten met x sterren je wilt zien) in de UI zie je of een dropdown waarmee je 1 rating kan selecteren, of je maakt een checkbox per rating, als die checkbox is aangevinkt: toon alle liedje van die rating (dit kunnen er dus ook meerdere of geen één zijn)
- **2 PUNTEN** – **[Routing](https://reacttraining.com/react-router/web/guides/quick-start)** (/Navigatie)**:** toevoegen van een navbar of menu met een link en pagina "About us", met daarin een kort verhaaltje over jezelf en dit project (max 10 zinnen)
- **2 PUNTEN** – **REDUX**
- **3 PUNTEN** – **Firebase API:** Toevoegen van een end-point in de database om, de data op te slaan