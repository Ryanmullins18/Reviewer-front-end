import { useState } from "react";
import { useNewReviewMutation } from "../redux/api";
import { useParams } from "react-router-dom";

function ReviewForm(token){
    const initialForm = {
        txt: "",
        score: ""
    }
    const { item_id } = useParams();
const[error, setError] = useState(null);
const [form, updateForm]= useState(initialForm)
const [newReview] = useNewReviewMutation(item_id);
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
const {data, error}= await newReview({token, body: form});
console.dir(token)
};

    return(
        <div>
            <h2>review form</h2>
            {error && <p>{error}</p>}
            <form action="">
                <label>
                    Review
                    <input name="txt" value={txt} onChange={handleChange}/>
                </label>
                <label>
                    Stars
                    <input name="score" value={score} onChange={handleChange}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default ReviewForm;