/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useState } from "react";
import { useGetItemsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import "../index.css"
import splash_img from "../assets/splash_img.jpg"
import logo from "../assets/logo.png"


const Items = ({token}) => {
  const navigate=useNavigate();
  const {data, isLoading, error} = useGetItemsQuery();
  const [search, setSearch] = useState("");
    
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

  const itemsToDisplay =
      search && data?.items
        ? data.items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
        : data.items;
console.log(data)
if(token){  
  
return (
  
    <div className="wrapper">
      <label>
       
        <input className="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <img src= {logo}/>
    {itemsToDisplay.map((item)=>{
      return(
          <div className="items-box" key={item.id}>
          <img className="item-img" src={item.img_url}/>
          <p>Item: {item.name}</p>
          <p>Description: {item.description}</p>
          {item.reviews?.length > 0 && 
          <div> 
            <p>Latest review of this item : {item.reviews[0].txt}</p>
            <p className="stars">Stars: {item.reviews[0].score}</p>
          </div>
          }
       <button onClick={() => navigate(`/reviews/${item.id}`)}>Add Review</button>
       <button onClick={() => {
                navigate(`/items/${item.id}`);
              }}>Read Reviews</button>
      </div>
      )
            })}
    </div>
  );
};
return (
  
  <div className="wrapper">
    <img src= {logo}/>
    <label>
    {" "} <input className="search" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
    </label>
    
  {itemsToDisplay.map((item)=>{
    return(
        <div className="items-box" key={item.id}>
        <img className="item-img" src={item.img_url}/>
        <p>Item: {item.name}</p>
        <p>Description: {item.description}</p>
        {item.reviews?.length > 0 && 
        <div> 
          <p>Latest review of this item : {item.reviews[0].txt}</p>
          <p className="stars">Stars: {item.reviews[0].score}</p>
        </div>
        }
     <button onClick={() => {
                navigate(`/items/${item.id}`);
              }}>Read Reviews</button>
              <button onClick={()=>{
                navigate("/login");
              }}>Login to add review</button>
    </div>
    )
          })}
  </div>
);
}

export default Items; 