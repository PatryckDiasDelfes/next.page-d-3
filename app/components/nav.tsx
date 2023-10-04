import Image from "next/image";


export default function Nav() {
    return (
      
        <div className="justify-end flex gap-14">

            <button className="border p-2 border-[#070707] border-solid rounded-xl hover:scale-125">
            Cadestre-se 

                {/* <Image 
                  className='flex w-12 h-12 '
                  src="/instagram.icon"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> */}

            </button>

            <button className="border p-2 border-[#070707] border-solid rounded-xl hover:scale-125">
                Login
            </button>

        </div>

    )
  }