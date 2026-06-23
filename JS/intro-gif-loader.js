$(function () {
    // Shows a placeholder until the animated home background has finished loading.
    var $homePage = $("body.home-page");
    var $homeSection = $(".Home");

    if (!$homeSection.length || !$homePage.length) {
        return;
    }

    var introGifPath = "/Images/IntroGif.gif";

    $homePage.add($homeSection).css("background-image", "url('/Images/BlackScreen.png')");
    $("<img>").on("load", function () {
        $homePage.add($homeSection).css("background-image", "url('" + introGifPath + "')");
    }).attr("src", introGifPath);
});
