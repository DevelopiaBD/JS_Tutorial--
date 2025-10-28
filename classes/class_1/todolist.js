const inputSearch = document.querySelector("#search");
const inputBtn = document.querySelector(".searchButton");
const ul = document.querySelector("ul");

// ul
/* <li>Apple 3 kg  <span class="deleteItems clickedEffect">delete</span></li> */

let dataArray = JSON.parse(localStorage.getItem("todolist")) || [];


    console.log(dataArray.length);



const showListItems = (dataArray)=>{
    
    ul.innerHTML = "";
    
    dataArray.forEach((datas, index)=>{

        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");

        newSpan.classList.add("deleteItems", "clickedEffect");
        newSpan.innerText="delete";
        newLi.innerText=datas;

        newSpan.addEventListener("click", ()=> deleteListItems(index));

        newLi.appendChild(newSpan)
        ul.prepend(newLi);

    })

}







const deleteListItems = (index)=>{

    
    dataArray.splice(index, 1);
    
    localStorage.setItem("todolist", JSON.stringify(dataArray));
 
    showListItems(dataArray)
}








document.addEventListener("DOMContentLoaded", ()=>{

    dataArray.length < 1? ul.innerHTML="<h2>No Data Added Yet</h2>"
    :
    showListItems(dataArray)




    // ................................................Buttons........................................//



inputBtn.addEventListener("click", ()=>{

    const values = inputSearch.value;

    if(values.trim()==="") return alert("Please Enter Minimum On Letter")

    dataArray.push(values);


    localStorage.setItem("todolist", JSON.stringify(dataArray))

    inputSearch.value="";
    showListItems(dataArray)

   

})


})
