
import { AiOutlineLike, AiOutlineComment } from 'react-icons/all';
import { useState } from 'react';
function Post({desc , imgurl , title }: {desc: string , imgurl: string , title: string}) {
    const [like, setlike] = useState(false);
    return (
        <>
            <div className="bg-slate-700 w-full border"></div>
            <div className="grid grid-cols-4 py-3 px-3 h-auto mb-3  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center w-48 h-40">
                    <img className="transition ease-in-out hover:-translate-y-1 rounded-lg w-full h-full" src={imgurl} />
                </div>
                <div className="col-span-2 col-start-2 lg:col-span-2 lg:col-start-2 sm:col-span-1 md:col-start-2 md:col-span-1 sm:col-start-1">
                    <div className="flex flex-col px-2 py-2 content-center">
                        <div className="mt-1 mb-1 text-[24px] ">{title}</div>
                        <div className="flex">
                            <button className='py-2 px-2 ' onClick={() => setlike(!like)}>
                                < AiOutlineLike className={like ? 'fill-blue-500 w-7 h-auto' : 'w-7 h-auto'} />
                            </button>
                            <button className='py-1 px-1'>
                                < AiOutlineComment className='w-7 h-auto' />
                            </button>
                        </div>
                        <p className='text-left'>{desc}</p>
                        <h1 className='mt-2'>Learn More</h1>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Post;