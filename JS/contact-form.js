$(function () {
    // Highlights empty or invalid fields before the contact form submits.
    var $form = $("#contact-form");

    if (!$form.length) {
        return;
    }

    $form[0].reset();

    $form.on("submit", function (event) {
        var $name = $form.find('input[name="name"]');
        var $email = $form.find('input[name="email"]');
        var $message = $form.find('textarea[name="message"]');
        var $submitButton = $form.find('button[type="submit"]');
        var $fields = $name.add($email).add($message);
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValid = true;

        event.preventDefault();
        $fields.css("border-color", "#ccc");

        if ($name.val().trim() === "") {
            $name.css("border-color", "red");
            isValid = false;
        }

        if (!emailRegex.test($email.val().trim())) {
            $email.css("border-color", "red");
            isValid = false;
        }

        if ($message.val().trim() === "") {
            $message.css("border-color", "red");
            isValid = false;
        }

        if (!isValid) {
            alert("Please fill in all fields correctly.");
            return;
        }

        $submitButton.prop("disabled", true).text("Sending...");

        $.ajax({
            url: $form.attr("action"),
            method: $form.attr("method"),
            data: new FormData($form[0]),
            dataType: "json",
            processData: false,
            contentType: false
        }).done(function (response) {
            if (response && response.success === false) {
                alert(response.message || "Something went wrong. Please try again.");
                return;
            }

            $form[0].reset();
            alert("Thank you! Your message has been sent.");
        }).fail(function () {
            alert("Something went wrong. Please try again.");
        }).always(function () {
            $submitButton.prop("disabled", false).text("Send");
        });
    });
});
