import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import useAuthStore from "../store/authStore";
import NoResult from "./NoResult";

interface IProps {
  isPostingComment: Boolean;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  addComment: (e: React.FormEvent) => void;
  comments: IComment[];
}

interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: { _ref: string; _id: string };
}

const Comments = ({
  comments,
  isPostingComment,
  setComment,
  addComment,
  comment,
}: IProps) => {
  const { userProfile } = useAuthStore();
  // const comments = [];
  // const isPostingComment = false;
  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px]">
      <div className="overflow-scroll lg:h-[475px]">
        {comments?.length ? (
          <div>Videos</div>
        ) : (
          <NoResult text="No Comments Yet! " />
        )}
      </div>
      {userProfile ? (
        <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form onSubmit={() => {}} className="flex gap-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value.trim())}
              placeholder="Add Value"
              className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] 
              md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none 
              focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
            />
            <button className="text-md text-gray-400" onClick={() => {}}>
              {isPostingComment ? "Commenting...." : "Comment"}
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <h1>No yet</h1>
        </div>
      )}
    </div>
  );
};

export default Comments;
