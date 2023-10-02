import Nav from "./nav"

export default function Header() {
    return (
      <>
        <section className="bg-[#F2C1AE] p-5">

            <div className="flex items-center gap-72">
                
                <h1 className="font-bold text-[3em] justify-end">
                    GEBF
                </h1>

                <div className="">
                    <Nav/>
                </div>

            </div>

        </section>
      </>
    )
  }