import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Form, { FormFields } from "./Form";
import logger from "../logger";

const initValues: FormFields = {
  baseName: "",
  copyName: "",
  title: ""
};

const onclick = () => {
  logger.info("------", "------");
};
const BaseContainer: React.FC = () => {
  logger.info("BaseContainer", "RE-RENDER");
  const methods = useForm<FormFields>({ defaultValues: initValues });
  const { handleSubmit } = methods;

  const onSubmit = (values: FormFields) => {
    logger.info("BaseContainer", "SUBMIT");
    console.log("onSubmit", values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form />
        <button type="submit">submit</button>
      </form>
      <button type="button" onClick={onclick}>
        bar
      </button>
    </FormProvider>
  );
};

export default BaseContainer;
