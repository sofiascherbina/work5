export default function MogoMain({members}){
    return (
    <main>
        <section>
        <p>We work with</p>
        <h1>AMAZING SERVICES</h1>
        <ul>
            <li>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </li>
            <li>
                <h2>Photography</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </li>
            <li>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </li>
            <li>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </li>
            <li>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
             </li>
            <li>
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
             </li>
        </ul>
    </section>
<section>
    <p>Who we are</p>
    <h1> MEET OUR TEAM</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
<ul>
    {members.map(member => (<li key={member.id}>
        <img src={member.image} alt={member.alt}/>
        <h5>{member.name}</h5>
        <p>{member.role}</p>
    </li>))}
</ul>
</section>
</main>
    )
}