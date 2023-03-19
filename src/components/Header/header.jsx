
// //  eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import logo from "../Logo/logo.svg";
// // import Search from "../Search/search";
import cn from 'classnames';
import s from "./style.module.css";
import { ReactComponent as FavIcon } from './img/fav.svg';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
// import cn from 'classnames';

// import { ReactComponent as SearchIcon} from "../Search/ic-close-input.svg"; 
// import CloseIcon from "../Search/ic-search.svg"; 
import Search from '../Search/search';
import { CardContext } from '../../Untils/cardContext/cardContext';
import { isVisible } from '@testing-library/user-event/dist/utils';




function Header({children, onSubmit, onInput, user, onUpdateUser, setActiveModal }) {

  const [state, setState] = useState('');
  const [isVisible, setVisible] = useState(false);

// const handleButtonEdit =(e)=>{
//   e.preventDefault();
//   onUpdateUser({about:"Ментор", name:"Арсений"});
// };

const { favorites } = useContext(CardContext);

function checkMouse(e) {
  if (e.target.textContent === 'enter') {
    setVisible(true);
  }
}

  return (
    // <header className={cn(s.header, 'cover')}>
    <header className={cn(s.header, 'cover')}>
      <div className={s.container}>
        {/* <span>{user?.email} </span>
        <span>{user?.name}</span>
        <button className={s.btn} onClick={handleButtonEdit}>Change</button>
        </div> */}
        <div className={s.headerWrapper}>

          <a className={s.logo} title="Логотип" href ="/">
            <img src={logo} alt=''/></a>   
            {children}
            <div>
            <Link
              to={'/login'}
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={() => setActiveModal(true)}
              onMouseEnter={(e) => checkMouse(e)}
              onMouseLeave={() => setVisible(false)}
            >
              enter
            </Link>
            {isVisible && <div style={{ position: 'absolute' }}>I AM HERE</div>}
          </div>

          <div className={s.iconsMenu}>

            <Link className={s.favoritesLink} to={'/favorites'}>
              <FavIcon />
              {favorites.length !== 0 && (
                <span className={s.iconBubble}>{favorites.length}</span>
              )}
            </Link>
            </div>
            </div>
            </div>
    
    </header>
  );
}

export default Header;