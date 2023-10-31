"use client"

import { Scrollbar } from 'react-scrollbars-custom';
import { IPost } from '../types/post';
import { useState } from 'react';
import PostModal from './postModal';
import Image from 'next/image';


interface PostProp {

  data: IPost

}

export default function PostProp(prop: PostProp) {

    // function list(item: string) {
    //   return(

    //     <li>
    //       {item}
    //     </li>
    //   )
    // } 
    // Verificar funcinalidade.

    const [postModal, setPostModal] = useState (false) 

    return (

      <>
        
        <div className="w-[58%]">

            <div className='flex items-center'>
              <h1 className="flex font-bold text-[20px] place-items-center p-5">
                  {prop.data.title}
              </h1>

              <div>
                <PostModal
                  openModal= {postModal}
                  closeModal={() => {setPostModal(false)}}/>

                <button onClick={(e) => {setPostModal(true)}}>
                  <Image className='flex w-7 h-7 '
                    src="/editar.ico"
                    width={500}
                    height={500}
                    alt="Picture of the author"/>
                </button>
              </div>
              
            </div>

            <div>
              <span className="flex flex-col gap-4 indent-5 text-justify break-words text-[16px] p-4 max-h-[200px] overflow-scroll">
                {prop.data.text}

                <ol className="list-disc list-inside">
                  {prop.data.items.map((item:string)=>(
                    <li className="flex-col p-2">
                      {item}
                    </li>
                  ))}
                </ol>

              </span>
            </div>

        </div>

      </>

    )
  }