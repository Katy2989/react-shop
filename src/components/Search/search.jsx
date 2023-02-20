 import s from "./style.module.css";
 import { ReactComponent as SearchIcon} from "./ic-search.svg"; 
 import { ReactComponent as CloseIcon} from "./ic-close-input.svg"; 


 function Search({handleSubmit, onInput}) {
   const handleInput = (e) => {
      onInput(e.target.value);
    }
    return(

        <form className={s.search} onSubmit={handleSubmit}>
              <input className={s.searchInput} placeholder='Поиск' onInput ={handleInput}></input>
              <button className={s.searchBtn}> <SearchIcon/>
              {/* {false && <CloseIcon/>} */}
              </button>
            </form>
            )

            // <img src={CloseIcon} alt='' className={s.searchPic}/>
    
//     const handleInput = (e) => {
//         console.log(e.target.value, "fghj");
//       onInput(e.target.value);
//     };
//     return (
//      <form className="search" onSubmit={propsOnSubmit}>
//           <input type="text" className='search__input' placeholder='Поиск' onInput={handleInput}/>
//           <button className='search__btn'>
//               <SearchIcon/>
//               {false && <CloseIcon/>}
//           </button>
//      </form>
//     )
   }
  
  export default Search;