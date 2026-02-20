export default function Statistics({title,stats}){
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (<li className="item">
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
              </li>))}
            </ul>
        </section>
    )
}