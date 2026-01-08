/**
 * Neumorphic Cards for Home Assistant
 * A collection of premium neumorphic-styled Lovelace cards
 * 
 * @version 1.0.0
 * @author Full Neumorphic Theme
 * @license MIT
 */

const CARD_VERSION = '1.0.0';

// Neumorphic CSS Styles
const neumorphicStyles = `
  :host {
    --neu-bg: var(--ha-card-background, var(--card-background-color, #e8eef3));
    --neu-shadow-light: rgba(255, 255, 255, 0.8);
    --neu-shadow-dark: rgba(163, 177, 198, 0.6);
    --neu-radius: 16px;
    --neu-primary: #3b82f6;
    --neu-success: #10b981;
    --neu-warning: #f59e0b;
    --neu-error: #ef4444;
    --neu-text: var(--primary-text-color, #1e3a5f);
    --neu-text-secondary: var(--secondary-text-color, #64748b);
  }

  /* Dark mode support */
  :host([dark-mode]), :host-context([data-theme="dark"]) {
    --neu-bg: #1a1f2e;
    --neu-shadow-light: rgba(45, 55, 72, 0.5);
    --neu-shadow-dark: rgba(0, 0, 0, 0.5);
    --neu-text: #e2e8f0;
    --neu-text-secondary: #94a3b8;
  }

  .neu-card {
    background: var(--neu-bg);
    border-radius: var(--neu-radius);
    box-shadow: 
      8px 8px 16px var(--neu-shadow-dark),
      -8px -8px 16px var(--neu-shadow-light);
    padding: 20px;
    transition: all 0.3s ease;
  }

  .neu-card:hover {
    box-shadow: 
      10px 10px 20px var(--neu-shadow-dark),
      -10px -10px 20px var(--neu-shadow-light);
  }

  .neu-card-inset {
    background: var(--neu-bg);
    border-radius: calc(var(--neu-radius) - 4px);
    box-shadow: 
      inset 4px 4px 8px var(--neu-shadow-dark),
      inset -4px -4px 8px var(--neu-shadow-light);
    padding: 16px;
  }

  .neu-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .neu-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 
      inset 3px 3px 6px var(--neu-shadow-dark),
      inset -3px -3px 6px var(--neu-shadow-light);
  }

  .neu-icon ha-icon {
    --mdc-icon-size: 22px;
    color: var(--neu-primary);
  }

  .neu-icon.active {
    background: linear-gradient(135deg, var(--neu-primary), #60a5fa);
    box-shadow: 
      4px 4px 8px var(--neu-shadow-dark),
      -4px -4px 8px var(--neu-shadow-light);
  }

  .neu-icon.active ha-icon {
    color: white;
  }

  .neu-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--neu-text);
    margin: 0;
  }

  .neu-subtitle {
    font-size: 13px;
    color: var(--neu-text-secondary);
    margin: 0;
  }

  .neu-value {
    font-size: 42px;
    font-weight: 700;
    color: var(--neu-text);
    text-align: center;
  }

  .neu-unit {
    font-size: 18px;
    font-weight: 400;
    color: var(--neu-text-secondary);
  }

  .neu-button {
    background: var(--neu-bg);
    border: none;
    border-radius: 12px;
    padding: 12px 20px;
    cursor: pointer;
    box-shadow: 
      4px 4px 8px var(--neu-shadow-dark),
      -4px -4px 8px var(--neu-shadow-light);
    color: var(--neu-text);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .neu-button:hover {
    box-shadow: 
      6px 6px 12px var(--neu-shadow-dark),
      -6px -6px 12px var(--neu-shadow-light);
  }

  .neu-button:active {
    box-shadow: 
      inset 3px 3px 6px var(--neu-shadow-dark),
      inset -3px -3px 6px var(--neu-shadow-light);
  }

  .neu-button.primary {
    background: linear-gradient(135deg, var(--neu-primary), #60a5fa);
    color: white;
  }

  .neu-toggle {
    position: relative;
    width: 56px;
    height: 28px;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 
      inset 3px 3px 6px var(--neu-shadow-dark),
      inset -3px -3px 6px var(--neu-shadow-light);
    transition: all 0.3s ease;
  }

  .neu-toggle::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--neu-bg);
    box-shadow: 
      2px 2px 4px var(--neu-shadow-dark),
      -2px -2px 4px var(--neu-shadow-light);
    transition: all 0.3s ease;
  }

  .neu-toggle.on {
    background: linear-gradient(135deg, var(--neu-primary), #60a5fa);
  }

  .neu-toggle.on::after {
    left: 31px;
    background: white;
  }

  .neu-slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    box-shadow: 
      inset 2px 2px 4px var(--neu-shadow-dark),
      inset -2px -2px 4px var(--neu-shadow-light);
    position: relative;
    margin: 16px 0;
  }

  .neu-slider-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--neu-primary), #60a5fa);
  }

  .neu-slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--neu-bg);
    box-shadow: 
      3px 3px 6px var(--neu-shadow-dark),
      -3px -3px 6px var(--neu-shadow-light);
    cursor: pointer;
  }

  .neu-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 13px;
    color: var(--neu-text-secondary);
    box-shadow: 
      3px 3px 6px var(--neu-shadow-dark),
      -3px -3px 6px var(--neu-shadow-light);
  }

  .neu-chip ha-icon {
    --mdc-icon-size: 16px;
  }

  .neu-grid {
    display: grid;
    gap: 12px;
  }

  .neu-grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .neu-grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .neu-stat {
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 
      inset 2px 2px 4px var(--neu-shadow-dark),
      inset -2px -2px 4px var(--neu-shadow-light);
  }

  .neu-stat-label {
    font-size: 11px;
    color: var(--neu-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .neu-stat-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--neu-text);
  }

  .success { color: var(--neu-success) !important; }
  .warning { color: var(--neu-warning) !important; }
  .error { color: var(--neu-error) !important; }
`;

