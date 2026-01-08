import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Copy, Check, Layers, Power, Volume2, Sun, Moon, 
  Wifi, Lock, Bell, Home, Heart, Star, Zap
} from "lucide-react";

interface ComponentDemo {
  name: string;
  description: string;
  yaml: string;
  component: React.ReactNode;
}

const ComponentGallery = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    switch1: true,
    switch2: false,
    switch3: true,
  });
  const [sliderValue, setSliderValue] = useState([75]);

  const handleCopy = (yaml: string, index: number) => {
    navigator.clipboard.writeText(yaml);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components: ComponentDemo[] = [
    {
      name: "Neumorphic Button (Primary)",
      description: "Основная кнопка с выпуклым эффектом",
      yaml: `type: custom:button-card
styles:
  card:
    - background: "var(--accent-primary)"
    - box-shadow: |
        4px 4px 8px var(--shadow-dark),
        -2px -2px 6px var(--shadow-light)
    - border-radius: "12px"
    - border: "none"
    - transition: "all 0.2s ease"
  card:hover:
    - transform: "translateY(-1px)"`,
      component: (
        <Button className="btn-neumorphic-primary">
          <Power className="w-4 h-4 mr-2" />
          Primary Action
        </Button>
      )
    },
    {
      name: "Neumorphic Button (Secondary)",
      description: "Вторичная кнопка с мягкой тенью",
      yaml: `type: custom:button-card
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex-sm)"
    - border-radius: "12px"
    - border: "none"
  card:active:
    - box-shadow: "var(--shadow-concave-sm)"`,
      component: (
        <Button className="btn-neumorphic-secondary">
          <Home className="w-4 h-4 mr-2" />
          Secondary
        </Button>
      )
    },
    {
      name: "Toggle Switch",
      description: "Переключатель с вдавленным треком",
      yaml: `type: custom:button-card
show_state: true
styles:
  card:
    - background: "var(--neumorphic-inset)"
    - box-shadow: "var(--shadow-concave-sm)"
    - border-radius: "20px"`,
      component: (
        <div className="flex items-center gap-4">
          <Switch 
            checked={toggleStates.switch1} 
            onCheckedChange={(v) => setToggleStates(prev => ({...prev, switch1: v}))}
            className="switch-neumorphic"
          />
          <span className="text-sm text-secondary-text">
            {toggleStates.switch1 ? "On" : "Off"}
          </span>
        </div>
      )
    },
    {
      name: "Brightness Slider",
      description: "Слайдер яркости с инсетной дорожкой",
      yaml: `type: custom:slider-entity-row
entity: light.living_room
styles:
  track:
    - background: "var(--neumorphic-inset)"
    - box-shadow: "var(--shadow-concave-sm)"
  thumb:
    - background: "var(--accent-primary)"
    - box-shadow: "var(--shadow-convex-sm)"`,
      component: (
        <div className="w-full space-y-2">
          <div className="flex items-center gap-3">
            <Sun className="w-4 h-4 text-secondary-text" />
            <Slider 
              value={sliderValue} 
              onValueChange={setSliderValue}
              max={100}
              className="slider-neumorphic flex-1"
            />
            <span className="text-sm font-mono text-primary-text w-10">
              {sliderValue[0]}%
            </span>
          </div>
        </div>
      )
    },
    {
      name: "Icon Button (Raised)",
      description: "Выпуклая иконка-кнопка",
      yaml: `type: custom:button-card
icon: mdi:power
styles:
  card:
    - width: "44px"
    - height: "44px"
    - border-radius: "12px"
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex-sm)"`,
      component: (
        <div className="flex gap-3">
          {[Power, Volume2, Wifi, Lock].map((Icon, i) => (
            <button key={i} className="icon-container-raised hover:scale-105 transition-transform">
              <Icon className="w-5 h-5 text-primary" />
            </button>
          ))}
        </div>
      )
    },
    {
      name: "Icon Button (Inset)",
      description: "Вдавленная иконка с индикацией состояния",
      yaml: `type: custom:button-card
icon: mdi:lightbulb
state:
  - value: "on"
    styles:
      card:
        - box-shadow: "var(--shadow-concave-sm)"
        - color: "var(--accent-primary)"`,
      component: (
        <div className="flex gap-3">
          <div className="icon-container-inset icon-active">
            <Sun className="w-5 h-5" />
          </div>
          <div className="icon-container-inset icon-warning">
            <Bell className="w-5 h-5" />
          </div>
          <div className="icon-container-inset icon-success">
            <Zap className="w-5 h-5" />
          </div>
          <div className="icon-container-inset">
            <Moon className="w-5 h-5" />
          </div>
        </div>
      )
    },
    {
      name: "Status Badge",
      description: "Выпуклый бейдж статуса",
      yaml: `type: custom:button-card
styles:
  card:
    - background: "var(--neumorphic-base)"
    - box-shadow: "var(--shadow-convex-sm)"
    - padding: "6px 14px"
    - border-radius: "20px"`,
      component: (
        <div className="flex flex-wrap gap-2">
          <Badge className="badge-neumorphic">Active</Badge>
          <Badge className="badge-neumorphic gap-1">
            <Wifi className="w-3 h-3" /> Connected
          </Badge>
          <Badge className="badge-neumorphic gap-1">
            <Lock className="w-3 h-3" /> Secured
          </Badge>
        </div>
      )
    },
    {
      name: "Chip / Tag",
      description: "Вдавленные чипы для информации",
      yaml: `type: custom:button-card
styles:
  card:
    - background: "var(--neumorphic-inset)"
    - box-shadow: "var(--shadow-concave-sm)"
    - padding: "4px 10px"
    - font-size: "0.75rem"`,
      component: (
        <div className="flex flex-wrap gap-2">
          <Badge className="chip-neumorphic">45% humidity</Badge>
          <Badge className="chip-neumorphic gap-1">
            <Heart className="w-3 h-3" /> 72 bpm
          </Badge>
          <Badge className="chip-neumorphic gap-1">
            <Star className="w-3 h-3" /> 4.8
          </Badge>
        </div>
      )
    },
    {
      name: "Action Buttons",
      description: "Группа кнопок быстрых действий",
      yaml: `type: horizontal-stack
cards:
  - type: custom:button-card
    icon: mdi:power-off
    name: "All Off"
    styles:
      card:
        - flex-direction: "column"
        - background: "var(--neumorphic-base)"
        - box-shadow: "var(--shadow-convex-sm)"
      card:active:
        - box-shadow: "var(--shadow-concave)"`,
      component: (
        <div className="flex flex-wrap gap-3">
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
        </div>
      )
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge className="badge-neumorphic mb-4 gap-2">
          <Layers className="w-4 h-4" />
          Component Gallery
        </Badge>
        <h3 className="text-3xl font-display font-bold text-primary-text mb-3">
          UI Компоненты
        </h3>
        <p className="text-secondary-text max-w-xl mx-auto">
          Готовые компоненты с примерами YAML-кода для card-mod
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((comp, index) => (
          <Card key={index} className="card-neumorphic group">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-medium text-primary-text flex items-center justify-between">
                {comp.name}
                <button
                  onClick={() => handleCopy(comp.yaml, index)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neumorphic-inset"
                  title="Копировать YAML"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-secondary-text" />
                  )}
                </button>
              </CardTitle>
              <p className="text-sm text-secondary-text">{comp.description}</p>
            </CardHeader>
            <CardContent>
              {/* Live Component */}
              <div className="mb-4 p-4 rounded-xl bg-neumorphic-inset flex items-center justify-center min-h-[80px]">
                {comp.component}
              </div>
              
              {/* YAML Preview */}
              <div className="code-block text-xs max-h-32 overflow-y-auto">
                <code className="whitespace-pre-wrap">{comp.yaml}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ComponentGallery;
