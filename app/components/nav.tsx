import Image from "next/image";


export default function Nav() {
    return (
      
        <div className="justify-end flex gap-14 pr-24">

            <button className="font-bold text-[18px] border p-3 border-[#070707] border-solid rounded-2xl hover:scale-125">
            Cadestre-se 

                {/* <Image 
                  className='flex w-12 h-12 '
                  src="/instagram.icon"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> */}

            </button>

            <button className="font-bold text-[18px] border p-3 border-[#070707] border-solid rounded-2xl hover:scale-125">
                Login
            </button>

        </div>

    )
  }