import style from "./Modal.module.scss"

export const Modal = ({ handleModal, isModalOpen, title, children }) => {


  return (
    <>
       {isModalOpen && (
        <div className={style.modalBg}>
          <article className={style.modalStyle}>
            <h2>{title}</h2>
            <button onClick={handleModal}>Close</button>
            {children}
          </article>
        </div>
      )}
    </>
  )
}
