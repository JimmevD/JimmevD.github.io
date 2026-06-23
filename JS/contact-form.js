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
        var $fields = $name.add($email).add($message);
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValid = true;

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
            event.preventDefault();
            alert("Please fill in all fields correctly.");
        }
    });
});
