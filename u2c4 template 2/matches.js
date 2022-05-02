// write js code here corresponding to matches.html
let data=JSON.parse(localStorage.getItem("schedule")) || [];
let alldata=JSON.parse(localStorage.getItem("favourites")) || [];
data.forEach(function(elem){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=elem.matchname;
    let td2=document.createElement("td");
    td2.innerText=elem.teama;
    let td3=document.createElement("td");
    td3.innerText=elem.teamb;
    let td4=document.createElement("td");
    td4.innerText=elem.date;
    let td5=document.createElement("td");
    td5.innerText=elem.venue;
    let td6=document.createElement("td");
    td6.innerText="Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(data){
        mychoise(elem)
    });
    tr.append(td1,td2,td3,td4,td5,td6);
   document.querySelector("tbody").append(tr);
})
   function mychoise(elem){
    alldata.push(elem);
    localStorage.setItem("favourites",JSON.stringify(alldata));
}

