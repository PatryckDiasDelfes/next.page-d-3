interface PostProp {

    title: string,
    text: string

}

export default function PostProp(prop: PostProp) {
    return (

      <>
        
        <div className="">
            
            <h1 className=" flex font-bold place-items-center">
                {prop.title}
            </h1>

            <span className="flex p-4 w-[50%]">
                {prop.text}
            </span>

        </div>

      </>

    )
  }