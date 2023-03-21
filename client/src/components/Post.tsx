
import { AiOutlineLike, AiOutlineComment } from 'react-icons/all';
import { useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
function Post({desc , imgurl , likeNumber}: {desc: string , imgurl: string, likeNumber: number}) {
    const [like, setlike] = useState(false);

    return (
        <>
            <div className="grid grid-cols-4 py-3 px-3 h-auto mb-3  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center w-48 h-40">
                    <Timeline target={<img className="transition ease-in-out hover:-translate-y-1 rounded-lg w-full h-full relative right-[220px]" src={imgurl} />}>
                    <Tween to={{x : '200px' , rotation: 180}} duration={2} ease="back.out(1.7)" />
                    </Timeline>
                </div>
                <div className="col-span-2 col-start-2 lg:col-span-2 lg:col-start-2 sm:col-span-1 md:col-start-2 md:col-span-1 sm:col-start-1">
                    <div className="flex flex-col px-2 py-2 content-center h-2/3">    
                        <p className='text-left'>{desc}</p>
                        <div className="flex items-center">
                            <button className='py-2 px-2 ' onClick={() => setlike(!like)}>
                                < AiOutlineLike className={like ? 'fill-blue-500 w-7 h-auto' : 'w-7 h-auto'} />
                            </button>
                            <span>{likeNumber}</span>
                            <button className='ml-3 py-1 px-1 animate-pulse'>
                                < AiOutlineComment className='w-7 h-auto' />
                            </button>
                        </div>
                            <h1 className='mt-2'>Learn More</h1>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Post;