$(function () {
    // Keeps the home page header/nav styling and parallax background in sync with scrolling.
    var isInitialized = false;

    function initializeLayoutScroll() {
        if (isInitialized || !$("header").length) {
            return;
        }

        isInitialized = true;

        var $window = $(window);
        var $header = $("header");
        var $nav = $("nav");
        var $sectionWhite = $(".sectionWhite");

        function updateScrollStyles() {
            var scrollTop = $window.scrollTop();
            var isScrolled = scrollTop > 50;
            var yPos = -(scrollTop * 0.5);

            $header.toggleClass("scrolled", isScrolled);
            $nav.toggleClass("scrolled", isScrolled);
            $sectionWhite.css("background-position", "center " + yPos + "px");
        }

        $window.on("scroll", updateScrollStyles);
        updateScrollStyles();
    }

    initializeLayoutScroll();
    $(document).on("shared-layout-loaded", initializeLayoutScroll);
});
