import StepCard from "./step_card";

const StepsList = ({ steps, activeStep, handleStepChange, prevStep,progress,handleTimeUpdate,videoRef }) => {
  return (
    <div className="md:w-1/2 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center justify-between min-h-[450px] space-y-2">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            step={step} 
            index={index} 
            activeStep={activeStep} 
            handleStepChange={handleStepChange} 
            prevStep={prevStep} 
            progress={progress}
            handleTimeUpdate={handleTimeUpdate}
            videoRef={videoRef}
          />
        ))}
      </div>
    </div>
  );
};

export default StepsList;