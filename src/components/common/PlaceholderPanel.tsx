type PlaceholderPanelProps = {
  description: string;
  eyebrow: string;
  title: string;
};

export function PlaceholderPanel({
  description,
  eyebrow,
  title,
}: PlaceholderPanelProps) {
  return (
    <article className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        {description}
      </p>
      <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        Placeholder funcional. La siguiente etapa conecta formularios,
        validacion, persistencia SQLite y calculos del dominio.
      </div>
    </article>
  );
}
