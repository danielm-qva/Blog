import { useRouteError , useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    const navigator = useNavigate();
    console.log(error);
    return (
        <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">{error.status} - {error.statusText} </p>
                <div id="error-page" className="col-span-1">
                    <h2 className=" text-3xl mt-9 mb-9">Oops!</h2>
                    <p className="mt-9 mb-8 text-2xl" >Sorry, an unexpected error has occurred. 😢</p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="bg-indigo-600 py-2 px-3 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500
                    focus-visible:outline" onClick={() => navigator('/home')}>Home</button>
                </div> 
            </div>
        </main>
    );
}