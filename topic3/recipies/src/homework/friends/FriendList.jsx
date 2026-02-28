// import styles from '../index.module.css'
// friends.map(friend => (<li className={styles.friend}>;

import "./style.css";


export default function FriendList({friends}){
    return(
    <>
        <ul className="friend-list">
            {friends.map(friend => (<li className="friend">
                <div className={`circle ${friend.isOnline ? "online" : "offline"}`}></div>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" height="48"/>
                <p className="name">Name : {friend.name}</p>
            </li>))}
        </ul>
    </>
    )
}