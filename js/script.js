// JAVASCRIPT IS THE WORLD'S MOST POPULAR SCRIPTING LANGUAGE
/*
JAVASCRIPT IS THE PROGRAMMING LANGUAGE FOR THE WEB
JAVASCRIPT IS EASY TO LEARN.
WE WILL LEARN THE FOLLOWING JAVASCRIPT CONCEPTS TODAY:
    1. DATATYPES
    2.VARIABLES
    3. OPERATORS.


    BEFORE WE BEGIN LEARNING LET'S SEE SOME OF THE POWER OF JAVASCRIPT BELOW 
    THE ORIGINAL JAVASCRIPT VERSIONS INCLUDE ES1 ES2 ES3 (1997-19999)
        THE FRIST MAIN REVISION ES5(2009)
        THE SECOND REVISION ES6 (2015)  
*/
var currentdate=document.getElementById('role')
function changeTodate(){
        currentdate.innerHTML = Date()
}
/*
    we can use javascript to change html content 

*/
function changecontent(){
        var currentValue = document.getElementById('companyOne')
        currentValue.innerHTML = 'Mama Bukka'
}
/*
        JAVASCRPIT CAN CHANGE HTML ATTRIBUTE VALUES
*/
function changeAttribute(){ 
    var currentAttributeValue = document.getElementById('profile_pic')
    currentAttributeValue.src = "../assest/oldpic.jpg"
}
/*
you can write 
*/                       
function changeAttribute(){
    document.getElementById("demo").innerHTML = "My First JavaScript";   