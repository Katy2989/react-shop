import React from "react";
import { ReactComponent as Save } from "./save.svg";
import cn from 'classnames';

import './style.css';

const Card = ({ price,
  discount,
  isFavorite,
  pictures,
  wight,
  name,
  likes,
  currentUser,
  onProductLike,

  _id, }) => {

  function handleLikeClick() {
    onProductLike({ _id, likes });
  }

  const liked = likes.some((id) => id === currentUser?._id);


  const price_dis = Math.round(price - price * discount / 100);
  return (
    <div className="card">
      <div className="card__sticky card__sticky_type_top-left">
        {!!discount && <span className="card__discount">{` -${discount}%`}</span>}

      </div>
      <div className="card__sticky card__sticky_type_top-right">

        <button
          className={cn('card__favorite', {
            'card__favorite_is-active': liked,
          })}
          onClick={handleLikeClick}
        >
          <Save className='card__favorite-icon' />

        </button>
      </div>
      <a href="/product" className="card__link">
        <img src={pictures} alt="" className="card__image" />
        <div className="card__desc">
          <span className={!!discount ? "card__old-price" : "card__price"}>{price}&nbsp;P</span>
          {!!discount && <span className="card__price card__price_type_discount">{price_dis}&nbsp;P</span>}
          <span className="card__wight">{wight}</span>
          <p className="card__name">{name}</p>
        </div>
      </a>
      <a href="#" className="card__cart btn btn_type_primary">
        В корзину</a>
    </div>
  );
}

export default Card;
