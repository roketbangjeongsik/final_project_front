type Props = {
  search: string;
  setSearch: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  sorts: { label: string; value: string }[];
  extraFilters?: React.ReactNode; // repo=language, file=type과 같은 추가 필터
};

export const ItemFilterBar = ({ search, setSearch, sort, setSort, sorts, extraFilters }: Props) => (
  <div className="flex flex-wrap items-center justify-between my-8 gap-4">
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="검색"
      className="border border-border rounded-lg focus:border-primary focus:outline-none px-4 py-2 w-full sm:w-1/3"
    />
    <div className="flex gap-2">
      {extraFilters}
      {sorts.length > 0 && (
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-border focus:border-primary focus:outline-none rounded-lg px-4 py-2"
        >
          {sorts.map(s => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      )}
    </div>
  </div>
);
