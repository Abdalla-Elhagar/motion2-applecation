import { motion } from "framer-motion";

export default function Home() {
    return(
        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:0}}
        exit={{y:'-100vh'}}
        transition={{duration:0.5}}
        className="home justify-center grid content-center bg-amber-500 h-screen">Home</motion.div>
    );
}