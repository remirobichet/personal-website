$(document).ready(function () {
    console.log("ready!");
});

$(".ah").hover(function () {
    swal({
        title: "GG WP",
        text: "<a href='../lvl2'>Cliquez ici pour passer au niveau suivant<a>",
        type: "success",
        showConfirmButton: false,
        html: true
    });
});