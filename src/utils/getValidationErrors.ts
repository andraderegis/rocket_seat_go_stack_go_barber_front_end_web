import { ValidationError } from 'yup';

interface ValidationFormError {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): ValidationFormError {
  const validationError: ValidationFormError = {};

  console.error('error:', err);

  err.inner.forEach(error => {
    if (error.path) {
      validationError[error.path] = error.message;
    }
  });

  return validationError;
}
