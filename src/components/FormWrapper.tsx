import { ReactNode } from "react";

type FormWrapperProps = {
  stepTitle: string
  title: string,
  description: string,
  children: ReactNode,
};

export function FormWrapper ({stepTitle, title, description, children}: FormWrapperProps) {
  return (
  <>
    <p className="step_title">{ stepTitle }</p>
    <h2 className="title">{ title }</h2>
    <h3 className="desc">{ description }</h3>
    <div className="form_wrapper">{children}</div>
  </>
  )
}