const Dashboard = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-5/12 flex flex-col space-y-5">
          <p className="text-5xl font-semibold text-gray-800">
            Manage your folders
          </p>
          <p className="text-lg font-thin">
            Create folders to short file and have quick access to documents
          </p>
        </div>
        <div className="w-7/12 flex relative px-2">
          <div className="overflow-x-scroll overflow-auto flex gap-5">
            <div className="flex flex-none justify-center relative items-center w-32 bg-green-700/50 rounded-xl">
              <div className="absolute w-full top-0">
                <div className="w-full flex justify-between items-center py-3 px-5">
                  <p className="text-white">01</p>
                  <p className="text-white">:</p>
                </div>
              </div>
              <div className="absolute w-full bottom-0">
                <div className="w-full flex flex-col py-3 px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                  >
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                  </svg>
                  <p className="text-white">Marketing</p>
                  <p className="text-white/50 text-sm">126Mb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
