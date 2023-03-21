import {useFormik} from "formik";
import { LoadingApp } from "../redux/slice/sliceApp";
import {clientAxios} from "../hooks/clientAxios";
import {useNavigate ,Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toast} from 'react-hot-toast' ;

import {Tween ,  Timeline} from 'react-gsap';

function  Register() {
    const navigate = useNavigate();
    const dispach = useDispatch();

    const formikLogin = useFormik({
        initialValues: {name: '' ,email: ' ' , password: ''},
        onSubmit:(value) => {
            dispach(LoadingApp());
            clientAxios.post('/register' , value).then(res => { 
                setTimeout(() => {
                    navigate('/home') ;
                    toast.success(res.data);
                })   
          
             }).catch(error => {
                 toast.error(error.message)
            } )
        }
    })


    return (
        <div className="flex items-center justify-center px-5 py-5">
            <Timeline target={<div className="w-[455px] h-[512px] transform rotate-6 z-auto bg-[#eeaeca] rounded-3xl overflow-hidden"> </div>}>
            <Tween to={{rotation:174}} ></Tween>
            </Timeline>
            <div className="bg-gray-100 absolute text-gray-500 rounded-3xl shadow-xl w-96 overflow-hidden ">
                <div className="md:flex w-full">
                    {/* <div className="hidden md:block w-1/2 bg-gray-400 py-6 px-6">
                        <img src="./register.jpg" className="w-full h-full" />
                    </div> */}
                    <form className="w-full  py-10 px-5 md:px-10" onSubmit={formikLogin.handleSubmit}>
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Register</h1>
                            <p>Enter your information to Register</p>
                        </div>

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold px-1">Name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={formikLogin.handleChange} type="text" value={formikLogin.values.name} id="name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold px-1">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={formikLogin.handleChange} type="email" value={formikLogin.values.email} id="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label className="text-xs font-semibold px-1">Password</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="password" id="password" value={formikLogin.values.password} onChange={formikLogin.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2
                                 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button className="block w-full max-w-xs mx-auto bg-gray-600 hover:bg-gray-500  text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                            </div>
                            <Link to={'/home'} className="block w-full max-w-xs mx-auto">
                            <div className="w-full px-3 mb-5">
                                <button className=" bg-red-600 hover:bg-red-500  text-white rounded-lg px-5 py-3 font-semibold">Cancel</button>
                            </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default  Register;
