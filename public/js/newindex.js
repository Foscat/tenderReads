
$(document).on("click", "#tagGenerator", function(){

    var inputTag = $("#tagMaker").val().trim();

    $.ajax({
        url: "api/tags",
        method: "POST",
        contentType : "application/json",
        data : JSON.stringify(inputTag)
    })
      .then(function(response){
        //   console.log(response);
          console.log("You made a new tag " + inputTag);
      });
});