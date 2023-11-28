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
      <></>
    </FormWrapper>
  )
}