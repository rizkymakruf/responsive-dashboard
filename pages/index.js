import Sidebar from "../components/sidebar";
import Blank from "./blank";
import Dashboard from "./dashboard";
import { GlobalContext } from "../context/global";
import { useContext, useEffect } from "react";
import TopBar from "../components/topbar";

export default function Home(props) {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  // useEffect(() => {
  //   // globalAct.setMenu(props.menu);
  // }, []);
  console.log("menu", globalCtx.menu);
  return (
    <div className="w-full flex">
      <Sidebar globalAct={globalAct} globalCtx={globalCtx} />
      <div className="w-9/12 bg-gray-100 fixed right-0 p-5">
        <TopBar />
        {globalCtx.menu === "dashboard" ? (
          <div className="w-full">
            <Dashboard />
          </div>
        ) : (
          <Blank />
        )}
      </div>
    </div>
  );
}