// Base Neumorphic Card Class
class NeumorphicBaseCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  getStyles() {
    return `<style>${neumorphicStyles}</style>`;
  }

  static getStubConfig() {
    return { entity: '' };
  }
}

// ========================================
// NEUMORPHIC LIGHT CARD
// ========================================
class NeumorphicLightCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const isOn = state.state === 'on';
    const brightness = state.attributes.brightness 
      ? Math.round((state.attributes.brightness / 255) * 100) 
      : 100;
    const name = this._config.name || state.attributes.friendly_name || entityId;

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="neu-card">
        <div class="neu-header">
          <div class="neu-icon ${isOn ? 'active' : ''}">
            <ha-icon icon="mdi:lightbulb${isOn ? '' : '-outline'}"></ha-icon>
          </div>
          <div>
            <h3 class="neu-title">${name}</h3>
            <p class="neu-subtitle">${isOn ? `${brightness}% Brightness` : 'Off'}</p>
          </div>
          <div style="margin-left: auto;">
            <div class="neu-toggle ${isOn ? 'on' : ''}" id="toggle"></div>
          </div>
        </div>
        ${isOn ? `
          <div class="neu-card-inset">
            <div class="neu-slider">
              <div class="neu-slider-fill" style="width: ${brightness}%"></div>
              <div class="neu-slider-thumb" style="left: ${brightness}%"></div>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    this.shadowRoot.getElementById('toggle')?.addEventListener('click', () => {
      this._hass.callService('light', 'toggle', { entity_id: entityId });
    });
  }

  static getConfigElement() {
    return document.createElement('neumorphic-light-card-editor');
  }

  static getStubConfig() {
    return { entity: 'light.living_room' };
  }
}

// ========================================
// NEUMORPHIC CLIMATE CARD
// ========================================
class NeumorphicClimateCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const currentTemp = state.attributes.current_temperature || '--';
    const targetTemp = state.attributes.temperature || '--';
    const hvacMode = state.state;
    const humidity = state.attributes.current_humidity;
    const name = this._config.name || state.attributes.friendly_name || entityId;

    const modeIcons = {
      heat: 'mdi:fire',
      cool: 'mdi:snowflake',
      auto: 'mdi:autorenew',
      off: 'mdi:power',
      fan_only: 'mdi:fan',
      dry: 'mdi:water-percent'
    };

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="neu-card">
        <div class="neu-header">
          <div class="neu-icon ${hvacMode !== 'off' ? 'active' : ''}">
            <ha-icon icon="mdi:thermometer"></ha-icon>
          </div>
          <div>
            <h3 class="neu-title">${name}</h3>
            <p class="neu-subtitle">Current: ${currentTemp}°</p>
          </div>
        </div>
        
        <div class="neu-card-inset" style="text-align: center; margin-bottom: 16px;">
          <div class="neu-value">${targetTemp}<span class="neu-unit">°</span></div>
          <p class="neu-subtitle">Target Temperature</p>
        </div>

        <div class="neu-grid neu-grid-2" style="margin-bottom: 16px;">
          <button class="neu-button" id="temp-down">
            <ha-icon icon="mdi:minus"></ha-icon>
          </button>
          <button class="neu-button" id="temp-up">
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${humidity ? `<div class="neu-chip"><ha-icon icon="mdi:water-percent"></ha-icon>${humidity}%</div>` : ''}
          <div class="neu-chip"><ha-icon icon="${modeIcons[hvacMode] || 'mdi:help'}"></ha-icon>${hvacMode}</div>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById('temp-up')?.addEventListener('click', () => {
      const newTemp = (state.attributes.temperature || 20) + 0.5;
      this._hass.callService('climate', 'set_temperature', { 
        entity_id: entityId,
        temperature: newTemp
      });
    });

    this.shadowRoot.getElementById('temp-down')?.addEventListener('click', () => {
      const newTemp = (state.attributes.temperature || 20) - 0.5;
      this._hass.callService('climate', 'set_temperature', { 
        entity_id: entityId,
        temperature: newTemp
      });
    });
  }

  static getStubConfig() {
    return { entity: 'climate.living_room' };
  }
}

// ========================================
// NEUMORPHIC SENSOR CARD
// ========================================
class NeumorphicSensorCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const value = state.state;
    const unit = state.attributes.unit_of_measurement || '';
    const name = this._config.name || state.attributes.friendly_name || entityId;
    const icon = this._config.icon || state.attributes.icon || 'mdi:eye';

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <div class="neu-card">
        <div class="neu-header">
          <div class="neu-icon active">
            <ha-icon icon="${icon}"></ha-icon>
          </div>
          <div>
            <h3 class="neu-title">${name}</h3>
          </div>
        </div>
        
        <div class="neu-card-inset" style="text-align: center;">
          <div class="neu-value">${value}<span class="neu-unit">${unit}</span></div>
        </div>
      </div>
    `;
  }

  static getStubConfig() {
    return { entity: 'sensor.temperature' };
  }
}

