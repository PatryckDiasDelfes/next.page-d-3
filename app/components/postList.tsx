import PostProp from "./postProp"

export default function PostList() {
    return (
      <>
      
        <section>

          <div className="flex flex-col items-center">

            <PostProp 
                title="post 1" 
                text="Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, assumenda, excepturi reprehenderit laborum, in ut accusantium eligendi perspiciatis sunt laudantium numquam! Corrupti magnam harum, distinctio adipisci id quam. Laborum, sequi."
                
            />

            <PostProp 
                title="post 2" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, assumenda, excepturi reprehenderit laborum, in ut accusantium eligendi perspiciatis sunt laudantium numquam! Corrupti magnam harum, distinctio adipisci id quam. Laborum, sequi."
            />

            <PostProp 
                title="post 3" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, assumenda, excepturi reprehenderit laborum, in ut accusantium eligendi perspiciatis sunt laudantium numquam! Corrupti magnam harum, distinctio adipisci id quam. Laborum, sequi."
            />

          </div>

        </section>

      </>
    )
  }