import React, { useEffect, useState } from 'react';
import CardList from '../CardList/card-list';
import Header from '../Header/header';
import FooterPage from '../FooterPage/Footer';

import './style.css';
// import data from "../../assets/data.json";
import SearchInfo from '../SearchInfo/search-info';
import api from '../../Untils/api';
import useDebounce from "../../assets/Hooks/useDebounce";
// import { Product } from '../../Pages/Product/product';

function App() {

   const [cards, setCards] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [currentUser, setCurrentUser] = useState(null);
   const [view, setView] = useState(false);
    const debounceSearchQuery = useDebounce(searchQuery, 300);

   const handleInputChange = (inputValue)=>{
      setSearchQuery(inputValue);
     
   };

   const handleSubmit=(e)=>{
      e.preventDefault();
      handleRequest();
   }


   const handleRequest=()=>{
      // const filteredCards = cards.filter((item)=>
      //    item.name.toUpperCase().includes(searchQuery.toUpperCase()));
      //    setCards([...filteredCards]);
      api.search(searchQuery).then((res)=>setCards(res)).catch((err)=>console.log(err));
   };

   useEffect(() => {
      Promise.all([api.getProductsList(), api.getUserInfo()]).then(
        ([productsData, userData]) => {
          setCards(productsData.products);
          setCurrentUser(userData);
        }
      );
},[]
);

useEffect(()=>{
   handleRequest();
},[debounceSearchQuery]
);

function handleUpdateUser(dataUpdateUser){

   api.setUserInfo(dataUpdateUser).then((newUser)=>{
   setCurrentUser(newUser);
});
}

function handleProductLike(product){
   console.log(product,"pr");
   const liked = product.likes.some((id) => id === currentUser?._id);
   api.changeLikeProduct(product._id, liked).then((newCard) => {
     const newProducts = cards.map((cardState) => {
       console.log('Карточка из стейта', cardState);
       console.log('Карточка из сервера', newCard);
       return cardState._id === newCard._id ? newCard : cardState;
     });
     setCards(newProducts);
   });
}


   return (
      <>

         <Header onSubmit={handleSubmit} onInput={handleInputChange}  user ={currentUser} onUpdateUser ={handleUpdateUser}/>
         <main className='content container'>
            <SearchInfo searchText={searchQuery} searchCount={cards.length}/>
            {/* <button className='btn' onClick={()=>setView(state=>!state)}>Change view</button> */}
            {/* {view ?( */}
            <div className='content__cards'>
            <CardList goods={cards}
             currentUser={currentUser}
             onProductLike={handleProductLike}
         />
         
            </div>
            {/* ): */}
            {/* //  (<Product/>)
            // } */}
         </main>
         <FooterPage />

      </>

   );
}

export default App;