
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response.json();

      if (!response.ok) {
        console.error(result.error);
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (err) {
      console.error("Fetch error: ", err);
      setError("An error occurred while fetching data.");
    }
  }

  const handleDelete = async(id)=>{
      const response = await fetch(`http://localhost:5000/${id} `,{
        method:"DELETE"
      })
      const result = await response.json();
      if (!response.ok) {
        console.error(result.error);
        setError(result.error);
      } else {
        setError("Deleted succesfully")
        setTimeout(()=>{
          setError(" ")
          getData();
        },1000)
      }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">All Data</h2>
      
      {error && (
        <div className="text-red-600 font-medium text-center mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((ele) => (
          <div className="bg-white shadow-lg rounded-lg p-6" key={ele.id}>
            <h5 className="text-xl font-bold text-gray-800 mb-2">{ele.name}</h5>
            <h6 className="text-sm text-gray-500 mb-1">{ele.email}</h6>
            <h6 className="text-sm text-gray-500 mb-4">{ele.age}</h6>
            <div className="flex justify-between">
             
              <a href='#' className='text-red-600 font-medium hover:text-red-800 transition'onClick={()=>handleDelete(ele._id)}>Delete</a>
              <Link to={`/${ele._id}`} className='text-blue-600 font-medium hover:text-blue-800 transition'>Edit</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
