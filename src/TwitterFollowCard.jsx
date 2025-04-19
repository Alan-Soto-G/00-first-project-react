import { useState } from "react";

export function TwitterFollowCard({
  User = "unknown",
  UserName = "unknown",
  isFollowing = false,
}) {
  const [following, setFollowing] = useState(isFollowing);

  const handleClick = () => {
    setFollowing(!following);
  };

  return (
    <article className="tw-card">
      <header className="tw-card-header">
        <img
          className="tw-card-img"
          src={`https://unavatar.io/${UserName}`}
          alt="avatar"
        />

        <div className="tw-card-user">
          <strong>{User}</strong>
          <span>@{UserName}</span>
        </div>

        <aside>
          <button
            className={`tw-card-button-follow ${following ? "is-following" : ""}`}
            onClick={handleClick}
          >
            <span className="tw-cardFollow-text">{following ? "Siguiendo" : "Seguir"}</span>

            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>

        </aside>
      </header>
    </article>
  );
}