import React from "react";
import { IPost } from "../Interface/IPost";

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <div className="flex p-3 bg-gray-50 rounded-xl mb-4">
        <div className="h-24 w-1/2 mr-3 rounded-lg">
          <img
            className="h-full object-cover rounded-lg"
            src={post.urlToImage}
            alt=""
          />
        </div>
        <div>
          <div>
            <div className="text-xs font-extralight">{post.source.name}</div>
          </div>
          <div className="text-ellipsis text-xs">{post.title}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
