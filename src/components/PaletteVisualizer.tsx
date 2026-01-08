import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Palette, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface ColorSwatch {
  name: string;
  cssVar: string;
  lightValue: string;
  darkValue: string;
  description: string;
  category: "surface" | "text" | "accent" | "shadow" | "state";
}

const colors: ColorSwatch[] = [
  // Surfaces
  { name: "Base Surface", cssVar: "--neumorphic-base", lightValue: "hsl(214, 20%, 91%)", darkValue: "hsl(240, 4%, 16%)", description: "Primary background", category: "surface" },
  { name: "Raised Surface", cssVar: "--neumorphic-raised", lightValue: "hsl(214, 20%, 91%)", darkValue: "hsl(240, 4%, 20%)", description: "Elevated elements", category: "surface" },
  { name: "Inset Surface", cssVar: "--neumorphic-inset", lightValue: "hsl(214, 25%, 85%)", darkValue: "hsl(240, 4%, 12%)", description: "Pressed/inset areas", category: "surface" },
  
  // Text
  { name: "Primary Text", cssVar: "--text-primary", lightValue: "hsl(230, 25%, 18%)", darkValue: "hsl(40, 10%, 90%)", description: "Main text color", category: "text" },
  { name: "Secondary Text", cssVar: "--text-secondary", lightValue: "hsl(230, 15%, 40%)", darkValue: "hsl(40, 5%, 65%)", description: "Subdued text", category: "text" },
  { name: "Muted Text", cssVar: "--text-muted", lightValue: "hsl(230, 10%, 60%)", darkValue: "hsl(40, 3%, 45%)", description: "Disabled/hint text", category: "text" },
  
  // Accents
  { name: "Primary Accent", cssVar: "--accent-primary", lightValue: "hsl(216, 45%, 47%)", darkValue: "hsl(213, 55%, 62%)", description: "Main brand color", category: "accent" },
  { name: "Primary Light", cssVar: "--accent-primary-light", lightValue: "hsl(216, 50%, 65%)", darkValue: "hsl(213, 60%, 75%)", description: "Lighter accent", category: "accent" },
  { name: "Warm Accent", cssVar: "--accent-warm", lightValue: "hsl(28, 50%, 64%)", darkValue: "hsl(25, 60%, 72%)", description: "Warm highlight", category: "accent" },
  
  // States
  { name: "Success", cssVar: "--accent-success", lightValue: "hsl(145, 40%, 46%)", darkValue: "hsl(145, 50%, 55%)", description: "Positive states", category: "state" },
  { name: "Warning", cssVar: "--accent-warning", lightValue: "hsl(28, 55%, 64%)", darkValue: "hsl(25, 65%, 72%)", description: "Caution states", category: "state" },
  { name: "Error", cssVar: "--accent-error", lightValue: "hsl(0, 55%, 57%)", darkValue: "hsl(0, 60%, 65%)", description: "Error states", category: "state" },
  
  // Shadows
  { name: "Shadow Light", cssVar: "--shadow-light", lightValue: "hsl(0, 0%, 100%)", darkValue: "hsl(240, 4%, 22%)", description: "Light shadow edge", category: "shadow" },
  { name: "Shadow Dark", cssVar: "--shadow-dark", lightValue: "hsl(214, 20%, 71%)", darkValue: "hsl(240, 6%, 6%)", description: "Dark shadow edge", category: "shadow" },
];

const categories = [
  { id: "surface", label: "Surfaces", icon: "🎨" },
  { id: "text", label: "Text", icon: "📝" },
  { id: "accent", label: "Accents", icon: "✨" },
  { id: "state", label: "States", icon: "🚦" },
  { id: "shadow", label: "Shadows", icon: "🌑" },
];

