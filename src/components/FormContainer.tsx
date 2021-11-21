import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormFields } from "./types";
import Form from "./Form";
import logger from "../logger";
import { DevTool } from "@hookform/devtools";

const initValues: FormFields = {
  baseName: "",
  copyName: "",
  title: ""
};

const onBarClick = () => {
  logger.info("------", "------");
};
const FormContainer: React.FC = () => {
  logger.info("FormContainer", "RE-RENDER");
  const methods = useForm<FormFields>({
    //reValidateMode: 'onBlur',
    defaultValues: initValues
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (values: FormFields) => {
    logger.info("FormContainer", "-SUBMIT");
    console.log("onSubmit", values);
  };

  return (
    <FormProvider {...methods}>
      <DevTool control={control} placement="top-left" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form />
        <button type="submit">submit</button>
      </form>
      <button type="button" onClick={onBarClick}>
        bar
      </button>
    </FormProvider>
  );
};

export default FormContainer;
