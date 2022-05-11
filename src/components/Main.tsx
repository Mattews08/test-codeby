import {motion} from 'framer-motion'
import {ReactNode} from "react";

const variant = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

type IProps = {
    children: ReactNode
}

export const Main = ({children}: IProps) => (
    <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variant}
        transition={{duration: 0.4, type: 'easeInOut'}}
        style={{position: 'relative'}}
    >
        {children}
    </motion.article>
)