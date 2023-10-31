import { title } from "process"
import { useState } from "react"
import { IPost } from "../types/post"

interface exportNewPostModal {

  add:(post: IPost) => void

}

export default function AddPostModal (prop: exportNewPostModal) {

    const [modalState, setModalState] = useState ("none")

    const [newPost, setNewPost] = useState (
      {

        title:"",
  
        text:"",
  
        items:[],

      },
    )

    const [deletPost, setDeletePost] = useState ()

    return (

      <section className="flex justify-end pr-6">

        <button onClick={() => {setModalState ("flex")}} className="bg-[#DAC8F7] bg-opacity-50 font-bold fixed bottom-10 text-[18px] border p-3 border-[#070707] border-solid rounded-2xl">
            Adicionar
        </button>


        <div onClick={() => {setModalState ("none")}} style={{display: modalState}} className="flex bg-black opacity-50 fixed justify-center outline z-0 top-0 left-0 right-0 h-screen w-full">
        </div>

        <div style={{display: modalState}} className="bg-white fixed flex flex-col items-center p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[70%] w-[70%]">

            {/* <h1 className="">{newPost.title}</h1> */}
            <input onChange={(e) => {setNewPost ({...newPost, title: e.target.value })}} className="outline-none w-full" placeholder="Title" type="text" />
            <textarea onChange={(e) => {setNewPost ({...newPost, text: e.target.value})}} className="outline-none h-full w-full" placeholder="Text" />

            <div className="flex justify-around w-full">

                <button onClick={() => {prop.add(newPost)}} className="p-2 font-bold border border-[#070707] border-solid rounded-lg">
                  Adicionar
                </button>

            </div>


        </div>
    
      </section>

    )
  }