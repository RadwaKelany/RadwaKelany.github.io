/*slider bar*/
let toggler=document.querySelector(".toggle-menu");
let ul=document.querySelector("ul");
let close =document.querySelector(".fa-circle-xmark");


toggler.onclick=function(){
    ul.classList.add("open");
};

close.onclick = function () {
    this.parentElement.classList.remove("open");
};
/*slider bar*/
/*tabs content*/
var tabs = document.querySelectorAll(".tabs li");
var theNorth = document.querySelectorAll(".north");
var Southern = document.querySelectorAll(".southern");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        var tabval = tab.getAttribute("data-tabs");

        all.forEach((item)=>{
        item.style.display = "none";
        })

        if(tabval == "north"){
        theNorth.forEach((north)=>{
            north.style.display = "block";
        })
        }
        else if(tabval == "southern"){
        Southern.forEach((southern)=>{
            southern.style.display = "block";
        })
        }
        else{
        all.forEach((item)=>{
            item.style.display = "block";
        })
        }

    })
})
/*tabs content*/
/*slide testimonials*/

var Bullets = document.querySelectorAll(".bullet li");
var Twos = document.querySelectorAll(".two");
var Threes = document.querySelectorAll(".three");
var Card = document.querySelectorAll(".card-wrapper");


Bullets.forEach((item)=>{
    item.addEventListener("click", ()=>{
        Bullets.forEach((item)=>{
            item.classList.remove("active");
        })
        item.classList.add("active");
        var Cval = item.getAttribute("data-cont");

        Card.forEach((i)=>{
        i.style.display = "none";
        })

        if(Cval == "two"){
            Twos.forEach((two)=>{
            two.style.display = "block";
        })
        }
        else if(Cval == "three"){
            Threes.forEach((three)=>{
            three.style.display = "block";
        })
        }
        else{
        Card.forEach((i)=>{
            i.style.display = "block";
        })
        }

    })
})

/*slide testimonials*/


