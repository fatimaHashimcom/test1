
let productNameInput=document.getElementById('productName');
let productCategoryInput=document.getElementById('productCategory');
let producPriceInput=document.getElementById('producPrice');
let productDescriptionInput=document.getElementById('productDescription');

let addProductContainer=[];

if(localStorage.getItem('product' ) != null){
    addProductContainer= JSON.parse( localStorage.getItem('product' ))
}
function addProduct(){
    let productObj={
        name:productNameInput.value,
        Category:productCategoryInput.value,
        Price:producPriceInput.value,
        Description:productDescriptionInput.value,
    }
    addProductContainer.push(productObj);
    localStorage.setItem('product',JSON.stringify(addProductContainer))
    displayProduct();
    clearInput();
}

function displayProduct(){
cartona=``
for(let i=1;i<addProductContainer.length;i++){
    cartona+=`
    <tr>
    <td>${i}</td>
    <td>${addProductContainer[i].name}</td>
    <td>${addProductContainer[i].Category}</td>
    <td>${addProductContainer[i].Price}</td>
    <td>${addProductContainer[i].Description}</td>
     <td> <button onclick="deleteProduct(${i})" class="btn btn-info btn-sm">Delete</button></td>
     <td> <button  class="btn btn-danger btn-sm">Updata</button></td>
    </tr>
    `
}
document.getElementById('tbody').innerHTML=cartona;
}
displayProduct()

function clearInput(){
    productNameInput.value="";
    productCategoryInput.value="";
    producPriceInput.value="";
    productDescriptionInput.value="";
}

function deleteProduct(Index){
    addProductContainer.splice(Index,1);
    localStorage.setItem('product' ,JSON.stringify(addProductContainer))
     displayProduct()
}

function search(){
    var searchinput= document.getElementById("searchinput").value
    var box2=``
    for( var i=0;i<addProductContainer.length;i++){
      if(addProductContainer[i].name.toLowerCase().includes(searchinput.toLowerCase()))

     
     {
         box2+=`
         <tr>
         <td> ${i}</td>
       
  <td>${addProductContainer[i].name.replace(searchinput,`<span>`+searchinput+`</span>`)}</td>
         <td>${addProductContainer[i].category}</td>
         <td>${addProductContainer[i].price}</td>
         <td>${addProductContainer[i].description}</td>
         <td><putton onclick="deleteProduct(${i})" class="btn btn-info btn-sm">Delete</button> </td>
         <td><putton  class="btn btn-danger btn-sm">Update</button>  </td>
         </tr>
        `
     }
    }
    document.getElementById('tbody').innerHTML=box2;

 }

