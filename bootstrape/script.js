


var tabs = document.querySelectorAll(".tabs li");
var Design = document.querySelectorAll(".design");
var Code = document.querySelectorAll(".code");
var Photo = document.querySelectorAll(".photo");
var App = document.querySelectorAll(".app");
var all = document.querySelectorAll(".item-wrap");

tabs.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        var tabval = tab.getAttribute("data-content");

        all.forEach((item)=>{
        item.style.display = "none";
        })

        if(tabval == "design"){
        Design.forEach((design)=>{
            design.style.display = "block";
        })
        }
        else if(tabval == "code"){
        Code.forEach((code)=>{
            code.style.display = "block";
        })
        }
        else if(tabval == "photo"){
            Photo.forEach((photo)=>{
                photo.style.display = "block";
            })
            }
        else if(tabval == "app"){
                App.forEach((app)=>{
                    app.style.display = "block";
            })
        }
        else{
        all.forEach((item)=>{
            item.style.display = "block";
        })
        }

    })
})