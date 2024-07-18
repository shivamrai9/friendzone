
import { auth } from "@clerk/nextjs/server";
// import Image from "next/image";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        shivam
      </div>
    </div>
  );
};

export default Stories;