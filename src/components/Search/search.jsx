 import s from "./style.module.css";
 import { ReactComponent as SearchIcon} from "./ic-search.svg"; 
 import { ReactComponent as CloseIcon} from "./ic-close-input.svg"; 


 function Search({onSubmit, onInput}) {
   const handleInput = (e) => {
      onInput(e.target.value);
    }
    return(

        <form className={s.search} onSubmit={onSubmit}>
              <input className={s.searchInput} placeholder='Поиск' onInput ={handleInput}></input>
              <button className={s.searchBtn}> <SearchIcon/>
              {/* {false && <CloseIcon/>} */}
              </button>
            </form>
            )
   }
  
  export default Search;