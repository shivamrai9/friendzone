"use client";

const UserInfoCardInteraction = () => {
  return (
    <>
      <form >
        <button className="w-full bg-green-500 text-white text-sm rounded-md p-2">
          following
        </button>
      </form>
      <form  className="self-end ">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
             Block User
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;