import "./App.css";
import Navbar from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "./redux/store";

function App() {
  const login = useSelector((store: any) => store.app.statusLogin);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-2 mt-4">
        <div className="grid grid-cols-7 gap-6 ">
          <div className="col-span-4 col-start-2">
            <Outlet />
          </div>
          {login ? (
            <div className=" w-56 h-52 py-4 px-4 shadow-lg shadow-slate-600 border rounded-[18px]">
              <div className="flex flex-col items-center w-48 h-40">
                <img
                  className="transition ease-in-out hover:-translate-y-1 rounded-full w-[120px] h-[120px]"
                  src="/avatar.jpg"
                />
                <p>AbBull Numan</p>
                <p className="text-[#9696B4] ext-[16px]">Full Stack</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
