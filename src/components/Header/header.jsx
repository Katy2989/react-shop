
// //  eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../Logo/logo.svg";
// // import Search from "../Search/search";
import s from "./style.module.css";
import { Navigate, Route, Routes } from 'react-router-dom';
// import cn from 'classnames';

// import { ReactComponent as SearchIcon} from "../Search/ic-close-input.svg"; 
// import CloseIcon from "../Search/ic-search.svg"; 
import Search from '../Search/search';




function Header({children, onSubmit, onInput, user, onUpdateUser}) {

const handleButtonEdit =(e)=>{
  e.preventDefault();
  onUpdateUser({about:"Ментор", name:"Арсений"});
};

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
            </div>
       
    
    </header>
  );
}

export default Header;