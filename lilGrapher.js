
$(document).ready(function(){
    console.log(commentStats);


    var addStatsToDom = function(parent, stat){
        console.log(stat);

        var bar = $("<div class='barGraph'>-  </div>");
        var height = stat.commentDesnity * 100;
        bar.css({
            height:  height + "px"
        });
        console.log(height);

        parent.append(bar);
    };
    _.each(commentStats, function(stat){
        var parent = $("#commentPercent");
        addStatsToDom(parent, stat);
    });

});
