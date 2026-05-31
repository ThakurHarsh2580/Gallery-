import { useEffect, useState } from "react";
import ImageCard from "../component/ImageCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try{
      setLoading(true);
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=15`);

      if(!response.ok){
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const recievedData = await response.json();
      setData(recievedData);
    }
    catch(err){
      console.log(err.message);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => { // calls API on Initial Render + jab page Change Hoga 
    getData();
  }, [page])

  return (
    <div className="min-h-screen flex flex-col justify-between my-10 mx-2">
      <div className="flex flex-wrap justify-around gap-10 my-10 grow">
        {loading ? (
          <div className="h-144 flex items-center">
            <h1 className="">Loading...</h1>
          </div>
        ) : data.length > 0 ? (
          data.map((elm, idx) => (
            <ImageCard key={elm.id} elm={elm}/>
          ))
        ) : (
          <h1>No Results</h1>
        )}
      </div>

      <div className="mt-auto">
        <div className="flex justify-center items-center gap-6">
          <button 
          disabled = {page === 1}
          onClick={() => setPage(prevPage => prevPage - 1)}
          className={`inline-flex bg-indigo-600 hover:bg-indigo-700 items-center gap-2 px-5 py-2.5 rounded-lg transition
            ${page === 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
          }`}>Prev</button>
          
          <h2>Page {page}</h2>

          <button 
          onClick={() => setPage(prevPage => prevPage + 1)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer">Next</button>
        </div>
      </div>
    </div>

    
  );
}

export default App;
