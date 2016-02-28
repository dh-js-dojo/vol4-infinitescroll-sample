"use strict";

$(function () {
    var target = $('.article-list');

    $(window).on("scroll", function(event){
        var scroll = $(window).scrollTop();
        var scrollPosition = $(window).height() + scroll;
        var contentHeight = $(document).height();

        console.log(contentHeight);

        if (scrollPosition > contentHeight - 50) {
            $('.loading').css({'display': 'block'});
            setTimeout(function(){
              $.getJSON('json_data/article.json', function(data) {
                var datalen = data.length;
                for(var i = 0; i < datalen; i++) {
                  var $articleBase = $('<li><div class="thumbnail"><img src=""></div><div><h1 class="title"></h1><div class="text"></div></div></li>');

                  var $title = $articleBase.find('.title');
                  $title.html(data[i].title);

                  var $text = $articleBase.find('.text');
                  $text.html(data[i].text);

                  var $img = $articleBase.find('img');
                  $img.attr('src', data[i].thumbnail);


                  target.append($articleBase);


                }
                $('.loading').css({'display': 'none'});
              });
            }, 1000);
        }
    });
});
//# sourceMappingURL=index.js.map
