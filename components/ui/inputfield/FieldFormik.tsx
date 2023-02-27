import { useField } from 'formik';
import { InputField, SelectField } from './index';
import type { InputFieldProps } from './InputField';
import type { SelectFieldProps } from './SelectField';

interface Identifiable {
  name: string;
}

/** Input Field using formik. See https://formik.org/ */
export const InputFieldFormik = (props: InputFieldProps & Identifiable) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <InputField
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isError={!!meta.error}
      errorMessage={meta.error}
      {...props}
    />
  );
};

export const SelectFieldFormik = (props: SelectFieldProps & Identifiable) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <SelectField
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isError={!!meta.error}
      errorMessage={meta.error}
      {...props}
    />
  );
};
