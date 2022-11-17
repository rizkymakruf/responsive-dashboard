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
        <div className="w-7/12 flex relative bg-gray-500">
          <div className="overflow-x-scroll flex">
            <div className="flex-none w-32 bg-black">
              <div className="flex flex-col space-y-2">
                <div className="w-12 h-12 rounded-full bg-yellow-600"></div>
                <p className="text-white">name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
