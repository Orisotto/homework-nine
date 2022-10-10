function initListeners () {
    $("nav a").click(function(e){
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";
        // console.log("a id" + aID);

          MODEL.updateView(contentID)
    });
}

$(document).ready(function () {
    initListeners();
    MODEL.updateView("homeContent");
});