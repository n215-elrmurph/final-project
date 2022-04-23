import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#","");
    let pageContent = pageName + "Content";

    //Needs uncommented out before turning in!!!!!!
    if (pageName == "") {
        pageContent = "homeContent";
   }
    
    MODEL.modelPageName(pageContent);
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
});