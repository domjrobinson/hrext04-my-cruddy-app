$(document).ready(function () {

    $('.btn--click').click(function(){
        // alert('this button was clicked');
        $('header').remove(); // will remove HTML & CSS
        // $('.container').append('<p>Does this work</p>')
    })

    for (var key in localStorage) {
        if (key !== "length" && key !== "key" && key !== "getItem" && key !== "setItem" && key !== "removeItem" && key !== "clear") {
            let itemHtml = '<div class="display-item" data-storage-key="' + key + '"> ' + key + ' - ' + '<span class="description">' + localStorage.getItem(key) + '</span></div>';
            $(itemHtml).appendTo(".feed");
        }
    }

    $(".add-text-btn").on("click", function () {

        // store values from input boxes
        let inputKey = $('.user-input-title').val();
        let inputValue = $(".user-input-body").val();

        // clear values from input boxes
        $(".user-input-title").val("");
        $(".user-input-body").val("");

        // add new property to local storage from input boxes
        localStorage.setItem(inputKey, inputValue);

        // add inputKey and inputValue to the #display container
        let itemHtml = '<div class="display-item" data-storage-key="' + inputKey + '"> ' + inputKey + "  " + '<span class="description-name">' + localStorage.getItem(inputKey) + "</span></div>";
        $(itemHtml).appendTo(".feed");

    });

    $(".del-text-btn").on("click", function() {
      window.confirm("Task deleted!"); // maybe change to a window.confirm
      localStorage.removeItem($(".user-input-title").val()); // grab the title and plop here
      $(".user-input-title").val("");
      $(".user-input-body").val("");
    });

    // clear local storage and refresh the #display container
    $("#clear-all-btn").on("click", function () {
        localStorage.clear();
        $("#user-input-title").val("");
        $("#user-input-body").val("");
        $("#display").html("");
    });

});
        


