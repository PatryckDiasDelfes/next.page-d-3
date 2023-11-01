import { useState } from "react"
import PostProp from "./postProp"
import AddPostModal from "./addPostModal"


interface editPost {

    openModal: boolean
    closeModal:() => void

}

export default function PostModal (props:editPost) {
    return (
    <>

        <section onClick={props.closeModal} style={{display: props.openModal ? "flex" : "none"}} className="bg-black bg-opacity-50 fixed z-10 top-0 left-0 right-0 h-screen w-screen"/>

        <section style={{display: props.openModal ? "flex" : "none"}} className="bg-white fixed flex flex-col items-center p-4 gap-2 rounded-3xl z-20 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[70%] w-[70%]">

        

        </section>
        
    </>
    )
  }