
// Klasse für die Aufgabenbereiche
class Aufgabenbereich {
    constructor(id, name, kurzbeschreibung) {
        this.artefakte = [];
        this._id = id;
        this._name = name;
        this._kurzbeschreibung = kurzbeschreibung;
    }

    addArtefakt(artefakt) {
        this.artefakte.push(artefakt);
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
}
