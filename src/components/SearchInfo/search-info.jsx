 import "./style.css";

 const SearchInfo=({searchText, searchCount})=>{
   console.log({searchText})
    return(
        searchText && <section className="search-title">
        			По запросу <span>{searchText}</span> найдено {searchCount} товаров
     		</section>
    );
 }
// const SearchInfo = ({searchText, searchCount}) => {
//     console.log({searchText}, 'bhjb');
// 	return (
      
// 		searchText && <section className="search-title">
// 			По запросу <span>{searchText}</span> найдено {searchCount} товаров
// 		</section>
// 	);
// };

 export default SearchInfo;