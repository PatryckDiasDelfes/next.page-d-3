import { useState } from "react"

export default function AddPostModal () {

    const [modalState, setModalState] = useState ("none")

    return (

      <section className="flex justify-end pr-16">

        <button onClick={() => {setModalState ("flex")}} className="font-bold fixed bottom-10 text-[18px] border p-3 border-[#070707] border-solid rounded-2xl">
            Adicionar
        </button>

        <div style={{display: modalState}} className="outline h-56 w-56">

          <h1>Titulo</h1>
          <input className="absolute inset-x-0 top-6" type="text" />

          <textarea className="absolute inset-x-0 top-12" name="" id="" />

        </div>

      </section>

    )
  }