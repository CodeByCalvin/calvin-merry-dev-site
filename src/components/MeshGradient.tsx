import { motion, useScroll, useTransform } from "framer-motion";
import "../css/meshGradient.css";

export default function MeshGradient() {
  const { scrollY } = useScroll();

  const blob1Y = useTransform(scrollY, [0, 1000], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 1000], [0, -80]);
  const blob3Y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="mesh-gradient" aria-hidden="true">
      <motion.div className="mesh-blob mesh-blob-1" style={{ y: blob1Y }} />
      <motion.div className="mesh-blob mesh-blob-2" style={{ y: blob2Y }} />
      <motion.div className="mesh-blob mesh-blob-3" style={{ y: blob3Y }} />
    </div>
  );
}
