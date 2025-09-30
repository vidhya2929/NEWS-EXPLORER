import {useState} from 'react';
export default function SearchBar({onSearch}){
  const [search, setSearch] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    if(!search.trim()) return;
    onSearch(search);  
    setSearch('');
    // console.log("button Clicked");
  }
  return(
    <div>
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-6">
    <input className="w-80 px-4 py-2 rounded-l-full border border-gray-300 caret-blue-500 focus:outline-none bg-white" type="text" placeholder="Search for news..." value={search} onChange={(e) => setSearch(e.target.value)}/>
    <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-full font-bold"
      >
        Search
        </button>
    </form>
    </div>
  )
}

