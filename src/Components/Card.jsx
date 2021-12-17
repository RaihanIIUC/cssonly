import React from "react";

function Card() {
  return (
    <div className="card">
      {/* image */}
      <img
        src="https://img5.goodfon.ru/wallpaper/nbig/4/a8/landscape-sea-sunset-clouds-sky-sun-coast-cliff-birds-painti.jpg"
        alt=""
        loading="lazy"
        class="card-img"
      />
      {/* card content --parents */}
      <div className="card-content">
        {/* card title */}

        <div className="card-title">Peace</div>

        {/* card description  , end of parents */}

        <div className="card-description">
          a concept of societal friendship and harmony in the absence of
          hostility and violence. In a social sense, peace is commonly used to
          mean a lack of conflict (such as war) and freedom from fear of
          violence between individuals or groups.
        </div>
      </div>
      {/* button */}

      <button className="button">
        Explore <span>&rarr;</span>
      </button>
    </div>
  );
}

export default Card;
