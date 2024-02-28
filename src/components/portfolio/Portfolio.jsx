import React from "react";
import "./Portfolio.scss";
import {motion, useScroll, useSpring} from 'framer-motion'

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://unsplash.com/photos/a-table-topped-with-lots-of-cakes-and-desserts-saphpTOZz_s",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam beatae ipsa inventore! Odit esse numquam, officia dolore molestiae consectetur totam minima illo sunt veritatis dignissimos suscipit illum excepturi fugit!",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://unsplash.com/photos/a-bottle-of-perfume-with-a-flower-on-it-W_mMinc50k8",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam beatae ipsa inventore! Odit esse numquam, officia dolore molestiae consectetur totam minima illo sunt veritatis dignissimos suscipit illum excepturi fugit!",
  },
  {
    id: 3,
    title: "Vue Commerce",
    img: "https://unsplash.com/photos/a-close-up-of-a-tall-building-with-many-windows-wvgLsJuVLq0",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam beatae ipsa inventore! Odit esse numquam, officia dolore molestiae consectetur totam minima illo sunt veritatis dignissimos suscipit illum excepturi fugit!",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://unsplash.com/photos/a-red-bird-sitting-on-top-of-a-white-pole-W0I7BSKfyaA",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aliquam beatae ipsa inventore! Odit esse numquam, officia dolore molestiae consectetur totam minima illo sunt veritatis dignissimos suscipit illum excepturi fugit!",
  },
];

const Single = ({item}) => {
return (
    <section>{item.title}</section>
)
}
const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:['end end', 'start start']})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return <div className="portfolio" ref={ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scaleX}}></motion.div>
    </div>
    {items.map((item)=> {
        return (
            <Single item={item} key={item.id}/>
        )
    })}
  </div>;
};

export default Portfolio;
