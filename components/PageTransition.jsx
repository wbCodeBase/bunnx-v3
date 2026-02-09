import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
