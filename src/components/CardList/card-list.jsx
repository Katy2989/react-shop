import "./style.css";
import Card from "../Card/card";
// import data from "../../assets/data.json";

const CardList = ({ goods, currentUser, onProductLike})=>{
    
  
    return(
       <div className="cards">
        
        {goods.map((item, index) => (
        <Card
          key={item._id}
          {...item}
          currentUser={currentUser}
          onProductLike={onProductLike}
           />
          ))}
       </div>
        )

}


 export default CardList;