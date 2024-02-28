import React from 'react'
import {motion} from 'framer-motion'

const Box = () => {
  return (
    <motion.div className="box" whileHover={{background: 'lightgray', color: 'black'}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel at atque, quos, in corrupti nesciunt quis ullam impedit eaque et necessitatibus nobis sed. Dolores a maiores harum similique hic adipisci.
            Deserunt corporis in, earum delectus exercitationem, suscipit magni illum ea cupiditate numquam impedit possimus hic a quam quod voluptatum, et illo pariatur voluptates tempore dicta quibusdam totam dolor similique. Nesciunt!
            Doloremque veritatis arum quia dolorum nesciunt? Officiis laudantium modi veritatis atque reprehenderit aspernatur blanditiis voluptatem. Omnis ea dolor quisquam qui iure adipisci dolores. Quam, possimus. Facere veritatis nobis maiores porro!</p>
            <button>Go</button>
        </motion.div>
  )
}

export default Box
