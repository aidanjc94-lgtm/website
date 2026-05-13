type ClubStatProps = {
  value: string;
  label: string;
};

export function ClubStat({ value, label }: ClubStatProps) {
  return (
    <div className="rounded-3xl border border-fenland-purple/10 bg-white/85 p-5 shadow-sm">
      <p className="text-3xl font-black text-fenland-purple">{value}</p>
      <p className="mt-1 text-sm font-semibold text-fenland-dark/75">{label}</p>
    </div>
  );
}
