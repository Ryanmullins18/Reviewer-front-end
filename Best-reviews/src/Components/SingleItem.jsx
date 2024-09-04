import { useGetItemQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import salad_img from "../assets/salad_img.jpg"
import { useNavigate } from "react-router-dom";

function SingleItem({token}){
  const navigate = useNavigate()
    const { id } = useParams();
    const { data = {}, error, isLoading } = useGetItemQuery(id);
  
  if (isLoading) {
    return <p className="cent">Loading Reviews...</p>;
  }

  if (error) {
    console.log(error);
    return <p className="cent">Something went wrong, please try again!</p>;
  }
  const { name, description, reviews, item, items,  } = data?.item;   
  
  if(token){  

    return (
      <section>
        <h1> {name}</h1>
        <img src={salad_img} />
        
        <h3>
          Description: {description} 
        </h3>
            <div>
              <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              {review.txt} score: {review.score}
              <button onClick={() => navigate(`/comments/${review.id}`)}>Add Comment</button>
            </li>
            ))}
          </ul>
          
          <button onClick={() => navigate(`/reviews/${data.item.id}`)}>Add Review</button>
            </div>
      
      </section>

    );
    
  };
  return (
    <section>
      <h1> {name}</h1>
      <img src={salad_img} />
      
      <h3>
        Description: {description} 
      </h3>
          <div>
            <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.txt} score: {review.score}
          </li>
          ))}
        </ul>
        
        <button onClick={() => navigate(`/login`)}>Login to add a review or comment!</button>
          </div>
    
    </section>

  );
};

export default SingleItem;