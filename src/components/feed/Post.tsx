import Image from "next/image";
import { Suspense } from "react";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import Comments from "./Comments";


const Post = ( ) => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            shivam rai
          </span>
        </div>
        <PostInfo  />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
          <div className="w-full min-h-96 relative">
            <Image
              src='https://images.pexels.com/photos/7466986/pexels-photo-7466986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        <p>sjjkhjkhkjhjhsjdkjshf</p>
      </div>
      {/* INTERACTION */}
      <Suspense fallback="Loading...">
        <PostInteraction
        />
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments  />
      </Suspense>
    </div>
  );
};

export default Post;