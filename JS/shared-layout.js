$(function () {
    var activePage = $("[data-active-page]").data("active-page");

    function includePartials() {
        var requests = $("[data-include]").map(function () {
            var $placeholder = $(this);
            var includeName = $placeholder.data("include");

            return $.get("/Components/" + includeName + ".html", function (html) {
                $placeholder.replaceWith(html);
            });
        }).get();

        $.when.apply($, requests).always(function () {
            highlightActivePage();
            $(document).trigger("shared-layout-loaded");
        });
    }

    function highlightActivePage() {
        if (activePage) {
            $('header a[data-page="' + activePage + '"]').wrapInner("<b></b>");
        }
    }

    includePartials();
});
