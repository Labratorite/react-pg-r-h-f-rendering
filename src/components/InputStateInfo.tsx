import React from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import logger from "../logger";
import "../style.scss";
import { ErrorMessage } from "@hookform/error-message";
import { FormFieldKey, FormFields } from "./Form";

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

const InputStateInfo: React.FC<{ name: FormFieldKey }> = ({ name }) => {
  logger.info("InputStateInfo", "RE-RENDER");
  const methods = useFormContext<FormFields>();
  //const {control} = useFormContext();
  //const formState = useFormState({ control });
  //const { errors, isDirty } = useFormState({ control }); // これなら大丈夫

  //console.log(errors);
  return (
    <NestedInputWapper fieldKey={name} {...methods} />
    /*
    <p className="inputStateInfo">
      <div>dirty? {isDirty && <span>yes</span>}</div>
      <div>errors?
          <span>
            <ErrorMessage errors={errors} name={name} />
          </span>
      </div>
    </p>
    */
  );
};

export default InputStateInfo;
