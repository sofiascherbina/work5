import css from "./mogo.module.css";
export default function MogoHeader(){
    return(
        <header>
            <div className={css.container}>
                <div className={css.headerCont}>
                    <p className={css.header_logo}>MoGo</p>
                    <ul className={css.navList}>
                        <li><a href="#" className={css.navList_el}>About</a></li>
                        <li><a href="#" className={css.navList_el}>Service</a></li>
                        <li><a href="#" className={css.navList_el}>Work</a></li>
                        <li><a href="#" className={css.navList_el}>Blog</a></li>
                        <li><a href="#" className={css.navList_el}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}