import React from 'react';
import CardList from '../../components/CardList/card-list';



export const CatalogPage = ({ handleProductLike, goods, currentUser }) => {
  return (
    <>
      <div className='content__cards'>
        <CardList
          onProductLike={handleProductLike}
          goods = {goods}
          // currentUser={currentUser}
        />
      </div>
    </>
  );
};