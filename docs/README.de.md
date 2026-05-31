# FossFLOW - Isometrisches Diagramm-Werkzeug <img width="30" height="30" alt="fossflow" src="https://github.com/user-attachments/assets/56d78887-601c-4336-ab87-76f8ee4cde96" />

<p align="center">
 <a href="../README.md">English</a> | <a href="README.cn.md">简体中文</a> | <a href="README.es.md">Español</a> | <a href="README.pt.md">Português</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.bn.md">বাংলা</a> | <a href="README.ru.md">Русский</a> | <a href="README.id.md">Bahasa Indonesia</a> | <a href="README.de.md">Deutsch</a>
</p>

<b>Hey!</b> Hier ist Stan. Wenn du FossFLOW benutzt hast und es dir geholfen hat, <b>würde ich mich sehr über eine kleine Spende freuen :)</b> Ich arbeite Vollzeit, und Zeit für dieses Projekt zu finden ist schon schwer genug.
Wenn ich ein Feature für dich implementiert oder einen Bug behoben habe, wäre es toll, wenn du etwas spenden könntest :) Falls nicht, ist das kein Problem – diese Software bleibt immer kostenlos!

<b>Außerdem!</b> Falls noch nicht geschehen, schau dir bitte die zugrunde liegende Bibliothek an, auf der dies aufbaut, von <a href="https://github.com/markmanx/isoflow">@markmanx</a>. Ich stehe hier wirklich auf den Schultern eines Riesen 🫡

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P61KBXA3)

<a href="https://www.buymeacoffee.com/stan.smith" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Danke,

-Stan

## Online ausprobieren

Gehe zu <b> --> https://stan-smith.github.io/FossFLOW/ <-- </b>


------------------------------------------------------------------------------------------------------------------------------
FossFLOW ist eine leistungsstarke, quelloffene Progressive Web App (PWA) zum Erstellen schöner isometrischer Diagramme. Gebaut mit React und der <a href="https://github.com/markmanx/isoflow">Isoflow</a>-Bibliothek (jetzt geforkt und auf NPM als fossflow veröffentlicht), läuft sie vollständig in deinem Browser mit Offline-Unterstützung.

![Screenshot_20250630_160954](https://github.com/user-attachments/assets/e7f254ad-625f-4b8a-8efc-5293b5be9d55)

- **🤝 [CONTRIBUTING.md](https://github.com/Abrar74774/FossFLOW/blob/master/CONTRIBUTING.md)** - Wie du zum Projekt beitragen kannst.

## 🐳 Schnelle Bereitstellung mit Docker

```bash
# Mit Docker Compose (empfohlen - beinhaltet persistenten Speicher)
docker compose up

# Oder direkt von Docker Hub mit persistentem Speicher ausführen
docker run -p 80:80 -v $(pwd)/diagrams:/data/diagrams stnsmith/fossflow:latest
```

Server-Speicher ist in Docker standardmäßig aktiviert. Deine Diagramme werden in `./diagrams` auf dem Host gespeichert.

Um den Server-Speicher zu deaktivieren, setze `ENABLE_SERVER_STORAGE=false`:
```bash
docker run -p 80:80 -e ENABLE_SERVER_STORAGE=false stnsmith/fossflow:latest
```

## Schnellstart (Lokale Entwicklung)

```bash
# Repository klonen
git clone https://github.com/Abrar74774/FossFLOW
cd FossFLOW

# Abhängigkeiten installieren
npm install

# Bibliothek bauen (beim ersten Mal erforderlich)
npm run build:lib

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## Monorepo-Struktur

Dies ist ein Monorepo mit zwei Paketen:

- `packages/fossflow-lib` - React-Komponentenbibliothek zum Zeichnen von Netzwerkdiagrammen (gebaut mit Webpack)
- `packages/fossflow-app` - Progressive Web App, die die Bibliothek umhüllt und präsentiert (gebaut mit RSBuild)

### Entwicklungsbefehle

```bash
# Entwicklung
npm run dev          # App-Entwicklungsserver starten
npm run dev:lib      # Watch-Modus für Bibliotheksentwicklung

# Bauen
npm run build        # Bibliothek und App bauen
npm run build:lib    # Nur Bibliothek bauen
npm run build:app    # Nur App bauen

# Testen & Linting
npm test             # Unit-Tests ausführen
npm run lint         # Auf Linting-Fehler prüfen

# E2E-Tests (Selenium)
cd e2e-tests
./run-tests.sh       # End-to-End-Tests ausführen (erfordert Docker & Python)

# Veröffentlichen
npm run publish:lib  # Bibliothek auf npm veröffentlichen
```

## Verwendung

### Diagramme erstellen

1. **Elemente hinzufügen**:
   - Drücke die "+"-Taste im Menü oben rechts, die Komponentenbibliothek erscheint links
   - Ziehe Komponenten per Drag-and-Drop aus der Bibliothek auf die Leinwand
   - Oder klicke mit der rechten Maustaste auf das Raster und wähle "Knoten hinzufügen"

2. **Elemente verbinden**:
   - Wähle das Verbindungswerkzeug (drücke 'C' oder klicke auf das Verbindungssymbol)
   - **Klick-Modus** (Standard): Klicke auf den ersten Knoten, dann auf den zweiten
   - **Zieh-Modus** (optional): Klicke und ziehe vom ersten zum zweiten Knoten
   - Wechsle den Modus in Einstellungen → Verbindungen

3. **Arbeit speichern**:
   - **Schnellspeichern** - Speichert in der Browser-Sitzung
   - **Exportieren** - Als JSON-Datei herunterladen
   - **Importieren** - Aus JSON-Datei laden

### Speicheroptionen

- **Sitzungsspeicher**: Temporäre Speicherungen, die beim Schließen des Browsers gelöscht werden
- **Export/Import**: Permanente Speicherung als JSON-Dateien
- **Automatisches Speichern**: Speichert Änderungen automatisch alle 5 Sekunden in der Sitzung

## Beitragen

Wir freuen uns über Beiträge! Siehe [CONTRIBUTORS.md](../CONTRIBUTORS.md) für Richtlinien.

## Dokumentation

- [FOSSFLOW_ENCYCLOPEDIA.md](../FOSSFLOW_ENCYCLOPEDIA.md) - Umfassender Leitfaden zur Codebase
- [CONTRIBUTORS.md](../CONTRIBUTORS.md) - Beitragsrichtlinien

## Lizenz

MIT
