$(function () {
    // Shows a placeholder until the animated home background has finished loading.
    var $homePage = $("body.home-page");
    var $homeSection = $(".Home");

    if (!$homeSection.length || !$homePage.length) {
        return;
    }

    var introPosterPath = "/Content/Intro/IntroPoster.webp";
    var introGifPath = "/Content/Intro/IntroGif.webp";

    $homePage.add($homeSection).css("background-image", "url('" + introPosterPath + "')");
    $("<img>").on("load", function () {
        $homePage.add($homeSection).css("background-image", "url('" + introGifPath + "')");
    }).attr("src", introGifPath);
});