const PaletteVisualizer = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const parseHsl = (hslString: string) => {
    const match = hslString.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (match) {
      return { h: parseInt(match[1]), s: parseInt(match[2]), l: parseInt(match[3]) };
    }
    return { h: 0, s: 0, l: 0 };
  };

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const filteredColors = activeCategory 
    ? colors.filter(c => c.category === activeCategory)
    : colors;

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge className="badge-neumorphic mb-4 gap-2">
          <Palette className="w-4 h-4" />
          Color Palette
        </Badge>
        <h3 className="text-3xl font-display font-bold text-primary-text mb-3">
          Цветовая палитра
        </h3>
        <p className="text-secondary-text max-w-xl mx-auto">
          Все цвета темы с CSS-переменными и HEX-кодами
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {/* Theme Toggle */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-neumorphic-inset">
          <Sun className="w-4 h-4 text-secondary-text" />
          <Switch checked={isDark} onCheckedChange={setIsDark} />
          <Moon className="w-4 h-4 text-secondary-text" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-neumorphic-base shadow-neumorphic-convex-sm hover:shadow-neumorphic-convex text-secondary-text'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neumorphic-base shadow-neumorphic-convex-sm hover:shadow-neumorphic-convex text-secondary-text'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredColors.map((color) => {
          const currentValue = isDark ? color.darkValue : color.lightValue;
          const { h, s, l } = parseHsl(currentValue);
          const hexValue = hslToHex(h, s, l);
          const isLight = l > 60;

          return (
            <div
              key={color.name}
              className="rounded-2xl overflow-hidden shadow-neumorphic-convex-sm hover:shadow-neumorphic-convex transition-all group"
            >
              {/* Color Swatch */}
              <div
                className="h-24 relative flex items-end p-3"
                style={{ backgroundColor: currentValue }}
              >
                <span 
                  className={`text-sm font-semibold ${isLight ? 'text-gray-800' : 'text-white'}`}
                >
                  {color.name}
                </span>
                
                {/* Copy Buttons */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleCopy(color.cssVar, `${color.name}-var`)}
                    className={`p-1.5 rounded-lg text-xs ${
                      isLight ? 'bg-black/20 text-gray-800 hover:bg-black/30' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    title="Copy CSS Variable"
                  >
                    {copiedColor === `${color.name}-var` ? <Check className="w-3 h-3" /> : "VAR"}
                  </button>
                  <button
                    onClick={() => handleCopy(hexValue, `${color.name}-hex`)}
                    className={`p-1.5 rounded-lg text-xs ${
                      isLight ? 'bg-black/20 text-gray-800 hover:bg-black/30' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    title="Copy HEX"
                  >
                    {copiedColor === `${color.name}-hex` ? <Check className="w-3 h-3" /> : "HEX"}
                  </button>
                  <button
                    onClick={() => handleCopy(currentValue, `${color.name}-hsl`)}
                    className={`p-1.5 rounded-lg text-xs ${
                      isLight ? 'bg-black/20 text-gray-800 hover:bg-black/30' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    title="Copy HSL"
                  >
                    {copiedColor === `${color.name}-hsl` ? <Check className="w-3 h-3" /> : "HSL"}
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 bg-neumorphic-base">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-xs text-primary font-mono">{color.cssVar}</code>
                  <button
                    onClick={() => handleCopy(color.cssVar, color.name)}
                    className="p-1 hover:bg-neumorphic-inset rounded"
                  >
                    {copiedColor === color.name ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3 text-secondary-text" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-secondary-text mb-2">{color.description}</p>
                <div className="flex gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-neumorphic-inset text-secondary-text">
                    {hexValue}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-neumorphic-inset text-secondary-text">
                    {h}° {s}% {l}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Shadow Examples */}
      <div className="mt-12">
        <h4 className="text-xl font-display font-semibold text-primary-text mb-6 text-center">
          Shadow Styles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Convex", cssVar: "--shadow-convex", description: "Raised elements" },
            { name: "Convex SM", cssVar: "--shadow-convex-sm", description: "Subtle raised" },
            { name: "Concave", cssVar: "--shadow-concave", description: "Pressed elements" },
            { name: "Concave SM", cssVar: "--shadow-concave-sm", description: "Subtle pressed" },
          ].map((shadow) => (
            <div
              key={shadow.name}
              className="p-6 rounded-2xl bg-neumorphic-base text-center group cursor-pointer"
              style={{ 
                boxShadow: shadow.cssVar.includes('concave') 
                  ? `var(${shadow.cssVar})` 
                  : `var(${shadow.cssVar})`
              }}
              onClick={() => handleCopy(`var(${shadow.cssVar})`, shadow.name)}
            >
              <div className="font-medium text-primary-text mb-1">{shadow.name}</div>
              <code className="text-xs text-primary font-mono block mb-2">{shadow.cssVar}</code>
              <p className="text-xs text-secondary-text">{shadow.description}</p>
              {copiedColor === shadow.name && (
                <div className="text-xs text-green-500 mt-2">Copied!</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaletteVisualizer;
