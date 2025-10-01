import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    const term = search.trim();
    if (!term) return;

    if (!history.includes(term)) {
      setHistory([term, ...history]);
    }
    onSearch(term);
    setShowHistory(false);
    // setSearch('');
  }

  const handleDelete = (item) => {
    setHistory(history.filter((term) => term !== item));
  };

  return (
    <div className="flex flex-col items-center mt-6 relative w-full">
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="w-80 px-4 py-2 rounded-l-full border border-gray-300    caret-blue-500 focus:outline-none bg-white"
          type="text"
          placeholder="Search for news..."
          value={search}
          onChange={(e) => {setSearch(e.target.value);
            setShowHistory(true);
          }}
          onFocus = {() => setShowHistory(true)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full font-bold"
        >
          Search
        </button>
      </form>
      {showHistory && history.length > 0 && (
        <div className="absolute top-full mt-2 w-100 bg-gray-50 rounded-lg shadow p-3 z-50">
          <ul className="space-y-2">
            {history.map((item) => (
              <li
                key={item}
                className="flex justify-between items-center bg-white px-3 py-2 rounded-md border-gray-500"
              >
                <span
                  className="cursor-pointer text-blue-600"
                  onClick={() =>{
                    setSearch(item);
                     onSearch(item);
                     setShowHistory(false);
                  }}
                >
                  {item}
                </span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 font-bold"
                  onClick={() => handleDelete(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

