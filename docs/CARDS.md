# Neumorphic Cards for Home Assistant

Premium neumorphic-styled Lovelace cards with soft 3D shadows and modern design.

## 📦 Installation

### HACS (Recommended)

1. Open **HACS** → **Frontend**
2. Click **⋮** (menu) → **Custom repositories**
3. Add: `https://github.com/YOUR_USERNAME/ha-neumorphic-cards`
4. Select category: **Lovelace**
5. Click **Download**
6. Refresh your browser (Ctrl+F5)

### Manual Installation

1. Download `neumorphic-cards.js` from the `dist/` folder
2. Copy to `/config/www/neumorphic-cards.js`
3. Add resource in **Settings** → **Dashboards** → **Resources**:
   ```yaml
   url: /local/neumorphic-cards.js
   type: module
   ```
4. Refresh your browser

---

## 🎴 Available Cards

### Neumorphic Light Card

Control lights with brightness slider.

```yaml
type: custom:neumorphic-light-card
entity: light.living_room
name: Living Room Light  # optional
```

### Neumorphic Climate Card

Climate control with temperature adjustment.

```yaml
type: custom:neumorphic-climate-card
entity: climate.living_room
name: Thermostat  # optional
```

### Neumorphic Sensor Card

Display any sensor value.

```yaml
type: custom:neumorphic-sensor-card
entity: sensor.temperature
name: Temperature  # optional
icon: mdi:thermometer  # optional
```

### Neumorphic Button Card

Toggle any entity with a tap.

```yaml
type: custom:neumorphic-button-card
entity: switch.desk_lamp
name: Desk Lamp  # optional
icon: mdi:desk-lamp  # optional
tap_action: toggle  # toggle, turn_on, turn_off
```

### Neumorphic Media Card

Media player with playback controls.

```yaml
type: custom:neumorphic-media-card
entity: media_player.spotify
name: Spotify  # optional
```

### Neumorphic Fan Card

Fan control with speed presets.

```yaml
type: custom:neumorphic-fan-card
entity: fan.bedroom
name: Bedroom Fan  # optional
```

---

## 🎨 Dark Mode Support

Cards automatically detect dark mode from Home Assistant theme. If using the **Full Neumorphic Theme**, colors will match perfectly.

---

## 📋 Example Dashboard

Create a complete neumorphic dashboard:

```yaml
title: Neumorphic Home
views:
  - title: Home
    path: home
    type: masonry
    cards:
      - type: horizontal-stack
        cards:
          - type: custom:neumorphic-button-card
            entity: switch.all_lights
            name: All Lights
            icon: mdi:lightbulb-group
          
          - type: custom:neumorphic-button-card
            entity: script.good_night
            name: Good Night
            icon: mdi:weather-night
          
          - type: custom:neumorphic-button-card
            entity: script.movie_time
            name: Movie
            icon: mdi:movie

      - type: custom:neumorphic-light-card
        entity: light.living_room
        name: Living Room

      - type: custom:neumorphic-climate-card
        entity: climate.home
        name: Climate Control

      - type: horizontal-stack
        cards:
          - type: custom:neumorphic-sensor-card
            entity: sensor.outdoor_temperature
            name: Outside
            icon: mdi:thermometer
          
          - type: custom:neumorphic-sensor-card
            entity: sensor.humidity
            name: Humidity
            icon: mdi:water-percent

      - type: custom:neumorphic-media-card
        entity: media_player.living_room
        name: Living Room Speaker

      - type: custom:neumorphic-fan-card
        entity: fan.bedroom
        name: Bedroom Fan
```

---

## 🔧 Troubleshooting

### Cards not appearing
1. Check browser console for errors (F12)
2. Ensure resource is added correctly
3. Try hard refresh (Ctrl+Shift+R)

### Entity not found
- Verify entity ID exists in **Developer Tools** → **States**
- Check spelling (case-sensitive)

### Styling issues
- Install **Full Neumorphic Theme** for best results
- Cards use CSS variables that theme provides

---

## 📄 License

MIT License - Free to use, modify, and share.
