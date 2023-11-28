import { FormWrapper } from "./FormWrapper"

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

const stepTitle: string = "Step 3"
const title: string = "Finished Setup"
const description: string = "Thanks for completing all the steps."

export function AccountForm({
  
}: AccountFormProps) {
  return (
    <FormWrapper  title={title} stepTitle={stepTitle} description={description}>
      {/* <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      /> */}
    </FormWrapper>
  )
}