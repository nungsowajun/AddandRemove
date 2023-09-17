const countElement=document.getElementById("count");
const addButton=document.getElementById("addButton");
const minusButton=document.getElementById("minusButton");

let count=0;

function updateCount(){
    countElement.textContent=count;
}

addButton.addEventListener("click",function()
{
    if(count<10){
        count++;
        updateCount();
    }
});
minusButton.addEventListener("click",function()
{
    if(count>0){
        count--;
        updateCount();
    }
});
updateCount();