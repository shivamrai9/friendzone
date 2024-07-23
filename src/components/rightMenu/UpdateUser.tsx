
import Image from "next/image";
import Link from "next/link";
import UpdateUser from "./UpdateUser";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async () => {

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
          <UpdateUser />
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            shivam rai
          </span>
          <span className="text-sm">@shivamrai</span>
        </div><p>shivam rai profile</p>
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in <b>india</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>jjlptschool</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>Unischool soultions</b>
            </span>
          </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href="/" className="text-blue-500 font-medium">
              unischool.com
              </Link>
            </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined 22-07-2024</span>
          </div>
        </div>
          <UserInfoCardInteraction
          />
      </div>
    </div>
  );
};

export default UserInfoCard;