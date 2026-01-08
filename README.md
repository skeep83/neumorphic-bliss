# Full Neumorphic Theme & Cards for Home Assistant

> 🎨 **Theme** + 🎴 **Custom Cards** — Complete neumorphic UI kit for Home Assistant

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
