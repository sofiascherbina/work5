import css from "./mogo.module.css";
export default function MogoMain({members}){
    return (
    <main>
        <div className={css.container}>
        <section>
            <p className={css.subMainTitile}>We work with</p>
            <h1 className={css.mainTitile}>AMAZING SERVICES</h1>
            <ul className={css.contentList}>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </li>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </li>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </li>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </li>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                 </li>
                <li className={css.contentList_li}>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                 </li>
            </ul>
        </section>
        <section>
            <p className={css.subMainTitile}>Who we are</p>
            <h1 className={css.mainTitile}> MEET OUR TEAM</h1>
            <p className={css.mainNote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <ul className={css.teamList}>
                {members.map(member => (<li key={member.id} className={css.teamList_li}>
                    <img src={member.image} alt={member.alt} width="380px" height="470px"/>
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                </li>))}
            </ul>
        </section>
</div>
</main>
    )
}