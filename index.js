// Write your solution in this file!
//declare CustomerName to bob
var customerName ="bob"
var bestCustomer;
const LeastFavoriteCustomer ="maybe not bob"
console.log(customerName)
 function upperCaseCustomerName(){
     customerName= customerName.toLocaleUpperCase();//changing from lowercase to UPPERCASE
     return customerName;
 }
 function setBestCustomer(){
    bestCustomer="not bob"
    return bestCustomer;
 }
 function overwriteBestCustomer(){
     bestCustomer ="maybe bob"
     return bestCustomer;
 }
function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer="its bob now";
}