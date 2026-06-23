$(function () {
    // Keeps the home page header/nav styling in sync with scrolling.
    var isInitialized = false;

    function initializeLayoutScroll() {
        if (isInitialized || !$("header").length) {
            return;
        }

        isInitialized = true;

        var $window = $(window);
        var $header = $("header");
        var $nav = $("nav");

        function updateScrollStyles() {
            var scrollTop = $window.scrollTop();
            var isScrolled = scrollTop > 50;

            $header.toggleClass("scrolled", isScrolled);
            $nav.toggleClass("scrolled", isScrolled);
        }

        $window.on("scroll", updateScrollStyles);
        updateScrollStyles();
    }

    initializeLayoutScroll();
    $(document).on("shared-layout-loaded", initializeLayoutScroll);
});
