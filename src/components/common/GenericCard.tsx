type Props<T> = {
  item: T;
  title: string;
  subtitle: string;
  onSelect: (item: T) => void;
  extra?: React.ReactNode;
};

export const GenericCard = <T,>({ item, title, subtitle, onSelect, extra }: Props<T>) => (
  <div className="flex justify-between items-center gap-4 px-5 py-6 rounded-lg bg-white border-b border-border first:border-t">
    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
      <h2 className="text-lg font-semibold text-text-default line-clamp-2 flex items-center gap-4">
        <span className="line-clamp-1" title={title}>
          {title}
        </span>
        {extra}
      </h2>

      <p className="text-sm text-text-description">{subtitle}</p>
    </div>
    <button
      onClick={() => onSelect(item)}
      className="shrink-0 bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary-hover transition"
    >
      선택
    </button>
  </div>
);
