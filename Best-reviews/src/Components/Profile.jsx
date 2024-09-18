import { useGetUserQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"




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
            <img className="profile-page-img" src={logo} alt="" />
          <h1>Profile</h1>
            <p className="username">{username}</p>
            <ul className="profile-reviews-wrapper">
            Reviews: {reviews.map((review) => (
            <li className="profile-reviews" key={review.id}>
              {review.txt} <p className="stars">Stars: {review.score}</p>
              <button className="reviews-button" onClick={() => navigate(`reviews/${review.id}`)}>Edit</button>
              <button className="reviews-button" onClick={()=> navigate(`delete/reviews/${review.id}`)}>Delete</button>
            </li>
            ))}
          </ul>
          <ul className="profile-comments-wrapper">
            Comments: {comments.map((comment) => (
            <li className="profile-comments" key={comment.id}>
              {comment.comment}
              <button className="reviews-button" onClick={() => navigate(`comments/${comment.id}`)}>Edit</button>
              <button className="reviews-button" onClick={()=> navigate(`delete/comment/${comment.id}`)}>Delete</button>
            </li>
            ))}
          </ul>
        </section>
      );
    }
  if(!data.user)
    return (
        navigate("/items")
    );
}

export default Profile;