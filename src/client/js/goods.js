$(() => {
    $.ajax({
        type: "get",
        url: "../../server/goods.php",
        // dataType: "json",
        success: function (data) {
            console.log(data);

        }
    })

})