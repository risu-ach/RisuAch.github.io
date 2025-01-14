

function toggleStyleSheet(){
    // Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("mainStyleSheet");
    //  Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElement.getAttribute('href');
    //  Determine new stylesheet file name
    var newFileName = "";
    if(fileName == "style2.css"){
        newFileName = "style.css";
    }else{
        newFileName = "style2.css";
    }
    // replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newFileName);

    // For persistence when page is refreshed. save new stylesheet name to localStorage
   
    localStorage.setItem("stylesheet", newFileName);
}




window.onload = function(){
    
    //  get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleElement = localStorage.getItem("stylesheet") || "style.css";
    
    // get html style element by ID
    var element = document.getElementById("mainStyleSheet");

    // replace href attribute of html element.
    element.setAttribute("href", styleElement);
}
