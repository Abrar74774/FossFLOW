<div align="center">
 
# FossFLOW
### Isometric Diagramming Tool

</div>



<p align="center">
 <a href="README.md">English</a> | <a href="docs/README.cn.md">简体中文</a> | <a href="docs/README.es.md">Español</a> | <a href="docs/README.pt.md">Português</a> | <a href="docs/README.fr.md">Français</a> | <a href="docs/README.hi.md">हिन्दी</a> | <a href="docs/README.bn.md">বাংলা</a> | <a href="docs/README.ru.md">Русский</a> | <a href="docs/README.id.md">Bahasa Indonesia</a> | <a href="docs/README.de.md">Deutsch</a>
</p>

## Note:
This repo is a fork of stan-smith/FossFLOW (which in turn was a fork of [markmanx/isoflow](https://github.com/markmanx/isoflow)) originally made for the purpose of contributing to the original repo through PRs, however the username of the author seems to have been changed to [mug-book-droid](https://github.com/mug-book-droid) and their activity set to private (account suspended maybe?), making the original repo inaccessible.

For now, I intend to make this repo a continuation of development to FossFLOW from myself, and any contributions through PRs are welcome as well. 

You can check out the last state of the original repo that I fetched on `backup/stan-smith-FossFLOW` branch.

---

FossFLOW is a powerful, open-source Progressive Web App (PWA) for creating beautiful isometric diagrams. Built with React and the <a href="https://github.com/markmanx/isoflow">Isoflow</a> (Now forked and published to NPM as fossflow) library, it runs entirely in your browser with offline support.

---
<p align="center">
<b>Try it online --> https://abrar74774.github.io/FossFLOW/ <-- </b>
</p>
 
<img width="100%" alt="FossFLOW-Isometric-Diagramming-Tool" src="https://github.com/user-attachments/assets/15956888-991a-4b5e-9849-dbd82d6f9308" />

---------

## 🐳 Quick Deploy with Docker

```bash
# Using Docker Compose (recommended - includes persistent storage)
docker compose up

# Or run directly from Docker Hub with persistent storage
docker run -p 80:80 -v $(pwd)/diagrams:/data/diagrams abrar74774/fossflow:latest
```

Server storage is enabled by default in Docker. Your diagrams will be saved (as root by default) to `./diagrams` on the host. To change user or group id for saving as, set the `PUID` and `PGID` env variables.

To disable server storage, set `ENABLE_SERVER_STORAGE=false`:
```bash
docker run -p 80:80 -e ENABLE_SERVER_STORAGE=false abrar74774/fossflow:latest
```

### HTTP Basic Authentication (Optional)

Protect your FossFLOW instance with HTTP Basic Auth:

```bash
# With Docker Compose
HTTP_AUTH_USER=admin HTTP_AUTH_PASSWORD=secret docker compose up

# Or with docker run
docker run -p 80:80 \
  -e HTTP_AUTH_USER=admin \
  -e HTTP_AUTH_PASSWORD=secret \
  abrar74774/fossflow:latest
```

> **Note**: Both variables must be set to enable authentication. If either is empty, the app is accessible without login.

## Quick Start (Local Development)

```bash
# Clone the repository
git clone https://github.com/Abrar74774/FossFLOW
cd FossFLOW

# Install dependencies
npm install

# Build the library (required first time)
npm run build:lib

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Monorepo Structure

This is a monorepo containing two packages:

- `packages/fossflow-lib` - React component library for drawing network diagrams (built with Webpack)
- `packages/fossflow-app` - Progressive Web App which wraps the lib and presents it (built with RSBuild)

### Development Commands

```bash
# Development
npm run dev          # Start app development server
npm run dev:lib      # Watch mode for library development

# Building
npm run build        # Build both library and app
npm run build:lib    # Build library only
npm run build:app    # Build app only

# Testing & Linting
npm test             # Run unit tests
npm run lint         # Check for linting errors

# E2E Tests (Selenium)
cd e2e-tests
./run-tests.sh       # Run end-to-end tests (requires Docker & Python)

# Publishing
npm run publish:lib  # Publish library to npm
```

## How to Use

### Creating Diagrams

1. **Add Items**:
   - Press the "+" button on the top right menu, the library of components will appear on the left
   - Drag and drop components from the library onto the canvas
   - Or right-click on the grid and select "Add node"

2. **Connect Items**: 
   - Select the Connector tool (press 'C' or click connector icon)
   - **Click mode** (default): Click first node, then click second node
   - **Drag mode** (optional): Click and drag from first to second node
   - Switch modes in Settings → Connectors tab

3. **Save Your Work**:
   - **Quick Save** - Saves to browser session
   - **Export** - Download as JSON file
   - **Import** - Load from JSON file

### Storage Options

- **Session Storage**: Temporary saves cleared when browser closes
- **Export/Import**: Permanent storage as JSON files
- **Auto-Save**: Automatically saves changes every 5 seconds to session

## Recently added

### Connectors multiplexing
<img src="demos/connectors.gif" alt="Multiplexed connectors demo" />

### Copy Pasting items
<img src="demos/copy-paste-demo.gif" alt="Copy pasting demo" />


## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Documentation

- [FOSSFLOW_ENCYCLOPEDIA.md](FOSSFLOW_ENCYCLOPEDIA.md) - Comprehensive guide to the codebase
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contributing guidelines

## License

MIT
