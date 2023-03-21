import Post from "./Post";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";
import { setgetAllPost } from "../redux/slice/slicePost";
import { clientAxios } from "../hooks/clientAxios";
import { notloadinglist, isloadinglist } from "../redux/slice/slicePost";
import { BiPlus } from 'react-icons/all'
import { store } from "../redux/store";
import { Link } from 'react-router-dom'
import { Tween } from "react-gsap";
import LoadingApp from "./Loading";

function Home() {
  const dispatch = useDispatch();
  const listPost = useSelector((store: any) => store.post.listPost);
  const islogin = useSelector((store: any) => store.app.statusLogin);
  const isloading = useSelector((store: any) => store.post.isloading);

  useEffect(() => {
    dispatch(isloadinglist());
    clientAxios.get('/post').then(res => {
      dispatch(setgetAllPost({ list: res.data }))
      setTimeout(() => {
        dispatch(notloadinglist());
      } , 1500)
    })
  }, []);

  if (isloading) {
    return (<LoadingApp isloading />)
  }

  return (
    <>
      <div className="py-2 px-2 mt-2 w-full h-52 ">
        <div className="flex justify-between mt-4">
          <p className="text-4xl font-semibold mt-2 px-3 py-3 italic">Learns Post</p>
        </div>
        <div className="felx">
          <p className="px-3 py-3 font-sans">Marketing / Page Sections </p>
        </div>
        {
          islogin ? (
            <Link to={'/addpost'}>
              <button className="px-3 py-3 bg-gray-500 rounded-xl inline-flex justify-center items-center hover:bg-gray-700 hover:text-white">
                <BiPlus className='mr-1' />Add Post
              </button>
            </Link>
          )
            : (<></>)
        }
      </div>
      <div className="relative mb-3 w-full h-full">
        <div className="container mx-auto">
          {
            listPost.length === 0 ?
              (<Tween to={{ x: '100px' }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
                <div className="text-2xl text-center">We do not have post aviable 😒</div>
              </Tween>)
              :
              (listPost.map((item: any, index: number) => (
                <Post desc={item.description} imgurl={item.photoPost} key={index} likeNumber={item.like} />
              ))
              )
          }
        </div>
      </div>
    </>
  )
}

export default Home;
