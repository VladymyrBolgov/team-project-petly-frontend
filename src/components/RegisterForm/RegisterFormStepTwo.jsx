import { ErrorMessage } from 'formik';
import { BoxInput, InputFormik, Label, ErrorText } from './RegisterForm.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const RegisterFormStepTwo = () => {
  return (
    <BoxInput>
      <Label>
        <InputFormik name="name" placeholder="Name" />
      </Label>
      <FormError name="name" />
      <Label>
        <InputFormik name="location" placeholder="Location" />
      </Label>
      <FormError name="location" />
      <Label>
        <InputFormik name="phone" placeholder="Mobile phone" maxLength="13" />
      </Label>
      <FormError name="phone" />
    </BoxInput>
  );
};
