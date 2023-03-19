import { useState } from 'react';
import api from '../../Untils/api';
import s from './style.module.css';

export const Form = ({ title, handleFormSubmit, children }) => {
  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </form>
  );
};