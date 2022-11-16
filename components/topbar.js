const TopBar = () => {
  return (
    <div className="w-full pb-8 flex justify-around">
      <div className="w-2/6 flex items-center gap-2">
        <p className="text-2xl">Overview</p>
        <div className="bg-red-500 text-white rounded-full text-xs flex justify-center items-center px-2">
          182GB
        </div>
      </div>
      <div className="w-2/6 gap-1 pr-2 flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="py-1 px-1 focus:outline-none text-gray-500 text-sm bg-gray-100"
          placeholder="Search someting..."
        ></input>
      </div>
      <div className="w-2/6 flex gap-3 items-center">
        <div className="py-1 px-1 rounded-lg bordered border-2 flex justify-center items-center border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div className="py-1 px-1 rounded-lg bordered border-2 flex justify-center items-center border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </div>
        <div className="w-full py-1 text-white bg-green-700/50 flex justify-center font-semibold rounded-lg">
          Upgrade your plane
        </div>
      </div>
    </div>
  );
};
export default TopBar;
