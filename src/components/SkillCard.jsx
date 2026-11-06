import { useState } from "react";
import {
  Code2,
  Database,
  Network,
  BrainCircuit,
  Container,
  ChartNoAxesCombined,
  Cloud,
} from "lucide-react";

import { skillIcons } from "../data/skillIcons";

const fallbackIcons = {
  SQL: Database,
  "RESTful API": Network,
  Seaborn: ChartNoAxesCombined,
  NLTK: BrainCircuit,
  "Docker Compose": Container,
  AWS: Cloud,
};

export default function SkillCard({ name }) {
  const [imageError, setImageError] = useState(false);

  const iconUrl = skillIcons[name];
  const FallbackIcon = fallbackIcons[name] || Code2;

  return (
    <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-background px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50">

        {iconUrl && !imageError ? (
        <img
            src={iconUrl}
            alt=""
            loading="lazy"
            className="h-7 w-7 shrink-0 object-contain"
            onError={() => setImageError(true)}
        />
        ) : (
        <FallbackIcon
            size={28}
            strokeWidth={1.6}
            className="shrink-0 text-accent"
            aria-hidden="true"
        />
        )}

      <span className="text-sm font-medium text-primary">
        {name}
      </span>

    </div>
  );
}
