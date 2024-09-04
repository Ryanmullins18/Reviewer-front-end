import { useGetUserQuery } from "../redux/api";
import profileicon from "../assets/profileicon.jpg"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Profile({token}){
    const { data = {}, error, isLoading } = useGetUserQuery(token);
    const navigate = useNavigate();

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
            
              {/* using spans so we can capitalize with CSS */}
            <p>{username}</p>
            <ul>
            Reviews: {reviews.map((review) => (
            <li key={review.id}>
              {review.txt} score: {review.score}
              <button>Edit</button>
              <button>Delete</button>
            </li>
            ))}
          </ul>
          <ul>
            Comments: {comments.map((comment) => (
            <li key={comment.id}>
              {comment.comment}
              <button>Edit</button>
              <button>Delete</button>
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