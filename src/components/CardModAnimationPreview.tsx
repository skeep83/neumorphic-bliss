import { useCallback, useState, type ComponentType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sparkles, MousePointerClick, Waves, Hand, Zap, Layers } from "lucide-react";

type Demo = {
  key: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  className: string;
};

const demos: Demo[] = [
  {
    key: "shimmer",
    title: "Sky shimmer",
    description: "Плавное мерцание градиента",
    icon: Sparkles,
    className: "card-anim-shimmer",
  },
  {
    key: "pulse",
    title: "Pulse",
    description: "Лёгкое «дыхание» карточки",
    icon: Zap,
    className: "card-anim-pulse",
  },
  {
    key: "hover",
    title: "Hover lift",
    description: "Подъём при наведении/нажатии",
    icon: MousePointerClick,
    className: "card-anim-hover-lift",
  },
  {
    key: "wave",
    title: "Gradient wave",
    description: "Двигающаяся волна поверх",
    icon: Waves,
    className: "card-anim-wave",
  },
  {
    key: "press",
    title: "Soft press",
    description: "Эффект нажатия (tap/click)",
    icon: Hand,
    className: "card-anim-soft-press",
  },
  {
    key: "full",
    title: "Full interactive",
    description: "Комбо: shimmer + wave + press",
    icon: Layers,
    className: "card-anim-shimmer card-anim-wave card-anim-soft-press",
  },
];

export default function CardModAnimationPreview() {
  const [activeGlow, setActiveGlow] = useState(false);

  const toggleGlow = useCallback(() => setActiveGlow((v) => !v), []);

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-display font-semibold text-primary-text mb-2 text-center">
        Preview анимаций карточек
      </h3>
      <p className="text-sm text-secondary-text text-center mb-6">
        На desktop — наведите курсор. На mobile — нажмите на карточку.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => {
          const Icon = demo.icon;

          return (
            <Card key={demo.key} className={cn("card-neumorphic", demo.className)}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
                  <div className="icon-container-inset">
                    <Icon className="w-5 h-5" />
                  </div>
                  {demo.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-text text-sm">{demo.description}</p>
              </CardContent>
            </Card>
          );
        })}

        <Card
          className={cn(
            "card-neumorphic card-anim-glow",
            activeGlow && "is-active",
            "cursor-pointer select-none"
          )}
          role="button"
          tabIndex={0}
          aria-pressed={activeGlow}
          onClick={toggleGlow}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleGlow();
            }
          }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-primary-text flex items-center gap-2">
              <div className={cn("icon-container-inset", activeGlow && "icon-active")}>
                <Sparkles className="w-5 h-5" />
              </div>
              Glow on active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-text text-sm">
              Нажмите чтобы переключить: {activeGlow ? "ON" : "OFF"}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
