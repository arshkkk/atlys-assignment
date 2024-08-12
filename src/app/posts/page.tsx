import { CreatePost } from "./components/CreatePost";
import { IPost, Post } from "./components/Post";

const posts: Array<IPost> = [
  {
    id: 1,
    name: "Arshdeep Kumar",
    image: "/user1.png",
    postedOn: "10mins ago",
    emoji: "😞",
    edited: false,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
  {
    id: 2,
    name: "Emily Johnson",
    image: "/user2.png",
    postedOn: "2mins ago",
    emoji: "👋",
    edited: true,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
];

export default function Posts() {
  return (
    <div className="px-4 pt-12 w-full">
      <div className="mx-auto max-w-[700px]">
        <div>
          <h1 className="font-medium text-3xl text-textForeground">
            Hello Arsh
          </h1>
          <p className="font-normal text-base text-placeholderText">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-12 w-full">
          {/* Create Post */}
          <CreatePost />

          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
