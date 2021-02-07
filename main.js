const addInput= document.getElementById("addInput");
const addBtn=document.getElementById("addBtn");
let list =document.getElementById("list");
const error=document.querySelectorAll(".error");


addBtn.addEventListener("click", (e)=>{
    e.preventDefault();


    //create div
    let createDiv =document.createElement("div");
    createDiv.classList.add("item");

    //create components
    let a =document.createElement("option");
    a.innerHTML=addInput.value;
    createDiv.appendChild(a);

    //deletecheck BTN
    let delcheck=document.createElement("div");
    delcheck.classList.add("delcheck");
    createDiv.appendChild(delcheck);

      //create timesBtn
      let times=document.createElement('button');
      times.innerHTML='<i class="fas fa-times" ></i>';
      times.classList.add("times");
      delcheck.appendChild(times);

addInput.value=" "
list.appendChild(createDiv);

times.addEventListener("click",(e)=>{
 let times=e.target.parentElement.parentElement;
 times.remove();
})
   
})

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{
  let searchInputVal=searchInput.value.toUpperCase();
  console.log(searchInputVal);
  let ul=document.getElementById("searchList")
  let li=ul.getElementsByTagName("li");

 for(i=0;i<li.length;i++){
   let a=li[i].getElementsByTagName("a")[0];
   if(a.innerHTML.toUpperCase().indexOf(searchInputVal)>-1){
     li[i].style.display="";
   }else{
     li[i].style.display="none";
   }
 }
})

//Books Variable
const titleBook=document.getElementById("title");
const authorBook=document.getElementById("author");
const isbnBook=document.getElementById("isbn");
const submitBook=document.getElementById("submitBook");
const bookBody=document.getElementById("bookBody");



submitBook.addEventListener("click",(e)=>{
  e.preventDefault();

   if(
   titleBook.value==""
   ){
     alert("please fill the input form");
   }else{
    const tbody= document.createElement("tr");

    const newTitle=document.createElement("td");
    newTitle.innerHTML=titleBook.value;
    tbody.appendChild(newTitle);

    const newAuthor=document.createElement("td");
    newAuthor.innerHTML=authorBook.value;
    tbody.appendChild(newAuthor);

    const newISBN=document.createElement("td");
    newISBN.innerHTML=isbnBook.value;
    tbody.appendChild(newISBN);

    bookBody.appendChild(tbody);
  
    authorBook.value="";
    titleBook.value="";
    isbnBook.value="";
    
   }
})

