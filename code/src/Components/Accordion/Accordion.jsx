import { useState } from "react"
import style from "./Accordion.module.scss"


export const Accordion = ({ title, children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <section className={style.accStyle}>
        <div className={style.accHeader} onClick={toggle}>
            <h2>{title}</h2>
            <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && 
        <article className={`${style.accContent} ${style.open}`}>
            {children}
        </article>}
    </section>
  )
}
