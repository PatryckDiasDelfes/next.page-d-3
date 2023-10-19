import List from "./participantesList"

export default function Footer() {
    return (
      <>
      
        <section className="flex bg-[#F1545E] bg-opacity-50 justify-around p-5">

            <div className="flex place-items-center gap-40">

                <div>

                    <h1 className="font-bold">
                        Instituição de Ensino
                    </h1>
                    <ol className="">
                        <li>
                        Unisociesc-SC
                        </li>
                        <li>
                        UNIFACS-BA
                        </li>
                    </ol>

                </div>
                <div>

                    <h1 className="font-bold">
                        Redes sociais
                    </h1>
                    <ol>
                        <li>
                            Instagram
                        </li>
                        <li>
                            Exemplo
                        </li>
                    </ol>
                </div>
                <div>
                
                    <h1 className="font-bold">
                        Apoio
                    </h1>
                    <ol>
                        <li>
                            ELITI
                        </li>
                        <li>
                            AMCOM
                        </li>
                    </ol>

                </div>

            </div>

            <div>

                <ol>
                    
                    <h1 className="flex place-content-center font-bold">
                        Participantes
                    </h1>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <List
                            name="Maria Eduarda S. E Silva"/>
                        <List
                            name="Bianca Eduarda Klabunde"/>
                        <List
                            name="Marcelo Moura C. Cruz"/>
                        <List
                            name="Bianca de França"/>
                        <List
                            name="Leticia Voss"/>
                        <List
                            name="Fabio Ribeiro"/>
                        <List
                            name="Franciane M. de Andrade"/>
                        <List
                            name="Letícia Brodzinski"/>
                        <List
                            name="Natasha Lucca Schimitt"/>
                        <List
                            name="Sabrina Lombardi"/>
                    </div>

                </ol>

            </div>

        </section>

      </>
    )
  }