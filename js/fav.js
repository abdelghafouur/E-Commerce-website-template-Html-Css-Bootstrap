
$(document).ready(function() {
    $(".Myfav").click(function() {
        if ($(this).hasClass("fa-solid")) {
            // Remove fa-solid and add fa-regular
            $(this).removeClass("fa-solid").addClass("fa-regular");
        } else {
            // Remove fa-regular and add fa-solid
            $(this).removeClass("fa-regular").addClass("fa-solid");
        }
    });
});

