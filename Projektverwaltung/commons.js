// Klasse für Sortierungsoperationen
class ProjektSortierer {
    static nachAnfangsdatum(projekte) {
        return projekte.sort((a, b) => a.anfangsdatum - b.anfangsdatum);
    }

    static nachProjektlaufzeit(projekte) {
        return projekte.sort((a, b) => a.berechneProjektlaufzeit() - b.berechneProjektlaufzeit());
    };
}

class Translator {
    static ENGLISH = 0;
    static GERMAN = 1;

    language = Translator.GERMAN
    texts = new Map([
        ['NAV_HOME',     {en: 'Home',        de: 'Startseite'}],
        ['NAV_OVERVIEW', {en: 'Overview',    de: 'Projektübersicht'}],
        ['NAV_CREATE',   {en: 'New project', de: 'Neues Projekt'}],

        ['LOGIN',          {en: 'Login',     de: 'Login'}],
        ['LOGIN_USERNAME', {en: 'Username:', de: 'Benutzername:'}],
        ['LOGIN_PASSWORD', {en: 'Password:', de: 'Passwort:'}],

        ['FOOTER_HEADLINE', {en: 'Additional navigation:', de: 'Navigation zusätzliche Seiten:'}],
        ['FOOTER_REGISTER', {en: 'Register',       de: 'Registrieren'}],
        ['FOOTER_IMPRINT',  {en: 'Imprint',        de: 'Impressum'}],
        ['FOOTER_PRIVACY',  {en: 'Privacy Policy', de: 'Datenschutzerkärung'}],
        ['FOOTER_DISCLAIMER', {en: 'Disclaimer', de: 'Haftungsausschluss'}],
        ['FOOTER_COPYRIGHT',
            {en: '&copy; 2023 Projektmanagement. All rights reserved. Contact: lukasarnold@web.de / leonunruh@web.de',
             de: '&copy; 2023 Projektmanagement. Alle Rechte vorbehalten. Kontakt: lukasarnold@web.de / leonunruh@web.de'}],

        ['TOP_GOTO', {en: 'Back to top', de: 'Zurück zum Anfang'}],

        ['PROJECT_NAME',      {en: 'Project name',    de: 'Projektname'}],
        ['PROJECT_DATE',      {en: 'Project date',    de: 'Projektdatum'}],
        ['PROJECT_ACTIONS',   {en: 'Actions',         de: 'Aktionen'}],
        ['PROJECT_PAGE_GOTO', {en: 'To project page', de: 'Zur Projektseite'}],
        ['PROJECT_NAME',      {en: 'Project name',    de: 'Projektname'}],

        ['TITLE_HOME',     {en: 'Projectportal - Home',        de: 'Projektportal - Startseite'}],
        ['TITLE_OVERVIEW', {en: 'Projectportal - Overview',    de: 'Projektportal - Projektübersicht'}],
        ['TITLE_CREATE',   {en: 'Projectportal - New project', de: 'Projektportal - Neues Projekt'}],
        ['TITLE_PROJECT',  {en: 'Projectportal - Project',     de: 'Projektportal - Projektseite'}],

        ['WELCOME_FIRST',       {en: 'Exciting students',    de: 'Spannende Studierende'}],
        ['WELCOME_SECOND',      {en: 'Motivate projects...', de: 'Motivieren Projekte...'}],
        ['WELCOME_DESCRIPTION', {en: 'Description',          de: 'Beschreibung'}],
        ['WELCOME_DESCRIPTION_TEXT', {
            en: `This is a basic welcome message in english!`,
            de: `Dies ist eine standartisierte Wilkommensnachricht!.`
        }],
        ['WELCOME_VIDEO_PLAYBACK_NOT_SUPPORTED', {
            en: 'Video playback is not supported in your browser',
            de: 'Videowiedergabe wird vom Browser nicht unterstützt'
        }],

        ['NEW_PROJECTS', {en: 'Newest projects', de: 'Neuste Projekte'}]
    ]);

    translate(text) {
        if (this.texts.has(text)) {
            if (this.language === Translator.GERMAN) {
                return this.texts.get(text).de
            } else {
                return this.texts.get(text).en
            }
        }
        return text
    }
}

// Definition der Browsersprache beim Laden einer Seite
window.addEventListener('load', function() {
    console.log("page is fully loaded!")
    const browserSprache = navigator.language;
    console.log(`Die Browsersprache ist: ${browserSprache}`);
    let translator = new Translator();

    if (browserSprache.startsWith('de')) {
        translator.language = Translator.GERMAN
    }
    else if (browserSprache.startsWith('en')) {
        translator.language = Translator.ENGLISH
    }

});
