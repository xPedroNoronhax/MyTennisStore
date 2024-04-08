const Searcher = () => {
  return (
    <form className="w-[467px] flex bg-slate-100 rounded-xl mx-auto gap-1 mt-[36px] border ">
      <label className="py-2 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
      <input
        className=" w-full py-2 px-2 rounded-xl bg-slate-100 focus:outline-none"
        type="text"
        placeholder="Busque na loja..."
      />
    </form>
  );
};

export default Searcher;
