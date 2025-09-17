const VideoDisplay = ({ steps, activeStep,videoRef,handleStepChange }) => {
  
  return (
    <div className="hidden md:flex h-full items-stretch border rounded-xl">
      <video 
        ref={videoRef}
        src={steps[activeStep].video}
        className="rounded-xl shadow-lg min-h-[450px] border border-customGreen w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        onEnded={()=>handleStepChange(activeStep+1)}
      />
    </div>
  );
};

export default VideoDisplay;