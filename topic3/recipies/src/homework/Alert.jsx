export default function Alert({text, type}){
    const bgColour = type==='success' ? 'green' : type === 'error' ? 'red' : 'grey';
    return (
        <p style={{backgroundColor : bgColour, width : '100px'}}>{text}</p>
    )
}