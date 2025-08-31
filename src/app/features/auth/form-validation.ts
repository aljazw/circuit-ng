import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const FORM_ERROR_MESSAGES: Record<string, Record<string, string>> = {
  username: {
    required: 'USERNAME_REQUIRED',
    minlength: 'USERNAME_TOO_SHORT'
  },
  email: {
    required: 'EMAIL_REQUIRED',
    email: 'EMAIL_INVALID'
  },
  password: {
    required: 'PASSWORD_REQUIRED',
    minlength: 'PASSWORD_TOO_SHORT'
  },
  confirmPassword: {
    required: 'CONFIRM_PASSWORD_REQUIRED',
    match: 'PASSWORDS_DO_NOT_MATCH'
  }
};


export function getErrorMessage(
  control: AbstractControl | null,
  field: string,
  submitted: boolean
): string | null {
  if (!control || !submitted) return null;

  // First check control's own errors
  if (control.errors) {
    const firstErrorKey = Object.keys(control.errors)[0];
    return FORM_ERROR_MESSAGES[field][firstErrorKey] || null;
  }

  // Special case for confirmPassword: check parent FormGroup for passwordsDoNotMatch
  if (field === 'confirmPassword' && control.parent?.errors?.['passwordsDoNotMatch']) {
    return FORM_ERROR_MESSAGES[field]['match'];
  }

  return null;
}

export const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordsDoNotMatch: true };
};

