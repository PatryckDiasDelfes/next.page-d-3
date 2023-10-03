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

            <h1 className="font-bold text-[3em]">
                GEBF
            </h1>

            <p>
              Grupo de Estudos do Bem Estar Felino
            </p>

          </div>

          <Nav/>
          
        </section>
      </>
    )
  }