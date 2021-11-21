import { DateTime } from "luxon";
/*
// typescript 挙動確認
export interface BaseFormFields {
  baseName: string;
  copyName: string;
  title: string;
  testDate: DateTime;
}

export type FormFields3 = Omit<BaseFormFields, 'testDate'>

export type test1 = Omit<BaseFormFields, 'baseName' | 'title'>

export type test2 = Pick<BaseFormFields, Exclude<keyof BaseFormFields, BaseFormFields>>

//export const result = <T, K extends Partial<T>>(data: K) : Pick<T, keyof K> => void;
//export const result = <T, K extends Partial<T>>(data: K) : {}Pick<T, keyof K> => void;

declare const test: unknown = {
  baseName: 'eee',
  baseName2: 'eee'
}
const butterflies: Partial<BaseFormFields> = test;

export const isPause = <T, K extends Partial<T>>(data: any) : data is K => {
  type DataKeys = keyof typeof data;
  type ExcludedType = Exclude<keyof DataKeys, keyof T>

  type IsExtends = ExcludedType extends never ? false : true;
  type Foo = IsSignal<'green' | 'black'>; // type Foo = boolean

  return typeof ExcludedType === 'never;
}

type testBase = {
  id: number;
  name: string;
  title: string;
}
type testParatial = {
  id: number;
  name: string;
}
type ExcludedType = Exclude<keyof testParatial, keyof testBase>


type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
*/

/*
export const isPause = <T, K extends Partial<T>>(data: K) : data is Partial<T> => {
  type IsExtends = Exclude<keyof typeof data, keyof T> extends never ? false : true;
  const isExtends: IsExtends = true;

  return true;//typeof IsExtends === 'true';
}
*/

//type IsExtends<T> = T extends never ? false : true;

//type IsExtends<T, K extends Partial<T>> = T extends never ? false : true;

export interface FormFields {
  baseName: string;
  copyName: string;
  title: string;
  //testDate: DateTime;
}

export type FormFieldKey = keyof FormFields;

export type FormParams = {
  //methods: UseFormReturn<FormFields>;
  onSubmit?: (values: FormFields) => void;
};
