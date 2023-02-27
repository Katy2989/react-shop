import React, { useEffect, useState } from 'react';
import CardList from '../CardList/card-list';
import Header from '../Header/header';
import FooterPage from '../FooterPage/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import './style.css';
// import data from "../../assets/data.json";
import SearchInfo from '../SearchInfo/search-info';
import api from '../../Untils/api';
import useDebounce from "../../Untils/Hooks/useDebounce";
import { CatalogPage } from '../../Pages/Catalog/Catalog';
import { ProductPage } from '../../Pages/Product/Product';
import { NoMatchFound } from '../../Pages/NoMatchFound/NoMatchFound';
import Search from '../Search/search';
import { UserContext } from '../../Untils/UserContext/userContext';
import { isLiked } from '../../Untils/utils';
import { CardContext } from '../../Untils/cardContext/cardContext';
import { Favorite } from '../../Pages/Favorite/Favorite';
import { FaqPage } from '../../Pages/FAQ/FAQ';
// import { Product } from '../../Pages/Product/product';

function App() {

   const [cards, setCards] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [currentUser, setCurrentUser] = useState(null);
   const [view, setView] = useState(false);
   const debounceSearchQuery = useDebounce(searchQuery, 300);
   const [favorites, setFavorites] = useState([]);

   const handleInputChange = (inputValue) => {
      setSearchQuery(inputValue);

   };

   const handleSubmit = (e) => {
      e.preventDefault();
      handleRequest();
   }


   const handleRequest = () => {
      // const filteredCards = cards.filter((item)=>
      //    item.name.toUpperCase().includes(searchQuery.toUpperCase()));
      //    setCards([...filteredCards]);
      api.search(searchQuery).then((res) => setCards(res)).catch((err) => console.log(err));
   };

   useEffect(() => {
      Promise.all([api.getProductsList(), api.getUserInfo()]).then(
         ([productsData, userData]) => {
            setCards(productsData.products);
            setCurrentUser(userData);
            const favProducts = productsData.products.filter((product) =>
            isLiked(product.likes, userData._id));
            setFavorites(favProducts);
         }
      );
   }, []
   );

   useEffect(() => {
      handleRequest();
   }, [debounceSearchQuery]
   );

   console.log(cards);
   function handleUpdateUser(dataUpdateUser) {

      api.setUserInfo(dataUpdateUser).then((newUser) => {
         setCurrentUser(newUser);
      });
   }

   function handleProductLike(product) {
      console.log(product, "pr");
      const liked = product.likes.some((id) => id === currentUser?._id);
      api.changeLikeProduct(product._id, liked).then((newCard) => {
         const newProducts = cards.map((cardState) => {
            console.log('Карточка из стейта', cardState);
            console.log('Карточка из сервера', newCard);
            return cardState._id === newCard._id ? newCard : cardState;
         });

         if (!liked) {
            setFavorites((prevState) => [...prevState, newCard]);
          } else
            setFavorites((prevState) =>
              prevState.filter((card) => card._id !== newCard._id)
            );
         setCards(newProducts);
      });
   }

   const valueProvider = {
      cards,
      favorites,
      handleProductLike: handleProductLike,
    };

    const userProvider = {
      currentUser: currentUser,
   
    };

   return (
      <>
         <CardContext.Provider value={valueProvider}>
         <UserContext.Provider value={currentUser}>
            <Header onSubmit={handleSubmit} onInput={handleInputChange} user={currentUser} onUpdateUser={handleUpdateUser}>
               <Search onSubmit={handleSubmit} onInput={handleInputChange} />
            </Header>

            <main className='content container'>
               <SearchInfo searchText={searchQuery} searchCount={cards.length} />
               {/* <button className='btn' onClick={()=>setView(state=>!state)}>Change view</button> */}
               {/* {view ?( */}
               {/* <div className='content__cards'> */}
               {/* <CardList goods={cards}
             currentUser={currentUser}
             onProductLike={handleProductLike}
         /> */}

               {/* </div> */}

               <Routes>
                  <Route
                     path='/'
                     element={<CatalogPage handleProductLike={handleProductLike} goods={cards} currentUser={currentUser} />}
                  ></Route>
                  <Route
                     path='/product/:productId'
                     element={<ProductPage />}
                  ></Route>
                  <Route
                     path='/custom'
                     element={<div>MY CUSTOM COMPONENT</div>}
                  ></Route>
                  <Route
                     path='/custom2'
                     element={<h1>MY NEW COMPONENT</h1>}
                  ></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/favorites' element={<Favorite />}></Route>
                  <Route path='*' element={<NoMatchFound />}></Route>
               </Routes>
               {/* ): */}
               {/* //  (<Product/>)
            // } */}
            </main>
            <FooterPage />
         </UserContext.Provider>
         </CardContext.Provider>
      </>

   );
}

export default App;