# Moment 4 - Programmering i TypeScript

Detta är en Angular-app som hämtar och visar information från en json-källa.

## Funktioner

* Hämtar kursdata med HTTPClient i Angular
* Visar datan i tabellformat
* Sök och filtrera ut innehåll från tabellen
* Sortera i bokstavstorning 
* Automatisk uppdatering vid sökning eller sortering

## Struktur/komponenter

* courselist.component.ts - logik för visning av lista samt sortering och filtrering
* getcourses.servces.ts - hämtar data från json-fil
* course.ts - interface för Course
* courselist.component.html - använder databinding för utskrift av innehåll


## Använda repot

* Klona repot och kör

```bash
npm install
```

* Starta servern 

```bash
ng serve
```

dalo2101
