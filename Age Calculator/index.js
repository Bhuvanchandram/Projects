const btnele = document.getElementById("btn");
const birthdayele = document.getElementById("birthday");
const resultEl=document.getElementById("result");
function getAge(birthdayvalue){
    var currentDate=new Date();
    var birth=new Date(birthdayvalue);
    var year=currentDate.getFullYear()-birth.getFullYear();
    var month=currentDate.getMonth()-birth.getMonth();
    if(month<0 || (month==0 && currentDate.getDate()<birth.getDate())){
        year--;
    }
    return year;
}
function calculateAge() {
    const birthdayvalue = birthdayele.value;
    console.log(birthdayvalue);
    if(birthdayvalue===""){
        alert("Please enter a valid birthday");
    }else{
        const age=getAge(birthdayvalue);
        resultEl.innerText = `Your Age is ${age} ${age>1 ? "years":"year" } old`;
    }
}

btnele.addEventListener("click", calculateAge); 
