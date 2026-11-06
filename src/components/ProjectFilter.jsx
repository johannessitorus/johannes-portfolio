
export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`rounded-md border px-5 py-2.5 font-mono text-xs transition-colors ${
              isActive
                ? "border-primary bg-primary text-background"
                : "border-white/15 bg-transparent text-accent hover:border-accent hover:text-primary"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
