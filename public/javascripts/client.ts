/// <reference path="../../typings/jquery.d.ts" />

$(() => {
    $("#button").click(event => {
        $.get(window.location.href + "data", null, data =>
            $("#text-div").append(data);
        );
    });
});