import { useState } from "react";

function useForm(initialstate) {
    const [state, setState] = useState(initialstate);

    const handleInputChange = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };
    const reset = (newState = initialstate) => {
        setState(newState);
    };
    return [state, handleInputChange, reset];
}

export default useForm;
