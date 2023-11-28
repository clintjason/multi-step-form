import { ReactElement, useState } from 'react';

// parameter to this hook is an array of all the different steps
export function useMultistepForm (steps: ReactElement[]) { // this function is a custom hook
  // Track actual step
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Start at step 1

  // Next Step
  function nextStep() {
    setCurrentStepIndex(i => {
      if(i >= steps.length - 1) return i;
      return i + 1
    })
  }

  // Previous Step
  function previousStep() {
    setCurrentStepIndex(i => {
      if(i <= 0) return i;
      return i - 1 
    })
  }
    
  // Go to step or set current s tep index
  function gotToStep (index: number) {
    setCurrentStepIndex(index)
  }
  
  return {
    currentStepIndex,
    step: steps[currentStepIndex], // Returns the current step
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    gotToStep, // go to speicifc step
    nextStep,
    previousStep,
  }

}