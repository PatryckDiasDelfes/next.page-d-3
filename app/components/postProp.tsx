interface PostProp {

    title: string,
    text: string

}

export default function PostProp(prop: PostProp) {
    return (

      <>
        
        <div>
            
            <h1>
                {prop.title}
            </h1>

            <span>
                {prop.text}
            </span>

        </div>

      </>

    )
  }