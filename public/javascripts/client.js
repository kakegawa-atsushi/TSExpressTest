$(function () {
    $("#button").click(function (event) {
        $.get(window.location.href + "data", null, function (data) {
            return $("#text-div").append(data);
        });
    });
});
//@ sourceMappingURL=client.js.map
