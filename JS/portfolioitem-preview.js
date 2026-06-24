$(function () {
    // Keeps the static thumbnail visible until the animated preview is loaded.
    $(".portfolio-item img").on("mouseenter", function () {
        var image = this;
        var $image = $(image);
        var gif = $(this).data("gif");

        if (!gif) {
            return;
        }

        $image.data("preview-hovered", true);

        if ($image.data("preview-loaded")) {
            $image.attr("src", gif);
            return;
        }

        $("<img>").on("load", function () {
            $image.data("preview-loaded", true);

            if ($image.data("preview-hovered")) {
                image.src = gif;
            }
        }).attr("src", gif);
    }).on("mouseleave", function () {
        var $image = $(this);
        var staticImage = $(this).data("static");

        $image.data("preview-hovered", false);

        if (staticImage) {
            $(this).attr("src", staticImage);
        }
    });
});
