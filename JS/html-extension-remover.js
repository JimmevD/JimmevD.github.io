$(function () {
    // On the live website, links look cleaner without the ".html" extension.
    // Local development keeps ".html" so Python's simple local server still works.
    function isLocalWebsite() {
        var host = window.location.hostname.toLowerCase();

        return window.location.protocol === "file:"
            || host === "localhost"
            || host === "127.0.0.1"
            || host === "::1"
            || host.endsWith(".local");
    }

    function removeHtmlExtension(value) {
        if (!value) {
            return value;
        }

        return value.replace(/\.html(?=([?#'")]|$))/g, "");
    }

    function shouldCleanLink(href) {
        var isExternalUrl = /^[a-z][a-z0-9+.-]*:\/\//i.test(href);
        var isSpecialLink = href.indexOf("mailto:") === 0
            || href.indexOf("tel:") === 0
            || href.indexOf("#") === 0;

        return href.indexOf(".html") !== -1
            && !isExternalUrl
            && !isSpecialLink;
    }

    if (isLocalWebsite()) {
        return;
    }

    $("a[href]").each(function () {
        var $link = $(this);
        var href = $link.attr("href");

        if (shouldCleanLink(href)) {
            $link.attr("href", removeHtmlExtension(href));
        }
    });

    $("[onclick]").each(function () {
        var $element = $(this);
        var onclick = $element.attr("onclick");

        $element.attr("onclick", removeHtmlExtension(onclick));
    });
});
