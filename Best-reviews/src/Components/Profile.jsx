import { useGetUserQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function Profile({token}){
    const { data = {}, error, isLoading } = useGetUserQuery(token);
    const navigate = useNavigate();
    const { id } = useParams();
    
    
   

    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <h3>Something went wrong!</h3>;
    }
  
    if (data?.user) {
      const { username, reviews, comments  } = data.user;
  
      return (
        <section className="padding account">
          <h1>Profile</h1>
          <div>
            <p className="username">{username}</p>
            <ul className="profile-reviews">
            Reviews: {reviews.map((review) => (
            <li className="reviews" key={review.id}>
              {review.txt} score: {review.score}
              <button onClick={() => navigate(`reviews/${review.id}`)}>Edit</button>
              <button onClick={()=> navigate(`delete/reviews/${review.id}`)}>Delete</button>
            </li>
            ))}
          </ul>
          <ul className="profile-comments">
            Comments: {comments.map((comment) => (
            <li className="comments" key={comment.id}>
              {comment.comment}
              <button onClick={() => navigate(`comments/${comment.id}`)}>Edit</button>
              <button onClick={()=> navigate(`delete/comment/${comment.id}`)}>Delete</button>
            </li>
            ))}
          </ul>
          </div>
        </section>
      );
    }
  if(!data.user)
    return (
        navigate("/items")
    );
}

export default Profile;