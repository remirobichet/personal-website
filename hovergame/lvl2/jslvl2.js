$(document).ready(function () {
    console.log("ready!");
});

$(".am").hover(function () {
    swal({
        title: "GG WP",
        text: "<a href='../lvl3'>Cliquez ici pour passer au niveau suivant<a>",
        type: "success",
        showConfirmButton: false,
        html: true
    });
});