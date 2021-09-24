import { useState } from "react";

function useForm(initialstate) {
  const [state, setState] = useState(initialstate);

  const handleInputChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const reset = () => {
    setState(initialstate);
  };
  return [state, handleInputChange, reset];
}

export default useForm;
