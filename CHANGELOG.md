# Changelog

All notable changes to the Neumorphic Card-Mod Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-02-23

### 🎨 Full Native Overhaul — "Neumorphism Pro"

Complete rewrite of the theme file for **100% native HA coverage**.

### Added

- **200+ CSS variables** per mode (light & dark) — every HA native variable defined
- **Themesberg-inspired palette**: `#e6e7ee` light base, `#1e2030` dark base
- **Nunito Sans** typography (Google Fonts)
- **Full Material color palette** (23 named colors: red through white)
- **54 graph/calendar colors** (color-1 through color-54)
- **8 energy dashboard colors** (grid, solar, battery, gas, water)
- **80+ state domain colors** (alarm, climate, binary_sensor, lock, weather, etc.)
- **Full MDC component coverage** (theme, checkbox, radio, dialog, text-field, select, button, tab)
- **Input outlined styles** (idle-border, hover-border, disabled-border)
- **HA assist chips & buttons** styling
- **Neumorphic shadow system** — xs, sm, md, lg, xl convex + xs, sm, md, lg concave + hover, active, flat
- **Code editor** — full CodeMirror syntax highlighting (18 token types)
- **Dark mode map filter** for inverted tiles
- **History colors** (unavailable, unknown)

### Changed

- Theme name: **"Neumorphism Pro"** (was "Neumorphic")
- Border radius: `0.55rem` (Themesberg reference)
- Neumorphic shadows use exact hex values (`#b8b9be` / `#ffffff` light, `#141622` / `#282a3e` dark)

### Removed

- Duplicate root files `neumorphism_pro.yaml` and `full_neumorphic.yaml`
- Consolidated canonical theme into `neumorphic.yaml` + `themes/neumorphism_pro.yaml`

## [1.0.0] - 2024-01-08

### Added

- Initial release of Neumorphic Card-Mod Theme
- Light mode with warm off-white base (`#E4E4E0`)
- Dark mode with rich charcoal base (`#2A2A2E`)
- Complete Home Assistant theme variables:
  - Primary and secondary colors
  - Text colors (primary, secondary, disabled)
  - Background colors (primary, secondary, card)
  - Sidebar styling
  - Header styling
  - Card styling with 16px border radius
  - State colors (success, warning, error, info)
  - Switch and toggle styling
  - Slider styling
  - Input field styling
  - Label and badge styling
  - Code editor syntax colors
- Custom CSS variables for card-mod integration:
  - `--neumorphic-convex-shadow-{sm,md,lg}` - Raised shadow variants
  - `--neumorphic-concave-shadow-{sm,md,lg}` - Pressed/inset shadow variants
  - `--neumorphic-flat-shadow` - Subtle flat shadow
  - `--neumorphic-hover-shadow` - Enhanced hover state
  - `--neumorphic-active-shadow` - Pressed state
  - `--neumorphic-surface` - Base surface color
  - `--neumorphic-surface-alt` - Alternate surface color
- HACS compatibility with proper `hacs.json`
- GitHub Actions workflow for HACS validation
- Comprehensive documentation with card-mod examples

### Design Tokens

#### Light Mode

| Token | Value |
|-------|-------|
| Base Surface | `#E4E4E0` |
| Shadow Dark | `#c8c8c4` |
| Shadow Light | `#ffffff` |
| Primary Color | `#4A6FA5` |
| Primary Text | `#2D3142` |

#### Dark Mode

| Token | Value |
|-------|-------|
| Base Surface | `#2A2A2E` |
| Shadow Dark | `#1e1e21` |
| Shadow Light | `#36363b` |
| Primary Color | `#6B9BD2` |
| Primary Text | `#E8E4DF` |

---

[Unreleased]: https://github.com/ha-community/ha-neumorphic-cardmod-theme/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ha-community/ha-neumorphic-cardmod-theme/releases/tag/v1.0.0
