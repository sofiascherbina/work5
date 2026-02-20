export default function FriendList({friends}){
    return(
        <ul className="friend-list">
            {friends.map(friend => (<li className="friend">
                <span className="status">Status : {
                    friend.isOnline === true
                    ? 'online'
                    : 'offline'}</span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">Name : {friend.name}</p>
            </li>))}
        </ul>
    )
}