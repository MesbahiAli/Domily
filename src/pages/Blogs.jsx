import { Carousel } from "flowbite-react";
import { Badge } from "flowbite-react";

const Blogs = () => {
  return (

    <>
      

      <div className="h-56 w-full top-0">
        <Carousel className="w-full">
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
<Badge color="failure">Failure</Badge>
    </>
  )
};

export default Blogs;