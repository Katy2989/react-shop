import { useContext } from 'react';
import CardList from '../../components/CardList/card-list';


import { CardContext } from '../../Untils/cardContext/cardContext';
import { UserContext } from '../../Untils/UserContext/userContext';

export const Favorite = () => {
  const { favorites, handleProductLike } = useContext(CardContext);

// console.log(favorites, handleProductLike);
//   const { handleProductLike } = useContext(UserContext);

  
  console.log('favorites in favorites page', favorites);

  return (
    <>
      <div>
        <h3>Избранное</h3>
        <div className='content__cards'>
          <CardList goods={favorites} onProductLike={handleProductLike} />
        </div>
      </div>
    </>
  );
};