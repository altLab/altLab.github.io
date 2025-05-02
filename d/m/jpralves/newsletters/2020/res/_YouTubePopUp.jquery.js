!function(a) {
    a.fn.YouTubePopUp = function(b) {
        var c = a.extend({
            autoplay: 1
        }, b);
        a(this).on("click", function(b) {
            var d = a(this).attr("href")
              , e = a(this).attr("wpt-video-p");
            if (d.match(/(youtube.com)/))
                var f = "v="
                  , g = 1;
            if (d.match(/(youtu.be)/) || d.match(/(vimeo.com\/)+[0-9]/))
                var f = "/"
                  , g = 3;
            if (d.match(/(vimeo.com\/)+[a-zA-Z]/))
                var f = "/"
                  , g = 5;
            var h = d.split(f)[g]
              , i = h.replace(/(&)+(.*)/, "");
            if (d.match(/(youtu.be)/) || d.match(/(youtube.com)/)) {
                if (1 == e)
                    var j = "&rel=0";
                else
                    var j = "";
                var k = "https://www.youtube.com/embed/" + i + "?autoplay=" + c.autoplay + j
            }
            if (d.match(/(vimeo.com\/)+[0-9]/) || d.match(/(vimeo.com\/)+[a-zA-Z]/))
                var k = "https://player.vimeo.com/video/" + i + "?autoplay=" + c.autoplay;
            a("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + k + '" allowfullscreen></iframe></div></div>'),
            a(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() {
                a(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation")
            }, 600),
            a(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() {
                a(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() {
                    a(this).remove()
                })
            }),
            b.preventDefault()
        }),
        a(document).keyup(function(b) {
            27 == b.keyCode && a(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click()
        })
    }
}(jQuery);
