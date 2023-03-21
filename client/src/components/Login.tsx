
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { clientAxios } from "../hooks/clientAxios";
import { useNavigate, Link } from "react-router-dom";
import { applogin, LoadingApp , NotLoadinApp } from '../redux/slice/sliceApp';
import { toast } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();
    const dispach = useDispatch();

    const formikLogin = useFormik({
        initialValues: { email: ' ', password: '' },
        onSubmit: (value) => {
            dispach(LoadingApp());
            clientAxios.post('/login', value).then((res) => {
                //app login
                dispach(applogin({ user: res.data.user, token: res.data.toke }));

                toast.success('Login exitoso!!!', {
                    icon: '😉',
                });
                navigate('/home');
                dispach(NotLoadinApp());
            }).catch(error => {

                toast.error(error.message, {
                    icon: '😢',
                })
                    dispach(NotLoadinApp());
            });
        }
    })


    return (
        <div className="flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-gray-400 py-6 px-6">
                        <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" className="w-full h-full" />
                    </div>
                    <form className="w-full md:w-1/2 py-10 px-5 md:px-10" onSubmit={formikLogin.handleSubmit}>
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                            <p>Enter your information to Login</p>
                        </div>

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label className="text-xs font-semibold px-1">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input onChange={formikLogin.handleChange} type="email" value={formikLogin.values.email} id="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label className="text-xs font-semibold px-1">Password</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="password" id="password" value={formikLogin.values.password} onChange={formikLogin.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2
                                 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button className="block w-full max-w-xs mx-auto bg-gray-600 hover:bg-gray-500  text-white rounded-lg px-3 py-3 font-semibold">LOGIN NOW</button>
                            </div>
                            <Link to={'/register'} className='block w-full max-w-xs mx-auto'>
                                <div className="w-full px-3 mb-5">
                                    <button className=" bg-gray-600 hover:bg-gray-500  text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;