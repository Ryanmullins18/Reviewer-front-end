import { useState } from "react";
import { useEditCommentMutation } from "../redux/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function EditCommentForm({token}){
     const navigate=useNavigate();
    const initialForm = {
        comment: ""
    }
const { id } = useParams();
const[error, setError] = useState(null);
const [form, updateForm]= useState(initialForm)
const [editComment] = useEditCommentMutation();
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

const {data, error}= await editComment({id, token, body: form});
console.dir(token)
};

    return(
        <div>
            <h2>Edit comment form</h2>
            {error && <p>{error}</p>}
            <form>
                <label>
                    Comment
                    <input name="comment" value={comment} onChange={handleChange}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={() => navigate(`/users`)}>Back</button>
        </div>
    )
}
export default EditCommentForm;