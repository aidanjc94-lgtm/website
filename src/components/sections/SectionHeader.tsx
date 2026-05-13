type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  centred?: boolean;
};

export function SectionHeader({ eyebrow, title, intro, centred = false }: SectionHeaderProps) {
  return (
    <div className={centred ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.22em] text-fenland-red">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-fenland-dark sm:text-5xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg leading-8 text-fenland-dark/75">{intro}</p> : null}
    </div>
  );
}
