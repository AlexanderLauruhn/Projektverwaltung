// Klasse für die Artefakte
class Artefakt {
    constructor(id, name, beschreibung, geplanteZeit, aufgBereich) {
        this.titel = name;
        this.kurzbeschreibung = beschreibung;
        this.aufgabenbereich = aufgBereich;
        this._id = id;
        this._name = name;
        this._beschreibung = beschreibung;
        this._geplanteZeit = geplanteZeit;
        this._aufgBereich = aufgBereich;
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

    get beschreibung() {
        return this._beschreibung;
    }

    set beschreibung(value) {
        this._beschreibung = value;
    }

    get geplanteZeit() {
        return this._geplanteZeit;
    }

    set geplanteZeit(value) {
        this._geplanteZeit = value;
    }

    get aufgBereich() {
        return this._aufgBereich;
    }

    set aufgBereich(value) {
        this._aufgBereich = value;
    }
}
