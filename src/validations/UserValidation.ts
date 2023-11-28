import { object, string } from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const userSchema = object({
  firstName: string().max(16).required("The first name is required")
    .matches(/^[A-Za-z]+[A-Za-z_-\s]+[A-Za-z]+$/i,"Must Contain Alphatic Characters"),
  lastName: string().max(16).required("The last name is required")
  .matches(/^[A-Za-z]+[A-Za-z_-\s]+[A-Za-z]+$/i,"Must Contain Alphatic Characters, and must not be between 3 and 16 characters"),
  email: string().required("The email is required").email("The email address is invalid"),
  tel: string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
  password: string().required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirm_pwd: string().required('Confirm password is required'),
  brandName: string().max(25).required("The Brand name is required")
  .matches(/^[A-Za-z]+[A-Za-z_-\s]+[A-Za-z]+$/i,"Must Contain only Alphabetic Characters"),
  brandType: string().max(25).required("The Brand type is required")
  .matches(/^[A-Za-z]+[A-Za-z_-\s]+[A-Za-z]+$/i,"Must Contain Alphabetic Characters"),
  street: string().max(30).required("The Street Address is required")
  .matches(/^[A-Za-z\d]+[A-Za-z_-\s\d]+[A-Za-z\d]+$/i,"Must Contain Alphabetic or Number Characters"),
  city: string().max(20).required("The City is required")
  .matches(/^[A-Za-z]+[A-Za-z_-\s]+[A-Za-z]+$/i,"Must Contain Alphabetic Characters"),
  zip: string().max(20).required("The Zip Code is required")
  .matches(/^[0-9]{4,}$/i,"Must Contain only number Characters"),
  taxId: string().min(3).max(20).required("The Tax ID Number is required")
  .matches(/^[0-9]{4,}$/i,"Must Contain only number Characters"),
});
