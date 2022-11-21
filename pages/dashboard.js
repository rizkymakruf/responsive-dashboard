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
            <div className="flex flex-none justify-center relative items-center w-32 bg-green-700/50 rounded-lg">
              <p className="text-white absolute top-0">name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
