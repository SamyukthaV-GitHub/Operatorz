function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
}
function add()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
c=a+b;
alert("Sum is " + c);
}
function sub()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
c=a-b;
alert("Difference is " + c);
}
function mul()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
c=a*b;
alert("Product is " + c);
}
function div()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
c=a/b;
alert("Quotient is " + c);
}
function mod()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
c=a%b;
alert("Remainder is " + c);
}
function eq()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a==b){
    alert("The numbers are equal");
}else{
    alert("The numbers are not equal");
}
}

function noteq()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a!=b){
    alert("The numbers not are equal");
}else{
    alert("The numbers are equal");
}
}

function great()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A","");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a>b){
    alert("A is greater than B");
}else{
    alert("A is not greater than B");
}
}

function less()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a<b){
    alert("A is lesser than B");
}else{
    alert("A is not lesser than B");
}
}

function greateq()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a>=b){
    alert("A is greater than or equal to B");
}else{
    alert("A is not greater than or equal to B");
}
}

function lesseq()
{
var a,b,c,n1,n2;
n1=window.prompt("Enter the value of A");
a=parseInt(n1);
n2=window.prompt("Enter the value of B","");
b=parseInt(n2);
if(a<=b){
    alert("A is lesser than or equal to B");
}else{
    alert("A is not lesser than or equal to B");
}
}