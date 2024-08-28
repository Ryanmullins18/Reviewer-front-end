import { useGetItemQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import salad_img from "../assets/salad_img.jpg"
import { useNavigate } from "react-router-dom";

function SingleItem(){
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
  if(data){  
    const { name, description, reviews, review_id } = data?.item;
    
    console.log(data)
    console.log(reviews)
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
            </div>
      
      </section>
    );

 };
};

export default SingleItem;