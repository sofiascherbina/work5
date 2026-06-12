export default function StatusMessage({ type, text}){
   return <p className={`status status--${type}`}>{text}</p>;
}


