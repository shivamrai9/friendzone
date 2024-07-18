
import Image from "next/image";

const UserInfoCard = async () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            dsfsfgs
          </span>
          <span className="text-sm">@shivam</span>
        </div>
        <p>im a developer</p>
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              Living in <b>Hyderabad</b>
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>Nirmala</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>LMV IT Solution</b>
            </span>
          </div>
      </div>
    </div>
  );
};

export default UserInfoCard;