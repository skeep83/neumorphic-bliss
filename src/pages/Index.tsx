import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Thermometer, 
  Home, 
  Sun, 
  Moon, 
  Power, 
  Droplets,
  Wind,
  Zap,
  Download,
  Github,
  Copy,
  Check
} from "lucide-react";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [thermoValue, setThermoValue] = useState([22]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://github.com/YOUR_USERNAME/ha-full-neumorphic-theme");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="header-neumorphic">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="icon-container-raised">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-xl font-display font-semibold text-primary-text">Full Neumorphic Theme</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary-text">Preview Mode</span>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Badge className="badge-neumorphic mb-4">Home Assistant Theme</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-text mb-4">
            Premium Neumorphic Design
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto mb-8">
            A complete, production-ready theme for Home Assistant with soft 3D shadows, 
            premium typography, and full light/dark mode support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-neumorphic-primary">
              <Download className="w-4 h-4 mr-2" />
              Install via HACS
            </Button>
            <Button className="btn-neumorphic-secondary">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Live Preview Cards */}
        <section className="mb-12">
          <h3 className="text-2xl font-display font-semibold text-primary-text mb-6 text-center">
            Live Theme Preview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Light Control Card */}
            <Card className="card-neumorphic">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
                  <div className={`icon-container-inset ${lightOn ? 'icon-active' : ''}`}>
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  Living Room
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary-text">Ceiling Light</span>
                  <Switch 
                    checked={lightOn} 
                    onCheckedChange={setLightOn}
                    className="switch-neumorphic"
                  />
                </div>
                <div className="slider-container">
                  <Slider 
                    value={[80]} 
                    max={100} 
                    step={1}
                    className="slider-neumorphic"
                    disabled={!lightOn}
                  />
                  <span className="text-sm text-secondary-text mt-2 block">Brightness: 80%</span>
                </div>
              </CardContent>
            </Card>

            {/* Thermostat Card */}
            <Card className="card-neumorphic">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
                  <div className="icon-container-inset icon-warning">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  Climate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className="text-4xl font-display font-bold text-primary-text">{thermoValue[0]}°</span>
                  <span className="text-secondary-text block text-sm">Target Temperature</span>
                </div>
                <Slider 
                  value={thermoValue} 
                  onValueChange={setThermoValue}
                  min={16}
                  max={30}
                  step={0.5}
                  className="slider-neumorphic"
                />
                <div className="flex justify-between mt-4">
                  <Badge className="chip-neumorphic">
                    <Droplets className="w-3 h-3 mr-1" /> 45%
                  </Badge>
                  <Badge className="chip-neumorphic">
                    <Wind className="w-3 h-3 mr-1" /> Auto
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Power Usage Card */}
            <Card className="card-neumorphic">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
                  <div className="icon-container-inset icon-success">
                    <Zap className="w-5 h-5" />
                  </div>
                  Energy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className="text-4xl font-display font-bold text-primary-text">3.2</span>
                  <span className="text-secondary-text text-lg"> kWh</span>
                  <span className="text-secondary-text block text-sm">Today's Usage</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="stat-chip">
                    <span className="text-xs text-secondary-text">Peak</span>
                    <span className="text-sm font-medium text-primary-text">1.8 kW</span>
                  </div>
                  <div className="stat-chip">
                    <span className="text-xs text-secondary-text">Avg</span>
                    <span className="text-sm font-medium text-primary-text">0.9 kW</span>
                  </div>
                  <div className="stat-chip">
                    <span className="text-xs text-secondary-text">Cost</span>
                    <span className="text-sm font-medium text-success-text">$0.48</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h3 className="text-2xl font-display font-semibold text-primary-text mb-6 text-center">
            Interactive Controls
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="action-button">
              <Power className="w-5 h-5" />
              <span>All Off</span>
            </button>
            <button className="action-button active">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button className="action-button">
              <Moon className="w-5 h-5" />
              <span>Night</span>
            </button>
            <button className="action-button">
              <Sun className="w-5 h-5" />
              <span>Morning</span>
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-display font-semibold text-primary-text mb-6 text-center">
            Theme Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🎨", title: "Dual Mode", desc: "Light & Dark themes" },
              { icon: "🌊", title: "Soft Shadows", desc: "True neumorphic 3D" },
              { icon: "📝", title: "Typography", desc: "Premium font system" },
              { icon: "🔌", title: "Card-Mod Ready", desc: "Deep customization" },
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <span className="text-3xl mb-2">{feature.icon}</span>
                <h4 className="font-medium text-primary-text">{feature.title}</h4>
                <p className="text-sm text-secondary-text">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <Card className="card-neumorphic-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary-text mb-4 text-center">
                Quick Installation
              </h3>
              <div className="code-block">
                <code className="text-sm">
                  1. Open HACS → Frontend → Custom repositories<br />
                  2. Add: https://github.com/YOUR_USERNAME/ha-full-neumorphic-theme<br />
                  3. Select "Theme" → Download<br />
                  4. Restart Home Assistant<br />
                  5. Select "Full Neumorphic" in your profile
                </code>
              </div>
              <div className="flex justify-center mt-6">
                <Button onClick={handleCopy} className="btn-neumorphic-secondary">
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied!" : "Copy Repository URL"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* File Structure */}
        <section>
          <h3 className="text-2xl font-display font-semibold text-primary-text mb-6 text-center">
            Repository Structure
          </h3>
          <div className="code-block text-left max-w-xl mx-auto">
            <code className="text-sm font-mono">
              ha-full-neumorphic-theme/<br />
              ├── themes/<br />
              │   └── full_neumorphic.yaml<br />
              ├── snippets/<br />
              │   └── card-mod-neumorphic.yaml<br />
              ├── docs/<br />
              │   └── README.md<br />
              ├── hacs.json<br />
              └── CHANGELOG.md
            </code>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-neumorphic mt-12">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-secondary-text">
            Made with ❤️ for the Home Assistant Community
          </p>
          <p className="text-sm text-muted mt-2">
            MIT License • Free to use, modify, and share
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
