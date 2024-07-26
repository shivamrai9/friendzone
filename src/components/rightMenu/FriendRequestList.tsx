"use client";

import Image from "next/image";

const FriendRequestList = () => {


  return (
    <div className="">
        <div className="flex items-center justify-between" >
          <div className="flex items-center gap-4">
            <Image
              src={"https://images.pexels.com/photos/27297269/pexels-photo-27297269/free-photo-of-three-white-daisies-are-shown-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              shivam rai
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form >
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form >
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default FriendRequestList;