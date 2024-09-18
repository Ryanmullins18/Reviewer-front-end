import { useNavigate } from "react-router-dom";
import { useDeleteCommentMutation } from "../redux/api";
import { useGetCommentQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function DeleteComment({token}){
    const navigate = useNavigate();
    const { id } = useParams();
    const [deleteComment] = useDeleteCommentMutation();
    const { data = {}, isLoading } = useGetCommentQuery(id);
    if (isLoading) {
        return <p>Loading Comment...</p>;
      }

    const removeComment = async () => {
        await deleteComment({ id, token });
      };
      const navBack = async ()=>{
        navigate("/users")
      }
      function handleSubmit(){
        removeComment();
        navBack();
      }
      if(token){
   return(
       <div>
       <h1>Are you sure you want to delete this comment?</h1>
       <div className="delete-rc">
               {data.comment.comment}
            </div>
       <button onClick={(handleSubmit)}>Yes</button>
       <button onClick={()=> navigate("/users")}>No</button>
       </div>
       )
   }
   return(
    <div>
        <h1>Your not logged in!</h1>
    </div>
   )
}
export default DeleteComment;