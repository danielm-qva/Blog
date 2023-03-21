import "./App.css";
import Navbar from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";

function App() {
  const login = useSelector((store: any) => store.app.statusLogin);
  const isLoading = useSelector((store: any) => store.app.loadingApp);
  const { name } = useSelector((store: any) => store.app.user);

  return (
    <>
      <Navbar />
      <Toaster position='top-right' reverseOrder={false} containerStyle={{ marginTop: '62px' }} />
      <div className="container mx-auto px-2 mt-4 overflow-hidden">
        <div className="grid grid-cols-7 gap-6 ">
          <div className="col-span-4 col-start-2" >
            <Outlet />
          </div>
          {login ? (
            <div className=" w-56 h-52 py-4 px-4 shadow-lg shadow-slate-600 border rounded-[18px]">
              <div className="flex flex-col items-center w-48 h-40">
                <img
                  className="transition ease-in-out hover:scale-95 rounded-full w-[120px] h-[120px]"
                  src="/avatar_default.png"
                />
                <p>{name}</p>
                <p className="text-[#9696B4] ext-[16px]">Full Stack</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
