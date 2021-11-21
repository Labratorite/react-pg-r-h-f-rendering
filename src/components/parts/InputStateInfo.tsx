import React from "react";
import { useFormContext, useFormState } from "react-hook-form";
import logger from "src/logger";
import "src/style.scss";
import { ErrorMessage } from "@hookform/error-message";
import { FormFieldKey } from "../types";

/*
const NestedInput: React.FC<
  { fieldKey: FormFieldKey } & UseFormReturn<FormFields>
> = (props) => {
  logger.info("NestedInput", "RE-RENDER");
  const {
    fieldKey,
    formState: { errors, isDirty }
  } = props;

  console.log("NestedInput errors", errors);
  return (
    <div className="inputStateInfo">
      <div>dirty? {isDirty && <span>yes</span>}</div>
      <div>
        errors?
        <span>
          <ErrorMessage errors={errors} name={fieldKey} />
        </span>
      </div>
    </div>
  );
};
const NestedInputWapper = React.memo(
  NestedInput,
  (prevProps, nextProps) =>
    prevProps.fieldKey === nextProps.fieldKey &&
    prevProps.formState.isDirty === nextProps.formState.isDirty &&
    prevProps.formState.errors[prevProps.fieldKey] ===
      nextProps.formState.errors[nextProps.fieldKey]
);
*/

const InputStateInfo: React.FC<{ name: FormFieldKey }> = ({ name }) => {
  logger.info("InputStateInfo", "RE-RENDER");
  //const methods = useFormContext<FormFields>();
  const { control } = useFormContext();
  const { errors, isDirty } = useFormState({ control });

  console.log("errors", errors);
  return (
    //<NestedInputWapper fieldKey={name} {...methods} />
    <div className="inputStateInfo">
      <div>dirty? {isDirty && <span>yes</span>}</div>
      <div>
        errors?
        <ErrorMessage errors={errors} name={name} as="span" />
      </div>
    </div>
  );
};

export default InputStateInfo;
