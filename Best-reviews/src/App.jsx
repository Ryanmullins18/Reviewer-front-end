import {Routes, Route} from 'react-router-dom'
import Items from './Components/Items';
import NavBar from './Components/NavBar'
import Register from './Components/Register'
import Splash from './Components/Splash';
import Login from './Components/Login';
import SingleItem from './Components/SingleItem';
import Profile from './Components/Profile';
import './App.css'
import { useState } from 'react';
import ReviewForm from './Components/ReviewForm';
import CommentForm from './Components/CommentForm';
import EditReviewForm from './Components/EditReviewForm';
import DeleteReview from './Components/DeleteReview';
import DeleteComment from './Components/DeleteComment';
import EditCommentForm from './Components/EditCommentForm';



function App() {
  const[token, setToken] = useState(null);
  return(
    <div>
      <NavBar token={token} setToken={setToken}/>
      
      
      <Routes>
        <Route path='/register' element={<Register setToken={setToken}/>}/>
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/items' element={<Items token={token}/>} />
        <Route path='/' element={<Splash />} />
        <Route path='/items/:id' element={<SingleItem token={token}/>}/>
        <Route path='/reviews/:id' element={<ReviewForm  token={token}/>}/>
        <Route path='/comments/:id' element={<CommentForm  token={token}/>}/>
        <Route path='/users' element={<Profile  token={token}/>}/>
        <Route path='users/reviews/:id' element={<EditReviewForm  token={token}/>}/>
        <Route path='users/comments/:id' element={<EditCommentForm  token={token}/>}/>
        <Route path='users/delete/reviews/:id' element={<DeleteReview  token={token}/>}/>
        <Route path='users/delete/comment/:id' element={<DeleteComment  token={token}/>}/>
      </Routes>
    </div>
  )
  
}

export default App
