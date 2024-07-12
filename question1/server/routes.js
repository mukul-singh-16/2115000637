const express = require('express')
const router = express.Router();
const path = require("path");




const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgzMDY0LCJpYXQiOjE3MjA3ODI3NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNmMDM3YTNmLTQyY2YtNDU2Yy1hZGI4LTRjMWYyMzFiNzVlMCIsInN1YiI6Im11a3VsLnNpbmdoX2NzMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIzZjAzN2EzZi00MmNmLTQ1NmMtYWRiOC00YzFmMjMxYjc1ZTAiLCJjbGllbnRTZWNyZXQiOiJ0eHBLdWZRQmZETkFUbVNvIiwib3duZXJOYW1lIjoiTXVrdWwgU2luZ2giLCJvd25lckVtYWlsIjoibXVrdWwuc2luZ2hfY3MyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIxIn0.9_oxx6cOIsZFLZQy1mesHpJACwlwMwkygfZo_nSLylY';




// fetch top 10  products  with min price =1 and max price =1000
router.get("/", (req, res) => {


   
    let minprice=1;
    let maxprice=1000;
    let top=10;
    let companies="AMZ"
    let categories="Laptop"



    const url1 = `http://20.244.56.144/test/companies/${companies}/categories/${categories}/products?top=${top}&minPrice=${minprice}&maxPrice=${maxprice}`;
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgzMDY0LCJpYXQiOjE3MjA3ODI3NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNmMDM3YTNmLTQyY2YtNDU2Yy1hZGI4LTRjMWYyMzFiNzVlMCIsInN1YiI6Im11a3VsLnNpbmdoX2NzMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIzZjAzN2EzZi00MmNmLTQ1NmMtYWRiOC00YzFmMjMxYjc1ZTAiLCJjbGllbnRTZWNyZXQiOiJ0eHBLdWZRQmZETkFUbVNvIiwib3duZXJOYW1lIjoiTXVrdWwgU2luZ2giLCJvd25lckVtYWlsIjoibXVrdWwuc2luZ2hfY3MyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIxIn0.9_oxx6cOIsZFLZQy1mesHpJACwlwMwkygfZo_nSLylY';


const headers1 = {
  'Authorization': `Bearer ${accessToken}`
};


fetch(url1, {
  method: 'GET',
  headers: headers1
})
.then(response => {
  
  return response.json();
})
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

});










module.exports = router;