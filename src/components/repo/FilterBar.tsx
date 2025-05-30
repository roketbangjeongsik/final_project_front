type Props = {
  search: string;
  setSearch: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  languages: string[];
};

export const FilterBar = ({
  search,
  setSearch,
  language,
  setLanguage,
  sort,
  setSort,
  languages,
}: Props) => {
  const sorts = [
    { label: '이름순', value: 'Name' },
    { label: '최신순', value: 'updated_at' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between my-8 gap-4">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Find a repository"
        className="border border-border rounded-lg focus:border-primary focus:outline-none px-4 py-2 w-full sm:w-1/3"
      />
      <div className="flex gap-2">
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="border border-border focus:border-primary focus:outline-none rounded-lg px-4 py-2"
        >
          <option value="All">모든 언어</option>
          {languages.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-border focus:border-primary focus:outline-none rounded-lg px-4 py-2"
        >
          {sorts.map(s => (
            <option key={s.value} value={s.value}>
              {s.label === 'updated_at' ? 'Updated' : s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
