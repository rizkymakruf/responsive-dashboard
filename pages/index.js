import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-9/12 h-screen"></div>
    </div>
  );
}
