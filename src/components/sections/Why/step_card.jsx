"use client";
import { motion, AnimatePresence } from "framer-motion";

const StepCard = ({ step, index, activeStep, handleStepChange, prevStep,progress }) => {



  return (
    <div key={index} className="w-[90%] md:w-full">
      <div
        onClick={() => handleStepChange(index)}
        className="p-5 py-[30px] rounded-md shadow-lg cursor-pointer bg-white text-black transition-all duration-300 overflow-hidden"
      >
        <div className="flex flex-row items-center">  
          <p className="w-5 h-5 rounded-sm mr-2 flex items-center justify-center text-xs   text-center bg-[#D9D9D9]   font-semibold">
            {index + 1}
          </p>
          <h3 className="text-xl text-customBlue font-semibold">{step.title}</h3>
        </div>

        {/* Description avec animation */}
        <AnimatePresence mode="sync">
          {index === activeStep && (
            <motion.p 
              className="text-black mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {step.description}
            </motion.p>
          )}
        </AnimatePresence>

        {index === activeStep && (
          <div className="w-full bg-gray-300 h-1 mt-2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#008CFF]"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        )}
      </div>

      {/* Vidéo sous la carte active en mobile */}
      <AnimatePresence mode="wait">
        {index === activeStep && (
          <motion.div
            className="block md:hidden mt-4"
            initial={{ opacity: 0, height: 0, y: prevStep > activeStep ? -50 : 50 }} 
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <video 

              className="rounded-xl shadow-lg w-full h-auto object-cover border border-customGray"

              src={step.video}
              autoPlay
              muted
              playsInline
              onEnded={()=>handleStepChange(activeStep+1)}

            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepCard;