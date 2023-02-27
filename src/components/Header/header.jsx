
// //  eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import logo from "../Logo/logo.svg";
// // import Search from "../Search/search";
import s from "./style.module.css";
import { ReactComponent as FavIcon } from './img/fav.svg';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
// import cn from 'classnames';

// import { ReactComponent as SearchIcon} from "../Search/ic-close-input.svg"; 
// import CloseIcon from "../Search/ic-search.svg"; 
import Search from '../Search/search';
import { CardContext } from '../../Untils/cardContext/cardContext';




function Header({children, onSubmit, onInput, user, onUpdateUser}) {

const handleButtonEdit =(e)=>{
  e.preventDefault();
  onUpdateUser({about:"Ментор", name:"Арсений"});
};

const { favorites } = useContext(CardContext);

  return (
    <header className={s.header}>
    
      <div className={s.container}>
        <span>{user?.email} </span>
        <span>{user?.name}</span>
        <button className={s.btn} onClick={handleButtonEdit}>Change</button>
        </div>
        <div className={s.headerWrapper}>

          <a className={s.logo} title="Логотип" href ="/">
            <img src={logo} alt=''/></a>   
            {children}

            <Link className={s.favoritesLink} to={'/favorites'}>
              <FavIcon />
              {favorites.length !== 0 && (
                <span className={s.iconBubble}>{favorites.length}</span>
              )}
            </Link>
            </div>
       
    
    </header>
  );
}

export default Header;