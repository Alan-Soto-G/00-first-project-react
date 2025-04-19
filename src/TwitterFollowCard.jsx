import { useState } from 'react';
export function TwitterFollowCard ({ User, UserName='unknown', isFollowing = false }) {
    
    const [following, setFollowing] = useState(isFollowing);

    const handleClick = () => {
        setFollowing(!following);
    };

    const buttonText = following ? 'Siguiendo' : 'Seguir ';
    
    return (
        <article id="tw-card">
            <header className="tw-card-header">
                <img id="tw-card-img" src={`https://unavatar.io/${UserName}`} alt="avatar" />
                <div id="tw-card-user">
                    <strong>{User}</strong>
                    <span>@{UserName}</span>        
                </div>
                <aside>
                    <button id="tw-card-button-follow" onClick={handleClick}>
                        {buttonText}
                    </button>
                </aside>
            </header>
        </article>
    );
}