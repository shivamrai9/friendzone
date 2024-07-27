import Image from "next/image";
import Link from "next/link";

const ProfileCard = async () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image
                    src={"https://images.pexels.com/photos/3591354/pexels-photo-3591354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt=""
                    fill
                    className="rounded-md object-cover"
                />
                <Image
                    src={"https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
                />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">
                    shivam rai
                </span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image
                            src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full object-cover w-3 h-3"
                        />
                    </div>
                    <span className="text-xs text-gray-500">
                        Followers
                    </span>
                </div>
                <Link href={`/profile/`}>
                    <button className="bg-primary text-white text-xs p-2 rounded-md">
                        My Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;