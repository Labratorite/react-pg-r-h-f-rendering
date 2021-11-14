import React from "react";
import { useWatch, useFormContext } from "react-hook-form";
import logger from "../logger";
import "../style.scss";

const ClearError: React.FC = () => {
  logger.info("ClearError", "RE-RENDER");
  const { clearErrors } = useFormContext();
  const copyName = useWatch({ name: "copyName" });
  clearErrors();
  return copyName && <div>cleared!</div>;
};

export default ClearError;
