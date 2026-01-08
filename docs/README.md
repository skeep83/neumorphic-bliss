# 🎨 Full Neumorphic Theme for Home Assistant

<p align="center">
  <img src="https://img.shields.io/badge/Home%20Assistant-2023.1+-blue?style=for-the-badge&logo=home-assistant" alt="Home Assistant 2023.1+">
  <img src="https://img.shields.io/badge/HACS-Custom-orange?style=for-the-badge" alt="HACS Custom">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  A premium <strong>neumorphic (soft UI)</strong> theme for Home Assistant featuring sophisticated shadows, premium typography, and a cohesive design system for both light and dark modes.
</p>

---

## ✨ Features

- 🌓 **Dual Mode Support** — Beautiful light and dark themes that share a consistent design language
- 🎭 **True Neumorphism** — Authentic convex/concave shadow effects for a tactile, 3D interface
- 📝 **Premium Typography** — Optimized for readability with carefully selected font pairings
- 🎨 **Full Coverage** — Styles cards, sidebar, header, dialogs, inputs, badges, and more
- 🔌 **Card-Mod Ready** — Pro-level CSS snippets for deep customization
- 🍄 **Mushroom Compatible** — Designed to look amazing with Mushroom cards

---

## 📸 Screenshots

> *Coming soon: Add your own screenshots by taking photos of your dashboard!*

### Light Mode
The light mode features a warm off-white (`#E8E2D9`) base with soft shadows that create a premium, tactile feel.

### Dark Mode  
The dark mode uses a rich charcoal (`#2A2A2E`) base with subtle depth, maintaining the neumorphic aesthetic while being easy on the eyes.

---

## 🚀 Installation

### Via HACS (Recommended)

1. Open HACS in your Home Assistant
2. Click on **Frontend** → **⋮** (three dots menu) → **Custom repositories**
3. Add this repository URL: `https://github.com/YOUR_USERNAME/ha-full-neumorphic-theme`
4. Select **Theme** as the category
5. Click **Add**
6. Find "Full Neumorphic Theme" in the list and click **Download**
7. Restart Home Assistant

### Manual Installation

1. Download the `themes/full_neumorphic.yaml` file from this repository
2. Copy it to your Home Assistant's `config/themes/` directory
3. If the `themes` folder doesn't exist, create it
4. Add the following to your `configuration.yaml` if not already present:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

5. Restart Home Assistant

---

## ⚙️ Applying the Theme

### Per-User (Recommended)

1. Click your user profile (bottom-left corner)
2. Under **Theme**, select **Full Neumorphic**
3. The theme will automatically switch between light/dark based on your system preference

### System-Wide Default

Add to your `configuration.yaml`:

```yaml
frontend:
  themes: !include_dir_merge_named themes

automation:
  - alias: "Set Default Theme"
    trigger:
      - platform: homeassistant
        event: start
    action:
      - service: frontend.set_theme
        data:
          name: Full Neumorphic
          mode: light  # or "dark"
```

---

## 🔤 Typography Setup

This theme is designed for premium typography. Here's how to enable custom fonts:

### Method 1: Browser Source Fonts (Recommended)

Add to your Lovelace dashboard YAML:

```yaml
resources:
  - url: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap
    type: css
```

### Method 2: Custom Header Integration

