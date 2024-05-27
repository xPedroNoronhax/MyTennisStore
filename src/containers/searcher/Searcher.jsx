import React, { useEffect, useState } from "react";
import produtos from "../../produtos";
import { Link, useNavigate } from "react-router-dom";

const Searcher = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setInput(value);
    const filteredModels = produtos.flatMap((marca) =>
      marca.modelos.filter((modelo) =>
        modelo.modelo.toLowerCase().includes(value.toLowerCase())
      )
    );
    setSearchResults(filteredModels);
  };

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    setInput("");
  };

  useEffect(() => {
    setInput("");
  }, [navigate]);

  return (
    <div>
      <form className="lg:w-[467px] flex bg-slate-100 rounded-xl mx-auto gap-1 mt-[200px] mb-0 border">
        <label className="py-2 px-2">
          <Link
            to={`/product/${
              searchResults.length > 0 ? searchResults[0].id : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
        </label>
        <input
          className="w-full py-2 px-2 rounded-xl bg-slate-100 focus:outline-none"
          type="text"
          placeholder="Busque na loja..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>

      {input.length > 0 && (
        <div className="lg:w-[467px] max-h-[90px] overflow-auto flex bg-slate-100 rounded-xl mx-auto gap-1 border">
          <ul className="flex flex-col justify-start items-start">
            {searchResults.map((modelo) => (
              <li
                className="my-1 mx-4 text-end font-bold cursor-pointer hover:text-gray-700"
                onClick={() => handleSelectProduct(modelo.id)}
                key={modelo.id}
              >
                {modelo.modelo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searcher;
