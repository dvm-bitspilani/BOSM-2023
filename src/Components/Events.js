import React ,{useState , useEffect , useRef} from "react";
import { motion } from "framer-motion";
import * as styles from "../Styles/Events.module.css";
import Tennis from "../images/tennis.png";

const slides = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
];

const Events = props =>{

    let degrees = 20;
    let diameter = 1800;

    const slidesRef = useRef([]);

    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(0);
    const [coordX, setCoordX] = useState(0);
  
    const slideWidth = diameter / slides.length;
    const centerIndex = Math.round(slides.length / 2);
  
    const onUpdate = (latest) => {
      setCoordX(latest.x);
    };
  
    const handleModifyTarget = (target) => {
      const snapTarget = Math.round(target / slideWidth) * slideWidth;
  
      return snapTarget;
    };
  
    useEffect(() => {
      slidesRef.current = slidesRef.current.slice(0, slides.length);
    }, [slides]);
  
    useEffect(() => {
      const activeIndex = slidesRef.current.findIndex(
        (slide, index) =>
          getComputedStyle(slide).getPropertyValue("transform") === "none"
      );
  
      if (!isDragging) {
        setActive(activeIndex);
      }
    }, [isDragging]);

    return(
        <section className={styles.eventsSection}>
            <h3>EVENTS</h3>
            <div className={styles["carouselContainer"]}>
                <motion.div
                    drag="x"
                    onUpdate={onUpdate}
                    dragElastic={0}
                    dragConstraints={{
                        right: slideWidth * centerIndex,
                        left: -(slideWidth * (slides.length - (centerIndex + 1)))
                    }}
                    dragTransition={{
                        power: 0.01,
                        timeConstant: 200,
                        modifyTarget: handleModifyTarget
                    }}
                    >
                    <div className={styles["personsContainer"]}>
                        {slides.map((slide, index) => {
                        const isActive = active === index;
                        const rotate = (index - centerIndex) * degrees;
                        const divider = slideWidth / degrees;

                        return (
                            <motion.div
                            key={index}
                            ref={(el) => (slidesRef.current[index] = el)}
                            className={`${styles.person} ${isActive ? styles.active : ''}`}
                            animate={{
                                rotate: coordX / divider + rotate,
                                transformOrigin: `50% ${diameter}px`
                            }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.5
                            }}
                            onAnimationStart={() => setIsDragging(true)}
                            onAnimationComplete={() => setIsDragging(false)}
                            >
                            <img src={slide} alt="" />
                            </motion.div>
                        );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;