<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Redirection email</title>
    <link rel="shortcut icon" type="image/png" href="logotestclr.png">
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../sweetalert/dist/sweetalert.css">
    <script src="../sweetalert/dist/sweetalert.min.js"></script>
</head>

<body>
    <style type="text/css">
        a {
            color: #555;
        }
    </style>

    <?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
		$destinataire = "remi.robichet@gmail.com";
		$sujet = "Demande de contact";
		$message = "Nom : ".$_POST['name']."\r\n";
		$message .= "Adresse email : ".$_POST['email']."\r\n";
		$message .= "Message : ".$_POST['message']."\r\n";
		$entete = 'From: '.$_POST['email']."\r\n".
        	'Reply-To: '.$_POST['email']."\r\n".
		'X-Mailer: PHP/'.phpversion();
		if (mail($destinataire,$sujet,$message,$entete)){
			echo "<script language='javascript' type='text/javascript'>";
		echo '$(document).ready(function () {
    console.log("ready!");
swal({
        title: "Envoyé !",
        text: "<a href='.'../../'.'>Cliquez ici pour revenir au site<a>",
        type: "success",
        showConfirmButton: false,
        html: true
    });
});';
		echo "</script>";
		} else {
		echo "<script language='javascript' type='text/javascript'>";
		echo '$(document).ready(function () {
    console.log("ready!");
swal({
        title: "Erreur...",
        text: "<a href='.'../../'.'>Cliquez ici pour revenir au site<a>",
        type: "error",
        showConfirmButton: false,
        html: true
    });
});';
		echo "</script>";
		}
	} else {
			echo "<script language='javascript' type='text/javascript'>";
		echo '$(document).ready(function () {
    console.log("ready!");
swal({
        title: "Erreur...",
        text: "<a href='.'../../'.'>Cliquez ici pour revenir au site<a>",
        type: "error",
        showConfirmButton: false,
        html: true
    });
});';
		echo "</script>";
}
}

?>
</body>

</html>