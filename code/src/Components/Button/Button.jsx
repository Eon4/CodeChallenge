import button from './Button.module.scss'
export function Button({ text, bgColor, action, sizeW, sizeH }) {

    return (
        <>
            <button className={button.animation} onClick={action}
                //Height er halvt så stor som width, på den måde kan man bruge {size} to gange
                style={{ backgroundColor: bgColor, width: sizeW, height: sizeH}}>
                
                {text}
                
            </button >
        </>
    )
}
