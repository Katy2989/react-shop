


const onResponse = (res) =>{
return res.ok ? res.json():Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl =  baseUrl;
    }

    getProductsList(){
      return fetch(`${this._baseUrl}/products`, 
      { headers: this._headers }).then(
      onResponse);
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, 
        { headers: this._headers }).then(
            onResponse);
      }

      search(searchQuery){
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, 
        { headers: this._headers,
         }).then(onResponse);
      }


      changeLikeProduct(productId, isLike){
        return fetch(`${this._baseUrl}/products/likes/${productId}`,
         { 
          method: isLike ? "DELETE" : "PUT",
          headers: this._headers,
         }).then(onResponse);
      }

      setUserInfo(dataUser){
      
        return fetch(`${this._baseUrl}/users/me`, 
        { headers: this._headers,
        method:"PATCH",
        body: JSON.stringify(dataUser)}).then(onResponse);

        }

      }
 

const config ={
    baseUrl: 'https://api.react-learning.ru',
    headers: {
      'content-type': 'application/json',
      // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac',
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q2MzBkODU5Yjk4YjAzOGY3N2FlMjEiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2NzQ5ODE2NTEsImV4cCI6MTcwNjUxNzY1MX0.U78JYjPy1rLNErRGSgX_8fCa1Rc_MxNxtNZq3xenyAc"
    },

};
const api = new Api(config);
export default api;