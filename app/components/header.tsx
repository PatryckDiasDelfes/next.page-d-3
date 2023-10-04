import Nav from "./nav"
import Image from "next/image"

export default function Header() {
    return (
      <>
        <section className="flex justify-between items-center bg-[#F2C1AE] px-8 py-4">   

          <div className="flex items-center">

            <Image className="w-[30vh] h-[30wh]"
                src={"/logo.svg"}
                width={200}
                height={200}
                alt=""
            />

            <div className="p-8">
              <h1 className="font-bold text-[3em]">
                  GEBF
              </h1>

              <p className="break-inside-auto">
                Grupo de Estudos do Bem Estar Felino
              </p>
            </div>

          </div>

          <Nav/>
          
        </section>
      </>
    )
  }