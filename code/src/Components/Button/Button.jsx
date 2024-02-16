
export function Button({ text, bgColor, action, size }) {

    return (
        <>
            <button onClick={action}
                //Height er halvt så stor som width, på den måde kan man bruge {size} to gange
                style={{ backgroundColor: bgColor, width: size, height: size / 2 }}>
                
                {text}
                
            </button >
        </>
    )
}