// ========================================
// NEUMORPHIC BUTTON CARD
// ========================================
class NeumorphicButtonCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const isOn = ['on', 'home', 'playing'].includes(state.state);
    const name = this._config.name || state.attributes.friendly_name || entityId;
    const icon = this._config.icon || state.attributes.icon || 'mdi:power';
    const tapAction = this._config.tap_action || 'toggle';

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <style>
        .neu-button-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          cursor: pointer;
          min-height: 100px;
        }
        .neu-button-card:active {
          box-shadow: 
            inset 4px 4px 8px var(--neu-shadow-dark),
            inset -4px -4px 8px var(--neu-shadow-light);
        }
        .neu-button-card.active {
          background: linear-gradient(135deg, var(--neu-primary), #60a5fa);
        }
        .neu-button-card.active ha-icon,
        .neu-button-card.active .neu-title {
          color: white !important;
        }
      </style>
      <div class="neu-card neu-button-card ${isOn ? 'active' : ''}" id="button">
        <ha-icon icon="${icon}" style="--mdc-icon-size: 32px; color: var(--neu-primary); margin-bottom: 12px;"></ha-icon>
        <h3 class="neu-title" style="font-size: 14px;">${name}</h3>
      </div>
    `;

    this.shadowRoot.getElementById('button')?.addEventListener('click', () => {
      const domain = entityId.split('.')[0];
      
      if (tapAction === 'toggle') {
        this._hass.callService(domain, 'toggle', { entity_id: entityId });
      } else if (tapAction === 'turn_on') {
        this._hass.callService(domain, 'turn_on', { entity_id: entityId });
      } else if (tapAction === 'turn_off') {
        this._hass.callService(domain, 'turn_off', { entity_id: entityId });
      }
    });
  }

  static getStubConfig() {
    return { entity: 'switch.example', icon: 'mdi:power' };
  }
}

// ========================================
// NEUMORPHIC MEDIA PLAYER CARD
// ========================================
class NeumorphicMediaCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const isPlaying = state.state === 'playing';
    const isPaused = state.state === 'paused';
    const title = state.attributes.media_title || 'No media';
    const artist = state.attributes.media_artist || '';
    const volume = state.attributes.volume_level ? Math.round(state.attributes.volume_level * 100) : 0;
    const name = this._config.name || state.attributes.friendly_name || entityId;

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <style>
        .media-controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 16px 0;
        }
        .control-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .control-btn.play {
          width: 56px;
          height: 56px;
        }
        .media-info {
          text-align: center;
          margin-bottom: 16px;
        }
        .media-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--neu-text);
          margin: 0;
        }
        .media-artist {
          font-size: 13px;
          color: var(--neu-text-secondary);
          margin: 4px 0 0;
        }
      </style>
      <div class="neu-card">
        <div class="neu-header">
          <div class="neu-icon ${isPlaying ? 'active' : ''}">
            <ha-icon icon="mdi:music"></ha-icon>
          </div>
          <div>
            <h3 class="neu-title">${name}</h3>
            <p class="neu-subtitle">${state.state}</p>
          </div>
        </div>

        <div class="media-info">
          <p class="media-title">${title}</p>
          ${artist ? `<p class="media-artist">${artist}</p>` : ''}
        </div>

        <div class="media-controls">
          <button class="neu-button control-btn" id="prev">
            <ha-icon icon="mdi:skip-previous"></ha-icon>
          </button>
          <button class="neu-button control-btn play ${isPlaying ? 'primary' : ''}" id="play">
            <ha-icon icon="mdi:${isPlaying ? 'pause' : 'play'}"></ha-icon>
          </button>
          <button class="neu-button control-btn" id="next">
            <ha-icon icon="mdi:skip-next"></ha-icon>
          </button>
        </div>

        <div class="neu-card-inset">
          <div style="display: flex; align-items: center; gap: 12px;">
            <ha-icon icon="mdi:volume-${volume === 0 ? 'off' : volume < 50 ? 'medium' : 'high'}" style="color: var(--neu-text-secondary);"></ha-icon>
            <div class="neu-slider" style="flex: 1;">
              <div class="neu-slider-fill" style="width: ${volume}%"></div>
              <div class="neu-slider-thumb" style="left: ${volume}%"></div>
            </div>
            <span style="font-size: 13px; color: var(--neu-text-secondary); min-width: 35px;">${volume}%</span>
          </div>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById('play')?.addEventListener('click', () => {
      this._hass.callService('media_player', 'media_play_pause', { entity_id: entityId });
    });

    this.shadowRoot.getElementById('prev')?.addEventListener('click', () => {
      this._hass.callService('media_player', 'media_previous_track', { entity_id: entityId });
    });

    this.shadowRoot.getElementById('next')?.addEventListener('click', () => {
      this._hass.callService('media_player', 'media_next_track', { entity_id: entityId });
    });
  }

  static getStubConfig() {
    return { entity: 'media_player.living_room' };
  }
}

// ========================================
// NEUMORPHIC FAN CARD
// ========================================
class NeumorphicFanCard extends NeumorphicBaseCard {
  render() {
    if (!this._hass || !this._config) return;

    const entityId = this._config.entity;
    const state = this._hass.states[entityId];
    
    if (!state) {
      this.shadowRoot.innerHTML = `${this.getStyles()}<div class="neu-card">Entity not found: ${entityId}</div>`;
      return;
    }

    const isOn = state.state === 'on';
    const speed = state.attributes.percentage || 0;
    const name = this._config.name || state.attributes.friendly_name || entityId;
    const presets = state.attributes.preset_modes || [];

    this.shadowRoot.innerHTML = `
      ${this.getStyles()}
      <style>
        .fan-icon {
          transition: transform 1s linear;
        }
        .fan-icon.spinning {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .speed-buttons {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 16px;
        }
        .speed-btn {
          padding: 8px 16px;
          font-size: 12px;
        }
        .speed-btn.active {
          background: linear-gradient(135deg, var(--neu-primary), #60a5fa);
          color: white;
        }
      </style>
      <div class="neu-card">
        <div class="neu-header">
          <div class="neu-icon ${isOn ? 'active' : ''}">
            <ha-icon icon="mdi:fan" class="fan-icon ${isOn ? 'spinning' : ''}"></ha-icon>
          </div>
          <div>
            <h3 class="neu-title">${name}</h3>
            <p class="neu-subtitle">${isOn ? `${speed}% Speed` : 'Off'}</p>
          </div>
          <div style="margin-left: auto;">
            <div class="neu-toggle ${isOn ? 'on' : ''}" id="toggle"></div>
          </div>
        </div>

        ${isOn ? `
          <div class="neu-card-inset">
            <div class="neu-slider">
              <div class="neu-slider-fill" style="width: ${speed}%"></div>
              <div class="neu-slider-thumb" style="left: ${speed}%"></div>
            </div>
          </div>
          
          <div class="speed-buttons">
            <button class="neu-button speed-btn ${speed <= 33 ? 'active' : ''}" id="low">Low</button>
            <button class="neu-button speed-btn ${speed > 33 && speed <= 66 ? 'active' : ''}" id="medium">Medium</button>
            <button class="neu-button speed-btn ${speed > 66 ? 'active' : ''}" id="high">High</button>
          </div>
        ` : ''}
      </div>
    `;

    this.shadowRoot.getElementById('toggle')?.addEventListener('click', () => {
      this._hass.callService('fan', 'toggle', { entity_id: entityId });
    });

    ['low', 'medium', 'high'].forEach((level, i) => {
      this.shadowRoot.getElementById(level)?.addEventListener('click', () => {
        const percentage = (i + 1) * 33;
        this._hass.callService('fan', 'set_percentage', { 
          entity_id: entityId, 
          percentage: Math.min(percentage, 100)
        });
      });
    });
  }

  static getStubConfig() {
    return { entity: 'fan.bedroom' };
  }
}

// Register all cards
customElements.define('neumorphic-light-card', NeumorphicLightCard);
customElements.define('neumorphic-climate-card', NeumorphicClimateCard);
customElements.define('neumorphic-sensor-card', NeumorphicSensorCard);
customElements.define('neumorphic-button-card', NeumorphicButtonCard);
customElements.define('neumorphic-media-card', NeumorphicMediaCard);
customElements.define('neumorphic-fan-card', NeumorphicFanCard);

// Register cards in Lovelace
window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: 'neumorphic-light-card',
    name: 'Neumorphic Light Card',
    description: 'A beautiful neumorphic card for controlling lights',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  },
  {
    type: 'neumorphic-climate-card',
    name: 'Neumorphic Climate Card',
    description: 'A beautiful neumorphic card for climate control',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  },
  {
    type: 'neumorphic-sensor-card',
    name: 'Neumorphic Sensor Card',
    description: 'A beautiful neumorphic card for displaying sensor data',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  },
  {
    type: 'neumorphic-button-card',
    name: 'Neumorphic Button Card',
    description: 'A beautiful neumorphic button card',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  },
  {
    type: 'neumorphic-media-card',
    name: 'Neumorphic Media Card',
    description: 'A beautiful neumorphic card for media players',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  },
  {
    type: 'neumorphic-fan-card',
    name: 'Neumorphic Fan Card',
    description: 'A beautiful neumorphic card for fan control',
    preview: true,
    documentationURL: 'https://github.com/ha-community/neumorphic-cards'
  }
);

console.info(
  `%c NEUMORPHIC-CARDS %c ${CARD_VERSION} `,
  'color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;',
  'color: #3b82f6; background: #e8eef3; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;'
);
