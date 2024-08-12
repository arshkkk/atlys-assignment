import { Card } from "./Card";
import { UserInfo } from "./UserInfo";
import DotIcon from "../../../icons/3dot.svg";
import CommentIcon from "../../../icons/comment.svg";

export interface IPost {
  id: number;
  name: string;
  image: string;
  postedOn: string;
  emoji: string;
  edited: boolean;
  content: string;
  comments: number;
}
export const Post = (post: IPost) => {
  return (
    <Card>
      {/* user info */}
      <div className="flex justify-between items-center">
        <UserInfo
          image={post.image}
          name={post.name}
          postedOn={post.postedOn}
        />

        <DotIcon />
      </div>

      {/* comment */}
      <div className="flex bg-card2 p-4 rounded-lg">
        <div className="flex justify-center items-center bg-card rounded-full w-12 min-w-12 h-12 min-h-12">
          <span className="-ml-1 text-center text-lg">{post.emoji}</span>
        </div>
        <p className="bg-transparent pl-4 font-normal text-base text-placeholderText">
          {post.content}
        </p>
      </div>

      {/* post metadata */}
      <div className="flex items-center gap-2">
        <CommentIcon />
        <p className="font-medium text-placeholderText text-sm">
          {post.comments} comments
        </p>
      </div>
    </Card>
  );
};
