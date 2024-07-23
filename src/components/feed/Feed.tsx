import Post from "./Post";

const Feed = async () => {

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        <Post />
       "No posts found!"
    </div>
  );
};

export default Feed;