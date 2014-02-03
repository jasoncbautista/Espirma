
$(document).ready(function(){
    console.log(commentStats);


    var addStatsToDom = function(parent, stat, noExtra){
        console.log(stat);

        var bar = $("<div class='barGraph'>  </div>");
        var height = stat.commentDensity * 300;
        bar.css({
            height:  height + "px"
        });
        console.log(height);
        parent.append(bar);

        // This is for the scale
        if(noExtra) {
            bar.css({
                background: black

            });
            return;
        }
    };

    var parent = $("#commentPercent");
    addStatsToDom(parent, {
        commentDensity: 1.0
    });
    _.each(commentStats, function(stat){
        addStatsToDom(parent, stat);
    });

});
