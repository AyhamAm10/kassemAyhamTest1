import addComment from "../../assets/productDetails/plus.svg";
import object from "../../assets/productDetails/OBJECT.png";
import { useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";
import { useCreateComment } from "../../api/postAPIs/useCreateComent";
import DisplayQue from "./DisplayQue";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
const Comment: React.FC<{
  refetch: (options?: RefetchOptions) => Promise<
    QueryObserverResult<
      {
        data: any[];
      },
      Error
    >
  >;
}> = ({ refetch }) => {
  const [commentValue, setCommentValue] = useState<string >("");


  const product = useSelector(
    (state: any) => state.productDetailsSlice
  ).productDetailsState;

  console.log(product);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (commentValue?.length > 0) {
      useCreateComment(commentValue, product.id);
      refetch()
      setCommentValue("")
    }
  };

  return (
    <div className="w-full flex flex-col">
      <form
        onSubmit={handleSubmit}
        id="commentForm"
        className="relative overflow-hidden rounded-md"
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCommentValue(e.target.value)
          }
          value={commentValue}
          type="text"
          className="w-full placeholder:text-#BABCC1 text-lg md:text-2xl font-medium bg-white px-8 py-4"
          placeholder="write a comment ..."
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 translate-y-[-50%] cursor-pointer"
        >
          <img src={addComment} alt="add comment" />
        </button>
      </form>
      <div className="py-10 flex-center">
        {product.questions.length > 0 ? (
          <div className="w-full flex-col flex gap-10">
            {product.questions.map((item: any) => (
              <DisplayQue data={item} key={item.id} />
            ))}
          </div>
        ) : (
          <img src={object} alt="coments not fund img" />
        )}
      </div>
    </div>
  );
};

export default Comment;
