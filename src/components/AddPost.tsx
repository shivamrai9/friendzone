// "use client";
import Image from "next/image";
import AddPostButton from "./AddPostButton";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {
  const   {userId } = auth()
  console.log(userId)

  const tryAction = async (formData: FormData) =>{
    "use server"
    // const desc = formData.get("desc") as string;
    // try{
    //   prisma.post.create({
    //     data:{
    //       userId:"1",
    //       desc: desc
    //     }
    //   })
    // }catch(err){
    //   console.log(err)
    // }
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={tryAction}  className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-primary-light rounded-lg p-2"
            name="desc"
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            {/* <AddPostButton /> */}
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;