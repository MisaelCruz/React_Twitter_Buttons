import { useState } from "react"
export function TwitterFollowCard( {userName, name, initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ?  'Siguiendo' : 'Seguir'
    const buttonClasseName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
    setIsFollowing(!isFollowing)   
    };

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar" 
                alt="Avatar" 
                src={`https://api.dicebear.com/7.x/bottts/svg?seed=${userName}`}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserNAme">@{userName}</span>
                </div>         
            </header>

            <aside>
                <button className={buttonClasseName} onClick={handleClick}>
                    {text}
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}