If you have [Custom Header](https://github.com/AmoebeLabs/custom-header) installed:

```yaml
custom_header:
  resources:
    - url: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap
      type: css
```

### Method 3: Frontend Extra Module URL

Add to `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/fonts.css
```

Then create `www/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

:root {
  --primary-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --paper-font-common-base_-_font-family: var(--primary-font-family);
  --paper-font-common-code_-_font-family: 'JetBrains Mono', 'Fira Code', monospace;
  --paper-font-body1_-_font-family: var(--primary-font-family);
  --paper-font-subhead_-_font-family: var(--primary-font-family);
  --paper-font-headline_-_font-family: 'Plus Jakarta Sans', var(--primary-font-family);
  --paper-font-caption_-_font-family: var(--primary-font-family);
  --paper-font-title_-_font-family: 'Plus Jakarta Sans', var(--primary-font-family);
}
```

---

## 🎨 Card-Mod Pro Layer

For the deepest neumorphic styling, install [card-mod](https://github.com/thomasloven/lovelace-card-mod) and use our ready-made snippets.

### Installing Card-Mod

Via HACS → Frontend → Search "card-mod" → Download

### Using Snippets

Copy the snippets from `snippets/card-mod-neumorphic.yaml` and apply them to your cards.

#### Example: Neumorphic Mushroom Card (Light Mode)

```yaml
type: custom:mushroom-light-card
entity: light.living_room
card_mod:
  style: |
    ha-card {
      background: #E8E2D9 !important;
      border-radius: 16px !important;
      border: none !important;
      box-shadow: 
        6px 6px 12px rgba(174, 168, 159, 0.5),
        -6px -6px 12px rgba(255, 255, 255, 0.8) !important;
    }
    mushroom-shape-icon {
      background: #DED8CF !important;
      box-shadow: 
        inset 2px 2px 4px rgba(174, 168, 159, 0.4),
        inset -2px -2px 4px rgba(255, 255, 255, 0.7) !important;
    }
```

#### Example: Neumorphic Mushroom Card (Dark Mode)

```yaml
type: custom:mushroom-light-card
entity: light.living_room
card_mod:
  style: |
    ha-card {
      background: #2A2A2E !important;
      border-radius: 16px !important;
      border: none !important;
      box-shadow: 
        6px 6px 12px rgba(18, 18, 20, 0.7),
        -6px -6px 12px rgba(58, 58, 62, 0.6) !important;
    }
    mushroom-shape-icon {
      background: #222226 !important;
      box-shadow: 
        inset 2px 2px 4px rgba(18, 18, 20, 0.6),
        inset -2px -2px 4px rgba(58, 58, 62, 0.5) !important;
    }
```

#### Global Card-Mod Theme (Apply to All Cards)

Add this to your dashboard's raw YAML configuration for universal neumorphic styling:

```yaml
card_mod:
  style:
    .: |
      ha-card {
        background: var(--card-background-color) !important;
        border-radius: 16px !important;
        border: none !important;
        box-shadow: var(--ha-card-box-shadow) !important;
      }
```

---

## 🍄 Recommended Cards

For the best visual experience, we recommend these cards:

| Card | Description | HACS |
|------|-------------|------|
| [Mushroom Cards](https://github.com/piitaya/lovelace-mushroom) | Beautiful, customizable cards | ✅ |
| [Button Card](https://github.com/custom-cards/button-card) | Advanced button customization | ✅ |
| [Mini Graph Card](https://github.com/kalkih/mini-graph-card) | Compact graphs | ✅ |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Advanced layouts | ✅ |
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | CSS customization | ✅ |

---

## 🎯 Design System

### Color Palette

#### Light Mode
| Token | Color | Usage |
|-------|-------|-------|
| Base | `#E8E2D9` | Main background |
| Raised | `#F0EAE1` | Elevated surfaces |
| Inset | `#DED8CF` | Pressed states |
| Primary | `#4A6FA5` | Accent color |
| Text Primary | `#2D3142` | Main text |
| Text Secondary | `#5C6378` | Secondary text |

#### Dark Mode
| Token | Color | Usage |
|-------|-------|-------|
| Base | `#2A2A2E` | Main background |
| Raised | `#323236` | Elevated surfaces |
| Inset | `#222226` | Pressed states |
| Primary | `#6B9BD2` | Accent color |
| Text Primary | `#E8E4DF` | Main text |
| Text Secondary | `#A8A4A0` | Secondary text |

### Shadow System

| Type | Usage | Effect |
|------|-------|--------|
| Convex | Cards, buttons | Raised/3D appearance |
| Convex SM | Chips, small elements | Subtle raised effect |
| Convex LG | Hero cards, modals | Dramatic depth |
| Concave | Inputs, pressed states | Inset/pressed effect |

### Typography Scale

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Plus Jakarta Sans | 600-700 | 1.5-2rem |
| Body | Inter | 400-500 | 0.875-1rem |
| Caption | Inter | 400 | 0.75rem |
| Code | JetBrains Mono | 400 | 0.875rem |

---

## 🔧 Customization

### Adjusting Shadow Intensity

Edit the theme variables in your local copy:

```yaml
# Softer shadows (more subtle)
neumorphic-convex-shadow: "4px 4px 8px rgba(174, 168, 159, 0.35), -4px -4px 8px rgba(255, 255, 255, 0.6)"

# Stronger shadows (more dramatic)
neumorphic-convex-shadow: "8px 8px 16px rgba(174, 168, 159, 0.65), -8px -8px 16px rgba(255, 255, 255, 0.9)"
```

### Changing Accent Color

Replace `--primary-color` values:

```yaml
# Blue (default)
primary-color: "#4A6FA5"

# Teal
primary-color: "#4A9F9F"

# Rose
primary-color: "#9F6B8A"

# Olive
primary-color: "#7A9F6B"
```

---

## ❓ FAQ

### Q: The shadows don't show on all cards?
**A:** Home Assistant's native theme variables have limited shadow support. For full neumorphic styling on all cards, use the card-mod snippets provided in `snippets/card-mod-neumorphic.yaml`.

### Q: Why does my sidebar look different?
**A:** Sidebar styling is fully supported through theme variables. Make sure you've restarted Home Assistant after installing the theme.

### Q: Can I use this with other custom cards?
**A:** Yes! The theme is designed to work with all cards. For cards that don't respond to theme variables, use the card-mod snippets.

### Q: How do I switch between light and dark modes?
**A:** The theme uses the `modes:` feature. Set your profile to "Auto" to follow system preference, or manually select light/dark in your profile settings.

### Q: Fonts aren't loading?
**A:** Try Method 1 (Browser Source Fonts) first. If that doesn't work, use Method 3 with a local CSS file. Some Home Assistant setups block external font requests.

---

## 📄 License

MIT License - feel free to use, modify, and share!

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 💖 Credits

- Inspired by the neumorphism design trend
- Built for the amazing Home Assistant community
- Typography powered by Google Fonts

---

<p align="center">
  <strong>Made with ❤️ for Home Assistant</strong>
</p>
