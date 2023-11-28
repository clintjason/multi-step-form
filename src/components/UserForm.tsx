import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  password: string,
  confirm_pwd: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void,
  updateField: (field: Partial<UserData>) => void,
  error: any,
}
const stepTitle: string = "Step 1"
const title: string = "Your Profile"
const description: string = "Enter the login information  for your account. You will be able to create additional user after registering"

export function UserForm({ firstName, lastName, email, tel, password, confirm_pwd, updateFields, updateField, error}: UserFormProps) {
  
  return (
    <FormWrapper title={title} stepTitle={stepTitle} description={description}>
      <div className="form_item">
        <label>First Name<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your First Name"
          value={firstName}
          onChange={e => updateField({ firstName: e.target.value })}
          onBlur={e => updateFields({ firstName: e.target.value })}
        />
        {error?.firstName && (
          <p role="alert" className="error_msg">{error?.firstName}</p>
        )}
      </div>
      <div className="form_item">
        <label>Last Name<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your Last Name"
          value={lastName}
          onChange={e => updateField({ lastName: e.target.value })}
          onBlur={e => updateFields({ lastName: e.target.value })}
        />
        {error?.lastName && (
          <p role="alert" className="error_msg">{error?.lastName}</p>
        )}
      </div>
      <div className="form_item">
        <label>Email<span className="make_blue">*</span></label>
        <input
          required
          type="email"
          placeholder="Input Your Email"
          value={email}
          onChange={e => updateField({ email: e.target.value })}
          onBlur={e => updateFields({ email: e.target.value })}
        />
        {error?.email && <p role="alert" className="error_msg">{error?.email}</p>}
      </div>
      <div className="form_item">
        <label>Phone Number<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your Phone Number"
          value={tel}
          onChange={e => updateField({ tel: e.target.value })}
          onBlur={e => updateFields({ tel: e.target.value })}
        />
        {error?.tel && <p role="alert" className="error_msg">{error?.tel}</p>}
      </div>
      <div className="form_item">
        <label>Password<span className="make_blue">*</span></label>
        <input
          required
          type="password"
          placeholder="Input Your Password"
          value={password}
          onChange={e => updateField({ password: e.target.value })}
          onBlur={e => updateFields({ password: e.target.value })}
        />
        {error?.password && <p role="alert" className="error_msg">{error?.password}</p>}
      </div>
      <div className="form_item">
        <label>Confirm Password<span className="make_blue">*</span></label>
        <input
          required
          type="password"
          placeholder="Input Your Confirm Password"
          value={confirm_pwd}
          onChange={e => updateField({ confirm_pwd: e.target.value })}
          onBlur={e => updateFields({ confirm_pwd: e.target.value })}
        />
        {error?.confirm_pwd && <p role="alert" className="error_msg">{error?.confirm_pwd}</p>}
      </div>
    </FormWrapper>
  )
} 
