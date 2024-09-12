import { useGetItemQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import salad_img from "../assets/salad_img.jpg"
import { useNavigate } from "react-router-dom";
import "../../src/index.css"
import { useState } from "react";


function SingleItem({token}){
  const navigate = useNavigate()
    const { id } = useParams();
    const { data = {}, error, isLoading } = useGetItemQuery(id);
    const [showText, setShowText] = useState(false);
  console.log(data)
  if (isLoading) {
    return <p className="cent">Loading Reviews...</p>;
  }
  
  if (error) {
    console.log(error);
    return <p className="cent">Something went wrong, please try again!</p>;
  }
  if(!data.item){
    return <p className="cent">Loading Reviews...</p>;
  }
  const { name, description, reviews, img_url} = data?.item;   
  
  if(token){  

    return (
      <section className="wrapper">
        <h1> {name}</h1>
        <img className="item-img" src={img_url} />
        
        <h3>
          Description: {description} 
        </h3>
        <button onClick={() => navigate(`/reviews/${data.item.id}`)}>Add Review</button>
            <div className="item-reviews">
              
          {reviews.map((review) => (
            <li key={review.id} className="reviews">
              {review.txt} 
              <div className="stars">
            Stars: {review.score}
            </div> 
            <button key={review.comment} onClick={() => setShowText(!showText)}>Comments</button>
      {showText && <div>{review.comments && review.comments.map((comment)=>(
        <li key={comment.id} className="comments">
              {comment.comment}
              </li>
              ))}
              </div>}
              <button onClick={() => navigate(`/comments/${review.id}`)}>Add Comment</button>
            </li>
            ))}
         
          
          
            </div>
      
      </section>

    );
    
  };
  return (
    <section className="wrapper">
      <h1> {name}</h1>
      <img className="item-img" src={img_url} />
      
      <h3>
        Description: {description} 
      </h3>
          <div className="item-reviews">
            
        {reviews.map((review) => (
          <li key={review.id} className="reviews">
            Review: {review.txt}
            <div className="stars">
            Stars: {review.score}
            </div> 
            <div>
           
              <button key={review.id} onClick={() => setShowText(!showText)}>Comments</button>
      {showText && <div>{review.comments && review.comments.map((comment)=>(
        <li key={comment.id} className="comments">
              {comment.comment}
              </li>
              ))}
              </div>}
              </div>
          </li>
          ))}
        
        
        <button className="login-to-add" onClick={() => navigate(`/login`)}>Login to add a review or comment!</button>
          </div>
    
    </section>

  );
 
};

export default SingleItem;