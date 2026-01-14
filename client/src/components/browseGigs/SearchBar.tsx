import { FiSearch } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search gigs..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border pl-10 pr-4 py-2 text-sm"
        />
      </div>
      <button
        onClick={onSearch}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
