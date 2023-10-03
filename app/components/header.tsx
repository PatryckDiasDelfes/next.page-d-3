import Nav from "./nav"
import Image from "next/image"

export default function Header() {
    return (
      <>
        <section className="flex justify-between items-center bg-[#F2C1AE] p-1">   

          <div className="flex items-center">

          <Image className=""
              src={"/logo.png"}
              width={250}
              height={250}
              alt=""
            />

            <div>
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