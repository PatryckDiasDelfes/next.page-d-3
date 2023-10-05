import { Scrollbar } from 'react-scrollbars-custom';

interface PostProp {

  title: string,
  text: string,
  items: string[]

}

export default function PostProp(prop: PostProp) {

    function list(item: string) {
      return(
        <li>
          {item}
        </li>
      )

    }

    return (

      <>
        
        <div className="w-[58%]">
            
            <h1 className="flex font-bold text-[20px] place-items-center p-5">
                {prop.title}
            </h1>

            <div>

          <span className="flex flex-col gap-4 indent-5  text-justify text-[16px] p-4 max-h-[200px] overflow-scroll">
                {prop.text}

                <ol className="list-disc list-inside ">
                  {prop.items.map((item:string)=>(
                    <li className="flex-col p-2">
                      {item}
                    </li>
                  ))}
                </ol>

              </span>

            </div>

        </div>

      </>

    )
  }