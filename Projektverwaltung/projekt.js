// Klasse für die Projekte
export class Projekt {
    constructor(id, name, kurzbeschreibung, langbeschreibung, anfangsdatum, enddatum) {
        this.aufgabenbereiche = [];
        this.artefakte = [];
        this._id = id;
        this._name = name;
        this._kurzbeschreibung = kurzbeschreibung;
        this._langbeschreibung = langbeschreibung;
        this._anfangsdatum = anfangsdatum;
        this._enddatum = enddatum;
    }


    addAufgabenbereich(aufgabenbereich) {
        this.aufgabenbereiche.push(aufgabenbereich);
    }

    // Berechnung der Projektarbeitszeit
    berechneProjektlaufzeit() {
        let summe = 0;
        for (const aufgabenbereich of this.aufgabenbereiche) {
            for (const artefakt of aufgabenbereich.artefakte) {
                summe += artefakt.geplanteZeit;
            }
        }
        return summe;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get kurzbeschreibung() {
        return this._kurzbeschreibung;
    }

    set kurzbeschreibung(value) {
        this._kurzbeschreibung = value;
    }

    get langbeschreibung() {
        return this._langbeschreibung;
    }

    set langbeschreibung(value) {
        this._langbeschreibung = value;
    }

    get anfangsdatum() {
        return this._anfangsdatum;
    }

    set anfangsdatum(value) {
        this._anfangsdatum = value;
    }

    get enddatum() {
        return this._enddatum;
    }

    set enddatum(value) {
        this._enddatum = value;
    }
}
