"use client";
import { useState, useRef, useEffect } from "react";
import HowItWorksHeader from "./how_it_works_header";
import StepsList from "./steps_list";
import VideoDisplay from "./video_display";
import { Space_Grotesk } from "next/font/google";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";


const space = Space_Grotesk({ subsets: ["latin"], display: "swap" });
 

const stepsJoin = [
  {
    title: "Ne pas se blesser",
    description: "Prépare ton corps pour profiter de la saison sans pépins.",
    video: "/video/video_demo_add.mp4"
  },
  {
    title: "Simple & accessible",
    description: "Des exercices simples et sans matériel, accessibles partout, dans une plateforme intuitive.",
    video: "/video/video_demo_booking.mp4"
  },
  {
    title: "Rapide & efficace",
    description: "La clé, c’est la régularité : des séances d’environ 45 minutes suffisent pour progresser.",
    video: "/video/video_demo_booking.mp4"
  },
  {
    title: "Pensé pour le ski",
    description: "Un programme créé par un skieur pro, pensé pour tous les passionnés de glisse.",
    video: "/video/video_demo_landing.mp4"
  },
 
];

const HowItWorks = ({}) => {


  const [activeStep, setActiveStep] = useState(0);
  const steps = stepsJoin;
  const [prevStep, setPrevStep] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef(null);

  

  useEffect(() => {
    const video = videoRef.current;

    // If no video element, reset progress and stop any RAF
    if (!video) {
      cancelAnimationFrame(animationFrameRef.current);
      setProgress(0);
      return;
    }

    // Reset to start of the new step and progress
    try {
      video.currentTime = 0;
    } catch (_) {}
    setProgress(0);

    const handlePlay = () => {
      cancelAnimationFrame(animationFrameRef.current);
      updateProgress();
    };
    const handlePause = () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
    const handleEnded = () => {
      cancelAnimationFrame(animationFrameRef.current);
      setProgress(100);
    };
    const handleLoadedMetadata = () => {
      // Ensure duration is known before starting interpolation (iOS Safari)
      setProgress(0);
      updateProgress();
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Try to autoplay on step change (muted + playsInline required on iOS)
    if (video.paused) {
      video.play().catch(() => {});
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [activeStep]);

  const updateProgress = () => {
    const el = videoRef.current;
    if (!el) return;
    // Ensure metadata is loaded
    const duration = el.duration && isFinite(el.duration) ? el.duration : 0;
    if (duration > 0) {
      const currentTime = el.currentTime || 0;
      const newPct = (currentTime / duration) * 100;
      setProgress((prev) => prev + (newPct - prev) * 0.2);
    }
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };
 
  const handleStepChange = (index) => {

    if (index !== activeStep && index < steps.length) {
      setProgress(0);
      setPrevStep(activeStep);
      setActiveStep(index);
    }else{
      setProgress(0);
      setPrevStep(activeStep);
      setActiveStep(0);
    }
  };

  return (
    <motion.section
      className={`${space.className} py-0 bg-[#008CFF] `}
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeUp}><HowItWorksHeader /></motion.div>
      <div className={`relative max-w-6xl lg:py-5 mx-auto flex flex-col md:flex-row h-full z-50 items-start gap-4`}>
        {/* Colonne cartes (animated, layout-safe) */}
        <motion.div
          variants={fadeUp}
          className="basis-full md:basis-1/2 min-w-0  "
        >
          <StepsList
            progress={progress}
            videoRef={videoRef}
            steps={steps}
            activeStep={activeStep}
            handleStepChange={handleStepChange}
            prevStep={prevStep}
          />
        </motion.div>
  
        {/* Colonne vidéo (animated, layout-safe) */}
        <motion.div
          variants={fadeUp}
          className="basis-full md:basis-1/2 min-w-0"
        >
          <VideoDisplay
            handleStepChange={handleStepChange}
            videoRef={videoRef}
            steps={steps}
            activeStep={activeStep}
            prevStep={prevStep}
          />
        </motion.div>
      </div>
      <motion.div variants={fadeUp} className=" w-full py-4 flex justify-center">
        <Button
          variant="whiteOnBlue"
          className="mb-10 mt-5 z-50  font-bold"
          size="lg"
        >
          Tout ça pour seulement 19,99 €
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;