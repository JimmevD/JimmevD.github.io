$(function () {
    // Shows a placeholder until the animated home background has finished loading.
    var $homeSection = $(".Home");

    if (!$homeSection.length) {
        return;
    }

    var introGifPath = "/Images/IntroGif.gif";

    $homeSection.css("background-image", "url('/Images/BlackScreen.png')");
    $("<img>").on("load", function () {
        $homeSection.css("background-image", "url('" + introGifPath + "')");
    }).attr("src", introGifPath);
});
