function main () {
    const grow = document.getElementById("grow-me");
    grow.classList.add("big");

    const shrink = document.getElementById("shrink-me");
    shrink.classList.remove("big");

/* These ones aren't working :( 

    const lists = document.querySelectorAll("li");

    const linkChange = document.querySelectorAll(".link");
    linkChange.setAttribute("href", "https://www.example.com"); 
    linkChange.innerText = "somewhere";
*/

    const hide = document.querySelector("#hide-me");
    hide.style.display = "none";

    const show = document.querySelector("#show-me");
    show.style.display = "block";


    /* Neither is this one :( 


    const hello = document.getElementById(".name");
    const header = document.querySelectorAll("h1");
    header.innerText = "Welcome " + hello;

    */
}



