import { motion } from "framer-motion";

export function ExploreButton() {
  return (
    <motion.button
      className="explore-btn md:title-4 shadow-lg"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 100px rgba(255, 255, 255, 1)",
      }} // 滑鼠移入時放大
      whileTap={{ scale: 0.9 }} // 點擊時縮小
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      EXPLORE
    </motion.button>
  );
}
