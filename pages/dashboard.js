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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
