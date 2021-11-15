import React from "react";
import { useWatch, useFormContext, useFormState } from "react-hook-form";
import { FormFields } from "./types";
import logger from "../logger";
import "../style.scss";

const ClearError: React.FC = () => {
  logger.info("ClearError", "RE-RENDER");
  const { clearErrors, control } = useFormContext<FormFields>();
  //const { isDirty } = useFormState({ control });
  //const title = useWatch({ name: "title" });
  //React.useEffect(() => clearErrors(), [title, clearErrors]);

  const onclick = () => {
    clearErrors();
  };

  return (
    //isDirty && (
    <button type="button" onClick={onclick}>
      clear
    </button>
    //)
    //title && <div>cleared!{title}</div>
  );
};

export default ClearError;
