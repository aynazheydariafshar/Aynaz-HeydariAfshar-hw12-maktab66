const modal = document.querySelector("#myModal");
const btn = document.querySelector("#btn-success");
const span = document.querySelector(".close");
let controlerrorf = document.querySelector(".p-controlerror-f");
let controlerrorl = document.querySelector(".p-controlerror-l");
const firstName = document.querySelector("#inputFirstName");
const lastName = document.querySelector("#inputLastName");

const myFunction = e => {
    e.preventDefault();
    const felement = e.target;
    let flag = true;

    const values = {};
    for(input of felement){
        values[input.name] = input.value;
    }

    let fname = document.forms["myForm"]["firstname"].value;
    let lname = document.forms["myForm"]["lastname"].value;
    if(fname === "" || fname.length <= 3){
        controlerrorf.innerHTML = "novaild";
        controlerrorf.style.color = "red";
        firstName.style.marginBottom = "0px";
        firstName.style.borderColor = "red";
        flag = false;
    }
    else {
        controlerrorf.innerHTML = "vaild";
        firstName.style.marginBottom = "0px";
        controlerrorf.style.color = "green";
        firstName.style.borderColor = "green";
    }

    if(lname === "" || lname.length <= 3){
        controlerrorl.innerHTML = "novaild";
        controlerrorl.style.color = "red";
        lastName.style.marginBottom = "0px";
        lastName.style.borderColor = "red";
        controlerrorl.innerHTML = "novaild";
        flag = false;
    }else{
        controlerrorl.innerHTML = "vaild";
        lastName.style.marginBottom = "0px";
        controlerrorl.style.color = "green";
        lastName.style.borderColor = "green";
    }
    
    if(!flag){
        return false;
    }

    modal.style.display = "block";
    setTimeout(function(){
        window.location.href = './ex1.html';
    }, 8000);
}

span.onclick = function() {
    modal.style.display = "none";
}


