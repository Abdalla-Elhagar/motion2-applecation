import { motion } from "framer-motion";

export default function About() {
    return(
        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:0}}
        exit={{y:'-100vh'}}
        transition={{duration:0.5}}
        className="about grid justify-center content-center bg-blue-500 h-screen">About</motion.div>
    );
}