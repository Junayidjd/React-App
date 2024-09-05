import React, { useEffect, useState } from "react";
// import './index.css

function Meal() {
  const [mealData, setMealData] = useState([]);
  const [area, setarea] = useState("indian");
  const [inputData, setinputData] = useState('');
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api =
        await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
`);
      const data = await api.json();
      console.log(data.meals);

      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) =>{
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}
`)
    const data = await api.json();
    setMealData("search data",data.Meal);
    setMealData(data.meals);
    setinputData("")
  }

  return (
    <>
      <div className="bg-zinc-950">
        {/* <div className="">
        <button
          onClick={() => setarea("Indian")}
          type="button"
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
        >
          Indian
        </button>
        <button
          onClick={() => setarea("Canadian")}
          type="button"
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 gap-16"
          All
        >
          Canadian
        </button>
        <button
          onClick={() => setarea("american")}
          type="button"
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 gap-16"
          All
        >
          American
        </button>
        <button onClick={() => setarea("thai")} type="button" className="" 
        type= "button"
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 gap-16"
        All>
          Thai
        </button>
        <button
          onClick={() => setarea("japanese")}
          type="button"
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 gap-16"
          All
        >
          japanese
        </button>
        <button
          onClick={() => setarea("russian")}
          type="button"
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 gap-16"
          All
        >
          russian
        </button>
      </div> */}

        {/* <div className="flex justify-center items-center space-x-4 my-4">
          {[
            "Indian",
            "Canadian",
            "American",
            "Thai",
            "Japanese",
            "Russian",
          ].map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setarea(cuisine.toLowerCase())}
              type="button"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              {cuisine}
            </button>
          ))}
        </div> */}

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setarea("Indian")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            Indian
          </button>
          <button
            onClick={() => setarea("Canadian")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            Canadian
          </button>
          <button
            onClick={() => setarea("American")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            American
          </button>
          <button
            onClick={() => setarea("Thai")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            Thai
          </button>
          <button
            onClick={() => setarea("Japanese")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            Japanese
          </button>
          <button
            onClick={() => setarea("Russian")}
            type="button"
            className="glow-button relative px-6 py-3 text-white font-bold rounded-lg transition-colors duration-300 ease-in-out bg-[#161616] hover:text-black"
          >
            Russian
          </button>
        </div>
        <form onSubmit={submitHandler} className="mx-auto text-center my-3 w-20 bg-black hover:bg-violet-100 border-none focus:first-line:before:*:">
          <input onChange={(e) => setinputData(e.target.value)} type="text" />
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {mealData.map((data) => (
            <div key={data.idMeal} className="m-4 text-center">
              <div>
                <img
                  src={data.strMealThumb}
                  alt=""
                  className="w-56 h-56 rounded-lg border-4 border-blue-400 transition duration-300 ease-in-out transform hover:scale-105 hover:border-violet-500"
                />
              </div>
              <h3 className="mt-2 text-white">{data.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Meal;
