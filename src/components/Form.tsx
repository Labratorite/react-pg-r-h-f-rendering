import React from "react";
import { useFormContext } from "react-hook-form";
//import { UseFormReturn } from "react-hook-form";
import logger from "../logger";
import NameCopy from "./NameCopy";
import ClearError from "./ClearError";
import InputStateInfo from "./InputStateInfo";
import { FormParams } from "./types";

const Form: React.FC<FormParams> = () => {
  logger.info("Form", "RE-RENDER");
  const { register } = useFormContext();
  return (
    <>
      <div>
        <label htmlFor="baseName">baseName</label>
        <input
          {...register("baseName", {
            maxLength: 10,
            required: { value: true, message: "baseNameは必須です" }
          })}
        />
        <InputStateInfo name="baseName" />
        <NameCopy />
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input {...register("title")} />
      </div>
      <ClearError />
    </>
  );
};

export default Form;
