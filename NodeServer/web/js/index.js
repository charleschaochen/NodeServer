/**
 * Created by ccn1069 on 2015/5/4.
 */
$(function () {
    var query = location.href.split("?")[1];
    if(query) {
        var oQuery = {};
        $.each(query.split("&"), function (i, sParam) {
            var aParams = sParam.split("=");
            if(aParams.length === 2) {
                oQuery[aParams[0]] = aParams[1];
            }
        });
        $("<h1></h1>").text("Your query is: " + JSON.stringify(oQuery)).appendTo($("body"));
    }
})