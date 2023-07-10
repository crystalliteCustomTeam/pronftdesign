<?php

	include 'database.php';

	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$message=$_POST['comments'];
	$date = date("l jS \of F Y h:i:s A");
	$sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`) 
	VALUES ('$name','$email','$phone','$message','$date')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Phone</td><td>	$phone</td></tr><tr><td>Message</td><td>$message</td></tr></table>";

  include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="info@pronftdesign.com";
	$mail->Password="3Sq<2aRR!";
	$mail->SetFrom("info@pronftdesign.com");
	$mail->addAddress("info@pronftdesign.com");
	$mail->IsHTML(true);
	$mail->Subject="Lead Form - Pro NFT Design";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>true,
		'verify_peer_name'=>true,
		'allow_self_signed'=>true
	));

	if($mail->send()){
	
	}else{
	
	}

mysqli_close($conn);


?>

	
	

	
