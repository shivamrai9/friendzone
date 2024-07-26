import Image from "next/image";
import Link from "next/link";

const UserMediaCard = async () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-green-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
              <div className="relative w-1/5 h-24" >
                <Image
                  src="https://images.pexels.com/photos/7466986/pexels-photo-7466986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
          {/* "No media found!" */}
      </div>
    </div>
  );
};

export default UserMediaCard;