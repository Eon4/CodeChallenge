export function Grid({ marginTOP, display, size, bgcolor, color, gap, columns, rows, border }) {

    return (
        <>
            <div style={{
                gridTemplateColumns: columns,
                gridTemplateRows: rows,
                display: display,
                gap: gap,
                color: color,
                marginTop: marginTOP
            
            }}>

                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
                <div style={{ border: border, backgroundColor: bgcolor, width: size, height: size }}> </div>
            </div>
        </>
    )
}
