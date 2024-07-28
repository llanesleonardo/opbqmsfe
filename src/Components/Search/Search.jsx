import React,{useState,useEffect,useRef} from 'react'
import { Link ,useNavigate} from 'react-router-dom';


export default function Search({ setUrl}) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [data,setData] = useState({
    source: 'projects',
    items: [
      { id: '1', pname: 'P1', url: '/app/projects/project/1' },
      { id: '2', pname: 'P2', url: '/app/projects/project/2' },
      { id: '3', pname: 'P3', url: '/app/projects/project/3' }
    ]
  });
  const dropdownRef = useRef(null);


  // Handle search input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    searchArray(value);
  };

  

  // Search logic to filter array
  const searchArray = (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filteredResults = data.items.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === 'string' && val.toLowerCase().includes(lowerCaseQuery)
      )
    );
    console.log('filteredResults',filteredResults);
    setResults(filteredResults);
  };


  const handleClick = (url) => {
    console.log(url);
    setUrl(url);
    setSearchInput(''); // Clear search input
    setResults([]); // Clear results
    navigate(url);
  };


  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setResults([]);
    }
  };


  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full flex flex-row justify-center items-center flex-wrap relative'>
      <input 
        type='text'
        name='search'
        value={searchInput}
        onChange={handleInputChange}
        className='w-full mx-5 my-5 rounded py-1 px-1 focus:outline-none'
        placeholder='Search projects, processes, profiles, roles, users '
      />
      <div ref={dropdownRef} className=' overflow-y-scroll absolute px-2 left-5 top-10 mt-2  w-[90%] max-h-96 bg-white' >
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.id}>
              <button className='cursor' onClick={()=> handleClick(result.url)}>{result.pname} - <span className='text-xs text-slate-200'>id:{result.id}</span></button>
              </li>
            ))}
          </ul>
        ) : (
          <p>{searchInput !== '' ? '' :''}</p>
        )}
      </div>
    </div>
  )
}
