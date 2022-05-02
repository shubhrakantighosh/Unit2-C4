// write js code here corresponding to favourites.html
let data=JSON.parse(localStorage.getItem("favourites")) || [];
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
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(data){
        mychoise1(elem)
    });
    tr.append(td1,td2,td3,td4,td5,td6);
   document.querySelector("tbody").append(tr);
})
function mychoise1(elem){
    // let data1=JSON.parse(localStorage.getItem("favourites"));
    // let arr=[];
    // for(let i=0;i<data1.length;i++){
    //     if(data1[i]==elem){
    //         localStorage.removeItem("favourites",JSON.stringify(elem));
    //     }
    //     else{
    //      arr.push(data1[i]);
    //     }
    // }
    // localStorage.setItem("favourites",JSON.stringify(arr));
}
