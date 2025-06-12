import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { id: 1, name: 'Library Stool Chair' },
    { id: 2, name: 'Wooden Chair' },
    { id: 3, name: 'Sofa Set' },
    { id: 4, name: 'Desk Chair' },
    { id: 5, name: 'Park Bench' }
  ];

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-[443px] mx-auto">
      <form className="h-[44px] relative">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-full bg-white text-black rounded-lg pl-4 pr-10 placeholder-gray-600"
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search size="22px" color="#272343" />
        </button>
      </form>

      {/* Render filtered items */}
      {searchTerm && (
        <div className="bg-white mt-2 rounded-lg shadow-md p-4 max-h-[200px] overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <p key={item.id} className="text-[#272343] text-base mb-2">
                {item.name}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
