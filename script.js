var tablinks = document.getElementsByClassName("tab-links");
var tabcontetnts = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontetnt of tabcontetnts){
        tabcontetnt.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("ctive-link")
}
