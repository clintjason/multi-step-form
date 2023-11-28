import { FormEvent, useState } from 'react';
import { AccountForm } from './components/AccountForm';
import { AddressForm } from './components/AddressForm';
import './App.css';
import { useMultistepForm } from './CustomHooks/useMultistepForm'
import { UserForm } from './components/UserForm';
import { userSchema } from './validations/UserValidation';
import { reach, StringSchema } from 'yup'

function App() {
  
  type FormData = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirm_pwd: string
    tel: string
    brandName: string
    brandType: string
    street: string
    city: string
    zip: string
    taxId: string
  }
  
  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_pwd: "",
    tel: "",
    brandName: "",
    brandType: "",
    street: "",
    city: "",
    zip: "",
    taxId: "",
  }

  const documents = [
    {
      id: '1',
      name: 'Electronically sign the agreement(s)',
      isSigned: true,
      link: '#',
    },
    {
      id: '2',
      name: 'Non adult beverage kroger market supplier waiver and release',
      isSigned: false,
      link: '#',
    },
  ];

  const [data, setData] = useState(INITIAL_DATA)
  const [error, setError] = useState(INITIAL_DATA)

  function updateField (field: Partial<FormData>): void {
    setData(prev => {
      return { ...prev, ...field} // Overwrite previous fields with new values
    })
  }

  async function updateFields(fields: Partial<FormData>): Promise<void> {

    try {
      const fieldObjectSchema = reach(userSchema, Object.keys(fields)[0]) as StringSchema<string>
      
      // Validate just the parsed field object
      if(Object.values(fields)[0] === '') {
        
        setData(prev => {
          return { ...prev, ...fields} // Overwrite previous fields with new values
        })
        await fieldObjectSchema.validate(Object.values(fields)[0])
      } else {

        if(Object.keys(fields)[0] == 'confirm_pwd') {
          if(data.password.localeCompare(Object.values(fields)[0]) != 0) {
            throw new Error("Password must match")
          }
          setData(prev => {
            return { ...prev, ...fields} // Overwrite previous fields with new values
          })
    
          setError(prev => {
            return { ...prev, ...{ [Object.keys(fields)[0]] : ''}}
          })
        } else {
          await fieldObjectSchema.validate(Object.values(fields)[0])

          setData(prev => {
            return { ...prev, ...fields} // Overwrite previous fields with new values
          })
    
          setError(prev => {
            return { ...prev, ...{ [Object.keys(fields)[0]] : ''}}
          })
          
        }
      }

    } catch (error: any) {
      setError(prev => {
        return { ...prev, ...{ [Object.keys(fields)[0]] : error.message}}
      })
    }
  }

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, previousStep, nextStep } = useMultistepForm([
    <UserForm {...data}  updateFields={updateFields} updateField={updateField} error={error} />, 
    <AddressForm {...data} updateFields={updateFields} updateField={updateField} error={error} documents={documents} />, 
    <AccountForm {...data} updateFields={updateFields} />]
  );
  
  
  function onSubmit(e: FormEvent) {
    e.preventDefault(); // Prevent default browser reload
    const isAnyValueNotEmpty = Object.values(error).some(value => value.trim() !== '');
    if(isAnyValueNotEmpty) { // check for errors
      return;
    } else {
      if (!isLastStep) return nextStep();
      console.log("The form entries are: ", data)
    }
  }


  /* const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (!isLastStep) return nextStep();
    alert("Submit Clicked")
  } */

  return (
    <>
      <nav className='nav'>
        <div className='nav__logo'><i className="fa fa-globe" aria-hidden="true"></i></div>
        <h1 className='nav__title'>Create New Account</h1>
        <a href="#">Contact Us</a>
      </nav>
      <form onSubmit={onSubmit}>
        <div className='wrapper'>
          <div className='form_header'>
            <div className={1 === currentStepIndex + 1 ? 'active form_header_item' : 'form_header_item' }>
              <span className='rounded'>1</span>
              <span className='form_header__title'>Your Profile</span>
            </div>
            <div className={ 2 === currentStepIndex + 1 ? 'active form_header_item' : 'form_header_item' }>
              <span className='rounded'>2</span>
              <span className='form_header__title'>Business Information</span>
            </div>
            <div className={3 === currentStepIndex + 1 ? 'active form_header_item' : 'form_header_item' }>
              <span className='rounded'>3</span>
              <span className='form_header__title'>Additional Users</span>
            </div>        
          </div>
            {/* <div className='form_header'>
              <div className={1 === currentStepIndex + 1 ? 'active form_header_item' : 2 === currentStepIndex + 1 ? 'active activated form_header_item' : 3 === currentStepIndex + 1 ? 'active activated form_header_item' : 'form_header_item' }>
                <span className='rounded'>1</span>
                <span className='form_header__title'>Your Profile</span>
              </div>
              <div className={ 2 === currentStepIndex + 1 ? 'active form_header_item' : 3 === currentStepIndex + 1 ? 'active form_header_item' : 'form_header_item' }>
                <span className='rounded'>2</span>
                <span className='form_header__title'>Business Information</span>
              </div>
              <div className={3 === currentStepIndex + 1 ? 'active form_header_item' : 'form_header_item' }>
                <span className='rounded'>3</span>
                <span className='form_header__title'>Additional Users</span>
              </div>        
            </div> */}
          { step }
        </div>
        <div className='flex_wrapper'>
          <a href="#"><i className="fa fa-angle-left fa-2x p-r" aria-hidden="true" style={{ verticalAlign: 'text-bottom'}}></i> <span className='btn_text'>Back to Login</span></a>
          <div className='btn_wrapper'>
            { !isFirstStep && <button className='btn_prev' type="button" onClick={previousStep}><i className="fa fa-angle-left fa-2x p-r" aria-hidden="true" style={{ verticalAlign: 'text-bottom'}}></i> <span className='btn_text'>Previous Step</span></button> }
            <button className='btn_next' type="submit"> <span className='btn_text'>{ isLastStep ? "Submit" : "Next Step"}</span> <i className="fa fa-angle-right fa-2x p-l" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    </>
  )
}

export default App;
