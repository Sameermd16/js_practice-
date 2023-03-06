
var div = document.getElementById("sec");
var p = div.document.getElementsByClassName("p");
var contents = p[1].innerHTML;
console.log(contents);


const button = document.getElementById("button");

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin =  now.getMinutes();
    alert("current time: " + theHr + ":"+ theMin)
}
button.addEventListener("click", () => {
   showMessage(month, "'s winner number is " + 1);
});

function showMessage(m, string, num){
    alert(m + string + num);
}
var month = "March";
document.write(month); 

function fillCity(){
    var zipEntered = document.getElementById("zip").value;
    var cityName;
    
    switch (zipEntered){
        case "6161" :
            cityName = "Hyderabad";
            break;
        case "5454" :
            cityName = "Pune";
            break;
        case "1313" :
                cityName = "Chennai";
                break;
        }
    document.getElementById("city").value = cityName;
     }
            

// expand paragraph

function expandLoris(){
    var expandedPara = "Slowloris is a type of denial of service attack tool which allows a single machine to take down another machine's web server with minimal bandwidth and side effects on unrelated services and ports. Slowloris tries to keep many connections to the target web server open and hold them open as long as possible";
    document.getElementById("slowloris").innerHTML = expandedPara;
}
function expParaDisappear(){
    var shortPara = "Slowloris is a type of denial of service attack tool which allows a single machine to take down another machine's web server";
    document.getElementById("slowloris").innerHTML = shortPara;
    
}

function addList() {
    var lorisList = "<li> slow loris</li> <li>Fast loris</li><li>Somewhere in between</li>";
    document.getElementById("slowloris").innerHTML = lorisList;
}


// adding & removing classes

function makeInvisible(){
    document.getElementById("good_city").className = "hidden";
}
function makeBig(){
    document.getElementById("p1").className += "big";
}

function swapPic(eId, newPic){
    document.getElementById(eId).src = newPic;
}

function getAddress() {
    var address = document.getElementById("link1").href;
}
document.write("address");

function changePara() {
    var paraDiv = document.getElementById("mydiv").getElementsByTagName("p");
    // par[1].innerHTML = "This suv is too big";
    // par[2].innerHTML = "My name is javascript";
    for (var i = 0; i < paraDiv.length; i++)  {
        paraDiv[i].style.fontFamily = "Verdana";
    }
}





// {switch statements}
const dayOfWeek = "mon";

if (dayOfWeek === "sat" || dayOfWeek === "sun"){
    document.write("<br>" + "Whoopee!");
}
else if (dayOfWeek === "fri"){
    document.write("<br>" +"TGIF");
}
else {
    document.write("<br>" +"Shoot me now!");
}
// switch code 

switch(dayOfWeek){
    case "sat" :
        document.write("Whoopee!");
        break;
    case "sun" :
        document.write("Whoopee!");
        break;
    case "fri" :
        document.write("TGIF");
        break;
    default : 
        document.write("Shoot me now!");
}

for (var i = 5; i <= 10; i++){
    document.write("<br>" + i);
}

function popUp(message){
    alert(message)
}

function greetMan(){
    alert('welcome to the javascript');
}

function checkAddress(){
    if (document.getElementById('email').value === ""){
        document.write("Email is required.");
    }
}
function calcTotal(merchTotal){
    var orderTotal;
    if (merchTotal >= 100){
        orderTotal = merchTotal;
    }
    if (merchTotal < 50.01){
        orderTotal = merchTotal + 5;
    }
    else {
        orderTotal =  merchTotal + 5 + (0.03 * (merchTotal - 50));
    }
    return orderTotal;
}

document.write(calcTotal(70));

var totalToCharge = calcTotal(70);

var theSum = 1000;
addNumbers();

document.write("<br>" + theSum);
function addNumbers(){
    theSum = 4;
   document.write("<br>" + theSum);
   return theSum;
}











var num = 1;
var almostMillion =  999999;
function greetUser(greeting) {
    alert(greeting);
}

var greeting = "Hello, there."
var whatever =  "No one's here";


let book = {topic: "JavaScript", edition: 7}

console.log(book.topic);
console.log(book["edition"]);
console.log(book);
book.author = "Flanagan";
console.log(book);
book.contents = {};
console.log(book);
console.log(book.contents);
console.log(book.topic?.JavaScript);



var para = document.getElementsByClassName("p");
para[2].innerHTML = "There is big difference between practice & theory";

function checkName() {
    if (document.getElementById("name").value.length === 0) {
        alert("Name should not be empty");
        document.getElementById("name").focus();
        document.getElementById("name").style.background = "yellow";
        return false;
    }
    document.getElementById("name").style.background = "white";
}

function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0){
        alert("Please select a state.");
        return false;
    }
}

function checkForSelection(selectId) {
    var target = document.getElementById(selectId);
    if (target.selectedIndex === 0){
        alert("Please select a state.");
        return false;
    }
}
// {/* <form onsubmit= "return checkForSelection('states');" */}≤≤≤≤


// radio buttons
function validateRadio() {
    var radio = document.getElementsByName("r1");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return true;
        }
    }
    alert("Please check one.");
    return false;
}

function validateZIP() {
    var zip = document.getElementById("zip").value;
    if ( zip.length === 0){
        alert("ZIP cannot be empty");
        return false;
    }
    else if (zip.length < 5){
        alert("ZIP Code cannot be less than 5 numbers");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(zip[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    };
};