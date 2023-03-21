
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { clientAxios } from '../hooks/clientAxios';
import { useDispatch, useSelector } from 'react-redux';
import LoadingApp from './Loading';
import { isloadinglist, notloadinglist } from '../redux/slice/slicePost';
import { toast } from 'react-hot-toast';

function AppPost() {
    const dispacht = useDispatch();
    const id = useSelector((store: any) => store.app.user.id);
    const token = useSelector((store: any) => store.app.token);
    const isloading = useSelector((store: any) => store.post.isloading);
    const navigate = useNavigate();

    const FormiKAddPost = useFormik({
        initialValues: { title: '', photoPost: '', description: '' },
        onSubmit: (value) => {
            console.log(value);
            dispacht(isloadinglist());
            clientAxios.defaults.headers.common['Authorization'] = 'Beare ' + token;
            clientAxios.post('/post', { ...value, id }).then(res => {
                toast.success('Add Posting exitoso!!!');
                navigate('/home')
                setTimeout(() => {
                    dispacht(notloadinglist());
                }, 1500)
            }).catch(error => {
                toast.error(error.message, {
                    icon: '😢',
                })
                setTimeout(() => {
                    dispacht(notloadinglist());
                }, 1500)
            })
        },
    })

    if (isloading) {
        return (<LoadingApp isloading />)
    }
    return (
        <div className="flex justify-center p-4 mt-14">
            <div className="w-[350px] h-[490px] shadow-xl shadow-current rounded-2xl">
                <h1 className="p-2 text-center text-2xl font-mono">Add Post</h1>
                <h2 className="text-center text-sm">Add option for posting</h2>
                <form className="w-full p-10" onSubmit={FormiKAddPost.handleSubmit}>
                    <div className="flex -mx-3">
                        <div className="w-1/1 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Title</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input required onChange={FormiKAddPost.handleChange} type="text" id="title" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="Title Articule" />
                            </div>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/1 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">URL Photo</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input onChange={FormiKAddPost.handleChange} type="url" id="photoPost" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="URL Photo" />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-1/1 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Description</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <textarea onChange={FormiKAddPost.handleChange} id="description" className="w-full min-h-0 overflow-hidden -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200
                                 outline-none focus:border-indigo-500" placeholder="Description" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 justify-center flex">
                        <button className="p-3 bg-emerald-400 mr-6 rounded-xl hover:bg-emerald-300 shadow-xl">Submit </button>
                        <Link to={'/home'}>
                            <button className="p-3 bg-red-400 rounded-xl ">Cancel </button>
                        </Link>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default AppPost;