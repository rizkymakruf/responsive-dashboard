import Sidebar from "../components/sidebar";
import Blank from "./blank";
import Dashboard from "./dashboard";
import { GlobalContext } from "../context/global";
import { useContext, useEffect } from "react";

export default function Home(props) {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  useEffect(() => {
    // globalAct.setMenu(props.menu);
  }, []);
  console.log("menu", props.menu);
  return (
    <div className="w-full flex">
      <Sidebar globalAct={globalAct} globalCtx={globalCtx} />
      <div className="w-9/12 h-screen">
        if (props.menu === "dashboard") {<Blank />} else {<Dashboard />}
        {/* ${props.menu === "dashboard" ? <Blank /> : <Dashboard />} */}
      </div>
    </div>
  );
}
