import { useEffect, useState } from "react"
import style from "./CookieBanner.module.scss"

export const CookieBanner = () => {

    const [isCookie, setIsCookie] = useState(localStorage.getItem("acceptedCookies") === 'true');


    useEffect(() => {
        const cookieAccepted = localStorage.getItem("acceptedCookies") === 'true';
        setIsCookie(cookieAccepted)
    }, []);



    const acceptCookies = () => {
        localStorage.setItem("acceptedCookies", "true")
        setIsCookie(true)
    }

    const denyCookies = () => {
        localStorage.setItem("acceptedCookies", "false")
        setIsCookie(false)
    }

    if (isCookie) {
        return null;
    }

  return (
    <div className={style.cookieStyle}>
      <p>
        Denne hjemmeside bruger cookies til at forbedre din oplevelse. Ved at
        fortsætte accepterer du vores brug af cookies.
      </p>
      <div className={style.buttonContainer}>
        <button onClick={acceptCookies}>Accepter</button>
        <button onClick={denyCookies}>Afvis</button>
      </div>
    </div>
  );
}
