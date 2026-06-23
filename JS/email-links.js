function updateEmailLinks() {
    // Builds the email address in the browser instead of writing it directly into the HTML.
    var emailName = String.fromCharCode(74, 105, 109, 109, 101, 68);
    var emailDomain = String.fromCharCode(120, 115, 52, 97, 108, 108, 46, 110, 108);
    var emailAddress = emailName + "@" + emailDomain;

    $("#email").html('<a href="mailto:' + emailAddress + '">' + emailAddress + "</a>");
    $("#emailF").attr("href", "mailto:" + emailAddress);
}

$(function () {
    updateEmailLinks();
    $(document).on("shared-layout-loaded", updateEmailLinks);
});
