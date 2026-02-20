export default function Profile({username,tag,location,avatar,stats}){
    return (
       <div className="profile">
            <div className="description">
              <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                width="200px"
              />
              <p className="name">{username}</p>
              <p className="tag">{tag}</p>
              <p className="location">{location}</p>
            </div>

            <ul className="stats">
              <li>
                <span className="label">Followers : {stats.followers}</span>
                <span className="quantity">1000</span>
              </li>
              <li>
                <span className="label">Views : {stats.views}</span>
                <span className="quantity">2000</span>
              </li>
              <li>
                <span className="label">Likes :{stats.likes}</span>
                <span className="quantity">3000</span>
              </li>
            </ul>
        </div>
    )
}