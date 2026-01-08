# Full Neumorphic Theme & Cards for Home Assistant

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2023.1+-blue?style=flat-square&logo=home-assistant)](https://www.home-assistant.io/)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange?style=flat-square)](https://hacs.xyz/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Community](https://img.shields.io/badge/Community-Open%20Source-purple?style=flat-square)](CONTRIBUTING.md)

> 🎨 **Theme** + 🎴 **Custom Cards** — Complete neumorphic UI kit for Home Assistant

**Open Source Project** — Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📦 Two Packages

| Package | Type | HACS Category |
|---------|------|---------------|
| **Full Neumorphic Theme** | Theme | Theme |
| **Neumorphic Cards** | Lovelace Plugin | Frontend |

---

## 🎴 Neumorphic Cards Installation

### Manual Install
1. Download `public/neumorphic-cards.js`
2. Copy to `/config/www/neumorphic-cards.js`
3. Add resource in **Settings → Dashboards → Resources**:
   ```yaml
   url: /local/neumorphic-cards.js
   type: module
   ```
4. Refresh browser (Ctrl+F5)

### Usage
```yaml
type: custom:neumorphic-light-card
entity: light.living_room

type: custom:neumorphic-climate-card
entity: climate.thermostat

type: custom:neumorphic-sensor-card
entity: sensor.temperature

type: custom:neumorphic-button-card
entity: switch.lamp

type: custom:neumorphic-media-card
entity: media_player.spotify

type: custom:neumorphic-fan-card
entity: fan.bedroom
```

See `docs/CARDS.md` for full documentation.

---

## 🎨 Theme Installation

See `docs/README.md` for theme installation via HACS.

---

## 🤝 Contributing

This is an **open-source community project**! We welcome:

- 🐛 Bug reports and fixes
- ✨ New features and cards
- 📝 Documentation improvements
- 🎨 Design enhancements
- 🌍 Translations

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License — Free to use, modify, and share.

---

<p align="center">
  Made with ❤️ for the Home Assistant Community
</p>