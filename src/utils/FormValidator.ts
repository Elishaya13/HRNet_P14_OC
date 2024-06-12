export class Validator {
  static validateAge(value: string): string | boolean {
    const birthDate = new Date(value);
    const today = new Date();

    // Calculate the initial age
    let age = today.getFullYear() - birthDate.getFullYear();
    // Check if the birthday has already occurred this year
    const m = today.getMonth() - birthDate.getMonth();
    // Adjust the age if the current month is before the birth month
    // or it's the birth month but the day is before the birth day
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--; // Decrement the age by 1 as the birthday hasn't occurred yet this year
    }
    return age >= 16 || 'Employee must be at least 16 years old';
  }

  static validateStartDate(value: string, dob: string): string | boolean {
    const startDate = new Date(value);
    const birthDate = new Date(dob);
    let years = startDate.getFullYear() - birthDate.getFullYear();
    const m = startDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && startDate.getDate() < birthDate.getDate())) {
      years--;
    }
    return (
      years >= 16 || 'Start Date must be at least 16 years after Date of Birth'
    );
  }

  static validateLength(min: number, max: number) {
    return {
      minLength: {
        value: min,
        message: `Must be at least ${min} characters`,
      },
      maxLength: {
        value: max,
        message: `Must be at most ${max} characters`,
      },
    };
  }

  static validateNoSpecialChars(value: string): string | boolean {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(value) || 'No special characters are allowed';
  }
}
