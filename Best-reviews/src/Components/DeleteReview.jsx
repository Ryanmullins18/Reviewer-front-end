import { useNavigate } from "react-router-dom";
import { useDeleteReviewMutation, useGetReviewQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function DeleteReview({token}){
    const navigate = useNavigate();
    const { id } = useParams();
    const [deleteReview] = useDeleteReviewMutation();
    const { data = {}, isLoading } = useGetReviewQuery(id);
    if (isLoading) {
        return <p>Loading Review...</p>;
      }
    const removeReview = async () => {
        await deleteReview({ id, token });
      };
      const navBack = async ()=>{
        navigate("/users")
      }
      function handleSubmit(){
        removeReview();
        navBack();
      }
      if(token){
   return(
       <div>
       <h1>Are you sure you want to delete this Review?</h1>
       <div className="delete-rc">
                {data.review.txt}
                <p className="stars">Stars:{data.review.score}</p>
            </div>
       <button onClick={handleSubmit}>Yes</button>
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
export default DeleteReview;