//.. helper functions to easily select DOM element
var $ = function(cssRule){
    return document.querySelector(cssRule);
}
var $$ = function(cssRule){
    return document.querySelectorAll(cssRule);
}

//.. menu click/touch function
var swipeDirection = "left";

var navClick = function(clickElm){
    //... set swipe animation
    if(swipeDirection == "left"){
        $("#animElm_swipe").setAttribute("data-animation","in");
        swipeDirection = "right";
    }else{
        $("#animElm_swipe").setAttribute("data-animation","out");
        swipeDirection = "left";
    }
    //.. set page transition
    $('article[data-status="open"]').setAttribute("data-status","closed");
    //.. find the article ID that the link refers to: the text after the #
    var articleID = clickElm.href.split("#")[1];
    //.. attach data-status="open" to the element with ID of articleID
    $("#"+articleID).setAttribute("data-status","open");
}

//.. window listener - to perform DOM operations when the page has loaded
window.addEventListener("load", function(){
    //.. get all navigation links
    var navLinks = $$("nav a");
    //.. loop through all even navigation links found
    for(var i=0; i<navLinks.length; i++){
        //.. add click listener to navigation the current navigation link
        navLinks[i].addEventListener("click", function(e){
            navClick(this);
        });
        //.. add click listener to navigation the current navigation link
        navLinks[i].addEventListener("touchstart", function(e){
            navClick(this);
        });
    }
});