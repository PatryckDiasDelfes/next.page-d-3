interface List {

    name: string

}


export default function ParticipantesList(prop: List) {
    return (
      <>
      
        <div>

            <h1 className="">
                {prop.name}
            </h1>

        </div>

      </>
    )
  }