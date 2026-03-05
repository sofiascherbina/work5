import css from "./mogo.module.css";
export default function MogoFooter(){
    return(
        <footer>
            <div className={css.footerContent}>
                <p className={css.footerText}> &#169; 2016 MoGo free PSD template by <a href="" className={css.footerLink}>Laaqiq</a></p> 
                <form>
                    <input type="email" placeholder="Your Email..." className={css.footerInput}/>
                    <button type="submit" className={css.footerBtn}>SUBSCRIBE</button>
                </form> 
            </div>
        </footer>
    )
}