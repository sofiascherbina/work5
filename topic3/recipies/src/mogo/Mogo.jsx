import MogoHeader from "./MogoHeader";
import MogoMain from "./MogoMain";
import MogoFooter from "./MogoFooter";
import member from "./members.json";
export default function(){
    return (
        <>
            <MogoHeader/>
            <MogoMain members={member}/>
            <MogoFooter/>
        </>
    )
}