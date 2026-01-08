import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Copy, Check, Smartphone, Lightbulb, Thermometer, 
  Music, Tv, Fan, Lock, Camera, Droplets, Wind,
  Play, Pause, SkipForward, SkipBack, Volume2, VolumeX,
  Power, Sun, CloudRain, Snowflake, Flame,
  BatteryCharging, Wifi, WifiOff
} from "lucide-react";

const DeviceCards = () => {
  const [copiedCard, setCopiedCard] = useState<string | null>(null);
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState([80]);
  const [temperature, setTemperature] = useState([22]);
  const [volume, setVolume] = useState([65]);
  const [fanSpeed, setFanSpeed] = useState([2]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hvacMode, setHvacMode] = useState<"heat" | "cool" | "auto">("auto");

  const handleCopy = (cardName: string, yaml: string) => {
    navigator.clipboard.writeText(yaml);
    setCopiedCard(cardName);
    setTimeout(() => setCopiedCard(null), 2000);
  };

  const CopyButton = ({ name, yaml }: { name: string; yaml: string }) => (
    <button
      onClick={() => handleCopy(name, yaml)}
      className="absolute top-3 right-3 p-2 rounded-lg bg-neumorphic-inset/50 hover:bg-neumorphic-inset transition-all opacity-0 group-hover:opacity-100"
      title="Копировать YAML"
    >
      {copiedCard === name ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-secondary-text" />
      )}
    </button>
  );

  const lightYaml = `type: custom:button-card
entity: light.living_room
name: Living Room
icon: mdi:ceiling-light
show_state: true
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex)"
    - border-radius: "var(--radius)"
  icon:
    - color: "[[[ return entity.state === 'on' ? 'var(--accent-primary)' : 'var(--text-secondary)' ]]]"
tap_action:
  action: toggle
hold_action:
  action: more-info`;

  const climateYaml = `type: custom:thermostat-card
entity: climate.living_room
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex)"
  controls:
    - background: "var(--neumorphic-inset)"
    - box-shadow: "var(--shadow-concave-sm)"
  temperature:
    - font-family: "var(--font-display)"
    - font-size: "3rem"`;

  const mediaYaml = `type: custom:mini-media-player
entity: media_player.living_room
artwork: cover
source: icon
sound_mode: icon
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex)"
  progress:
    - background: "var(--neumorphic-inset)"`;

  const fanYaml = `type: custom:button-card
entity: fan.bedroom
name: Ceiling Fan
variables:
  speeds: ["off", "low", "medium", "high"]
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex)"
  icon:
    - animation: "[[[ return entity.state === 'on' ? 'spin 2s linear infinite' : 'none' ]]]"`;

  const securityYaml = `type: custom:button-card
entity: alarm_control_panel.home
icon: mdi:shield-home
show_state: true
state:
  - value: "armed_home"
    color: "var(--accent-success)"
  - value: "armed_away"
    color: "var(--accent-warning)"
  - value: "disarmed"
    color: "var(--text-secondary)"`;

  const sensorYaml = `type: custom:button-card
entity: sensor.outdoor_temperature
show_state: true
show_name: true
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex-sm)"
  state:
    - font-size: "2rem"
    - font-family: "var(--font-display)"`;

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge className="badge-neumorphic mb-4 gap-2">
          <Smartphone className="w-4 h-4" />
          Device Cards
        </Badge>
        <h3 className="text-3xl font-display font-bold text-primary-text mb-3">
          Карточки устройств
        </h3>
        <p className="text-secondary-text max-w-xl mx-auto">
          Готовые карточки для освещения, климата, медиа и других устройств
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Light Control Card */}
        <Card className="card-neumorphic group relative">
          <CopyButton name="light" yaml={lightYaml} />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className={`icon-container-inset ${lightOn ? 'icon-active' : ''}`}>
                <Lightbulb className="w-5 h-5" />
              </div>
              Living Room
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-secondary-text">Ceiling Light</span>
              <Switch 
                checked={lightOn} 
                onCheckedChange={setLightOn}
                className="switch-neumorphic"
              />
            </div>
            {lightOn && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-secondary-text" />
                  <Slider 
                    value={brightness} 
                    onValueChange={setBrightness}
                    max={100}
                    className="slider-neumorphic flex-1"
                  />
                  <span className="text-sm font-mono text-primary-text w-10">
                    {brightness[0]}%
                  </span>
                </div>
                {/* Color Temperature */}
                <div className="flex gap-2 mt-3">
                  {["#FFE4B5", "#FFF5E1", "#FFFFFF", "#E0F0FF", "#CCE5FF"].map((color, i) => (
                    <button
                      key={i}
                      className="w-8 h-8 rounded-full shadow-md hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Climate Card */}
        <Card className="card-neumorphic group relative">
          <CopyButton name="climate" yaml={climateYaml} />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className="icon-container-inset icon-warning">
                <Thermometer className="w-5 h-5" />
              </div>
              Climate Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <span className="text-5xl font-display font-bold text-primary-text">
                {temperature[0]}°
              </span>
              <span className="text-secondary-text block text-sm mt-1">
                Target Temperature
              </span>
            </div>
            <Slider 
              value={temperature} 
              onValueChange={setTemperature}
              min={16}
              max={30}
              step={0.5}
              className="slider-neumorphic mb-4"
            />
            {/* HVAC Modes */}
            <div className="flex justify-center gap-2 mb-4">
              {[
                { mode: "heat" as const, icon: Flame, color: "text-orange-500" },
                { mode: "cool" as const, icon: Snowflake, color: "text-blue-500" },
                { mode: "auto" as const, icon: Wind, color: "text-primary" },
              ].map(({ mode, icon: Icon, color }) => (
                <button
                  key={mode}
                  onClick={() => setHvacMode(mode)}
                  className={`p-3 rounded-xl transition-all ${
                    hvacMode === mode 
                      ? 'bg-neumorphic-inset shadow-neumorphic-concave-sm' 
                      : 'bg-neumorphic-base shadow-neumorphic-convex-sm hover:shadow-neumorphic-convex'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${hvacMode === mode ? color : 'text-secondary-text'}`} />
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <Badge className="chip-neumorphic">
                <Droplets className="w-3 h-3 mr-1" /> 45%
              </Badge>
              <Badge className="chip-neumorphic">
                <Wind className="w-3 h-3 mr-1" /> {hvacMode}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Media Player Card */}
        <Card className="card-neumorphic group relative overflow-hidden">
          <CopyButton name="media" yaml={mediaYaml} />
          {/* Album Art Background */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400)',
              filter: 'blur(20px)'
            }}
          />
          <CardHeader className="pb-2 relative">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className="icon-container-inset icon-active">
                <Music className="w-5 h-5" />
              </div>
              Now Playing
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-xl shadow-lg bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200)'
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-primary-text truncate">
                  Bohemian Rhapsody
                </div>
                <div className="text-sm text-secondary-text truncate">
                  Queen
                </div>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="h-1.5 rounded-full bg-neumorphic-inset shadow-neumorphic-concave-sm overflow-hidden">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
              <div className="flex justify-between mt-1 text-xs text-secondary-text">
                <span>3:24</span>
                <span>5:55</span>
              </div>
            </div>
            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="p-2 text-secondary-text hover:text-primary-text transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 rounded-full bg-primary text-white shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button className="p-2 text-secondary-text hover:text-primary-text transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
            {/* Volume */}
            <div className="flex items-center gap-2 mt-4">
              <VolumeX className="w-4 h-4 text-secondary-text" />
              <Slider 
                value={volume} 
                onValueChange={setVolume}
                max={100}
                className="slider-neumorphic flex-1"
              />
              <Volume2 className="w-4 h-4 text-secondary-text" />
            </div>
          </CardContent>
        </Card>

        {/* Fan Control */}
        <Card className="card-neumorphic group relative">
          <CopyButton name="fan" yaml={fanYaml} />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className={`icon-container-inset ${fanSpeed[0] > 0 ? 'icon-active' : ''}`}>
                <Fan className={`w-5 h-5 ${fanSpeed[0] > 0 ? 'animate-spin' : ''}`} 
                  style={{ animationDuration: `${2 / fanSpeed[0]}s` }}
                />
              </div>
              Ceiling Fan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <span className="text-3xl font-display font-bold text-primary-text">
                {fanSpeed[0] === 0 ? "Off" : fanSpeed[0] === 1 ? "Low" : fanSpeed[0] === 2 ? "Medium" : "High"}
              </span>
            </div>
            <div className="flex justify-center gap-2 mb-4">
              {[0, 1, 2, 3].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setFanSpeed([speed])}
                  className={`w-12 h-12 rounded-xl font-medium transition-all ${
                    fanSpeed[0] === speed
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-neumorphic-base shadow-neumorphic-convex-sm hover:shadow-neumorphic-convex text-secondary-text'
                  }`}
                >
                  {speed === 0 ? <Power className="w-4 h-4 mx-auto" /> : speed}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Card */}
        <Card className="card-neumorphic group relative">
          <CopyButton name="security" yaml={securityYaml} />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className="icon-container-inset icon-success">
                <Lock className="w-5 h-5" />
              </div>
              Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <Badge className="badge-neumorphic text-green-600 gap-1 px-4 py-2">
                <Lock className="w-4 h-4" />
                Armed Home
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Camera, label: "Cameras", status: "4 online", online: true },
                { icon: Lock, label: "Doors", status: "All locked", online: true },
                { icon: Wifi, label: "Motion", status: "No activity", online: true },
                { icon: BatteryCharging, label: "Sensors", status: "100%", online: true },
              ].map((item, i) => (
                <div key={i} className="stat-chip flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.online ? 'text-green-500' : 'text-red-500'}`} />
                  <div className="text-left">
                    <div className="text-xs text-secondary-text">{item.label}</div>
                    <div className="text-sm font-medium text-primary-text">{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather/Sensor Card */}
        <Card className="card-neumorphic group relative">
          <CopyButton name="sensor" yaml={sensorYaml} />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className="icon-container-inset icon-active">
                <CloudRain className="w-5 h-5" />
              </div>
              Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-5xl font-display font-bold text-primary-text">18°</span>
                <span className="text-secondary-text block">Partly Cloudy</span>
              </div>
              <div className="text-6xl">⛅</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Droplets, label: "Humidity", value: "65%" },
                { icon: Wind, label: "Wind", value: "12 km/h" },
                { icon: Sun, label: "UV Index", value: "3" },
              ].map((item, i) => (
                <div key={i} className="stat-chip text-center">
                  <item.icon className="w-4 h-4 mx-auto mb-1 text-secondary-text" />
                  <div className="text-xs text-secondary-text">{item.label}</div>
                  <div className="text-sm font-medium text-primary-text">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeviceCards;
