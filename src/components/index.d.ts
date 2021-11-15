import { UseFormReturn } from "react-hook-form";

export interface FormFields {
  baseName: string;
  copyName: string;
  title: string;
}

export type FormFieldKey = keyof FormFields;

export type FormParams = {
  methods: UseFormReturn<FormFields>;
  onSubmit: (values: FormFields) => void;
};
