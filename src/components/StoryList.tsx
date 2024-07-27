"use client";
import Image from "next/image";

const StoryList = () => {
  return (
    <>
            <div className="flex flex-col items-center gap-2 cursor-pointer relative">
              <Image
                src={"https://images.pexels.com/photos/3591354/pexels-photo-3591354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2 ring-green-500 object-cover"
                onClick={() => open()}
              />
                <form >
                  <button className="text-xs bg-primary p-1 rounded-md text-white">
                    Send
                  </button>
                </form>
                <span className="font-medium">Add a Story</span>
              
              <div className="absolute text-6xl text-gray-200 top-1">+</div>
            </div>
      {/* STORY */}
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <Image
            src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-green-500"
          />
          <span className="font-medium">
            shivam
          </span>
        </div>
    </>
  );
};

export default StoryList;