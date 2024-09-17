import { useState } from "react";
import { useNewCommentMutation } from "../redux/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function CommentForm({token}){
     const navigate=useNavigate();
    const initialForm = {
        comment: ""
    }
const { id } = useParams();
const[error, setError] = useState(null);
const [form, updateForm]= useState(initialForm)
const [newComment] = useNewCommentMutation();
const handleChange = ({ target }) => {
    setError(null)
    updateForm({...form, [target.name]: target.value});
};
const {comment} = form;
const handleSubmit =async (evt) =>{
    evt.preventDefault();
if(comment === ""){
    setError("Please use text")
    return;
}

const {data, error}= await newComment({id, token, body: form});
console.dir(data)
navigate(`/items/${data.review.item_id}`);
};

    return(
        <div>
            <h2>Comment form</h2>
            {error && <p>{error}</p>}
            <form>
                <label>
                    Comment
                    <input name="comment" value={comment} onChange={handleChange}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default CommentForm;