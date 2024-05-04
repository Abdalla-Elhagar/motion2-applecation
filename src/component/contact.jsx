import { motion } from "framer-motion";

export default function Contact() {
    return(
        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:0}}
        exit={{y:'-100vh'}}
        transition={{duration:0.5}}
        className="contact grid content-center justify-center bg-green-500 h-screen">Contact</motion.div>
    );
}