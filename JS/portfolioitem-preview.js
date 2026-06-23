$(function () {
    // Swaps portfolio thumbnails to their GIF previews while hovering.
    $(".portfolio-item img").on("mouseenter", function () {
        var gif = $(this).data("gif");

        if (gif) {
            $(this).attr("src", gif);
        }
    }).on("mouseleave", function () {
        var staticImage = $(this).data("static");

        if (staticImage) {
            $(this).attr("src", staticImage);
        }
    });
});
