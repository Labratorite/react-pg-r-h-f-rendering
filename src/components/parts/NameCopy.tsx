import React from "react";
import { useWatch, useFormContext } from "react-hook-form";
import InputStateInfo from "./InputStateInfo";
import logger from "src/logger";
import "src/style.scss";

const NameCopy: React.FC = () => {
  logger.info("NameCopy", "RE-RENDER");
  const {
    register,
    setValue
    //control
    // formState: {errors} // BaseContainerからRerenderされた
  } = useFormContext();
  //const { errors, isDirty } = useFormState({ control }); // これなら大丈夫
  const baseName = useWatch({ name: "baseName" });
  //React.useLayoutEffect(() => {
  //いらない
  setValue("copyName", baseName);
  //}, [baseName])

  return (
    <>
      <div>
        <label htmlFor="copyName">copyName</label>
        <input {...register("copyName", { maxLength: 10, required: true })} />
      </div>
    </>
  );
};

export default NameCopy;
