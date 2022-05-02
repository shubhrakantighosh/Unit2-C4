// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",mycheck);
let data=JSON.parse(localStorage.getItem("schedule")) || [];
function mycheck (){
    event.preventDefault();
    objarr={
        matchname:document.querySelector("#matchNum").value,
        teama:document.querySelector("#teamA").value,
        teamb:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    }
    data.push(objarr);
    localStorage.setItem("schedule",JSON.stringify(data));
    console.log(objarr)
}