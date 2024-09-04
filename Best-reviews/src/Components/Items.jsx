/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useState } from "react";
import { useGetItemsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import "../index.css"
import splash_img from "../assets/splash_img.jpg"


const Items = ({token}) => {
  const navigate=useNavigate();
  const {data, isLoading, error} = useGetItemsQuery();

  

    
    
  console.log("is Loading",isLoading)
  console.log(data) //.items
  console.log("token", token)
  

  
  if (isLoading) {
    return <p>Loading Items...</p>;
  }

  if (error) {
    console.log(error);
    return <p>Something went wrong, please try again!</p>;
   
  }

if(token){  
  
return (
    <div>
    <h1>items</h1>
    {data.items.map((item)=>(
          <div key={item.id}>
          <img src={splash_img}/>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
          {item.reviews?.length > 0 && 
          <div> 
            <p>Latest review of this item : {item.reviews[0].txt}</p>
            <p>Score: {item.reviews[0].score}</p>
          </div>
          }
       <button onClick={() => navigate(`/reviews/${item.id}`)}>Add Review</button>
       <button onClick={() => {
                navigate(`/items/${item.id}`);
              }}>Read Reviews</button>
      </div>
      
    ))}
    </div>
  );
};
return(
  <div>
    <h1>items</h1>
    {data.items.map((item)=>(
          <div key={item.id}>
          <img src={splash_img}/>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
          {item.reviews?.length > 0 && 
          <div> 
            <p>Latest review of this item : {item.reviews[0].txt}</p>
            <p>Score: {item.reviews[0].score}</p>
          </div>
          }
       <button onClick={() => {
                navigate(`/items/${item.id}`);
              }}>Read Reviews</button>
              <button onClick={()=>{
                navigate("/login");
              }}>Login to add review</button>
      </div>
      
    ))}
    </div>
)
}

export default Items; 