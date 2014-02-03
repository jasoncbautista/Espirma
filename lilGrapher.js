
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
                background: "black"
                , width: "2px"
                , "margin-left": "15px"
            });
            return;
        }


        if ( stat.commentDensity < 0.30) {
            bar.css({
                background: "yellow"
            });
        }

        if ( stat.commentDensity < 0.10) {
            bar.css({
                background: "red"
            });
        }



    };

    var parent = $("#commentPercent");
    addStatsToDom(parent, {
        commentDensity: 1.0
    }, true);
    _.each(commentStats, function(stat){
        addStatsToDom(parent, stat);
    });

});
