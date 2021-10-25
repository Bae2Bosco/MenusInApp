var pages = ["home", "about","interact"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    var wrapper = document.body.querySelector(".wrapper");
    if (pg === "home") {
        homePage()
    }
    if (pg === "about") {
        aboutPage()
    }
    if (pg === "interact") {
        intPage()
    }
}



function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="About";
    header.innerHTML="Bae";

    wrapper.appendChild(header);
}

function intPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Interact";
    wrapper.appendChild(header);
}

createNav();
createWrapper();