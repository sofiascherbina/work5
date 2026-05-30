import { useMemo } from "react";

// const numbers = [10, 20, 30, 40, 50];
// export default function Count(){
//     const sum =  useMemo(()=>{
//        return numbers.reduce((acc, num) => acc+num, 0)
//     }, [numbers])
//     return(
//         <>
//         <p>{sum}</p>
//         </>
//     )
// }


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
export default function Count(){
    const result = useMemo(()=>{
        return numbers.filter(num => num % 2 === 0).join(', ')
    }, [numbers])
    return(
        <> 
        <p>{result}</p>
        </>
    )
}