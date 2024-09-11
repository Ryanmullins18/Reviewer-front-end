import { useState } from "react";
import { useEditReviewMutation } from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";

function EditReviewForm({token}){
    const initialForm = {
        txt: "",
        score: 0
    }
const navigate= useNavigate()
const { id } = useParams();
const[error, setError] = useState(null);
const [form, updateForm]= useState(initialForm)
const [editReview] = useEditReviewMutation();
const handleChange = ({ target }) => {
    setError(null)
    updateForm({...form, [target.name]: target.value});
};
const {txt, score} = form;
const handleSubmit =async (evt) =>{
    evt.preventDefault();
if(txt === "" || score === ""){
    setError("Please use text and stars")
    return;
}
const {data, error}= await editReview({id, token, body: form});
console.dir(token)
};

    return(
        <div>
            <h2> edit review form</h2>
            {error && <p>{error}</p>}
            <form action="">
                <label>
                    Review
                    <input name="txt" value={txt} onChange={handleChange}/>
                </label>
                <label>
                    Stars
                    <input type="number" step="0.5" name="score" value={score} onChange={handleChange}/>
                </label>
                
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={() => navigate(`/users`)}>Back</button>
        </div>
    )
}
export default EditReviewForm;