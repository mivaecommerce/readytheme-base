<?php
/* Sets a variable to halt processing until we know the submission is valid. */
$proceed=false;

/* Sets the amount of time allowed to complete the form. 5 minutes seems like a good amount of time. */
$seconds=60*5;

/* Checkes that the cookie and security token are present. If they are, we continue processing. */
if(isset($_POST['mms']) && isset($_COOKIE['token']) && $_COOKIE['token'] == md5('abrasax salt'.$_POST['mms'])) $proceed=true;

/* Check all form inputs for possible XSS using strip_tags function. */
$contactName=strip_tags($_POST['contactName']);
$contactEmail=strip_tags($_POST['contactEmail']);
$contactComment=strip_tags($_POST['contactComment']);

/* Add the store and current time information. */
$storeName=strip_tags($_POST['storeName']);
$storeEmail=strip_tags($_POST['storeEmail']);
$now=time();

/* Does the token match the timestamp when run through the md5() function? If not, we know something is up and exit. */
if(!$proceed){ 
	echo "Invalid Token.";
	exit;
}

/* Has too much time elapsed? If so, we take the customer to the error page. */
if(((int)$_POST['mms'] + $seconds) < mktime()){
	header('Location: /ERRORS.html?form=contact&pbm=time');
	exit;
}

/* If e-mail is not valid show error message. This is a fail-safe measure in case the script is hit directly by a bot. */
if (!preg_match('/^[_A-z0-9-]+((\.|\+)[_A-z0-9-]+)*@[A-z0-9-]+(\.[A-z0-9-]+)*(\.[A-z]{2,4})$/', $contactEmail)){
	echo "Missing or Invalid Email Address Format";
	exit();
}

/* Let's prepare the message for the e-mail. */
$message = "<p>Hello $storeName,</p><p>Your contact form has been submitted by <strong>$contactName</strong>.</p><p>Here is what they have to say:</p><p><strong>Name:</strong> $contactName<br /><strong>E-mail Address:</strong> <a href='mailto:$contactEmail'>$contactEmail</a><br /><strong>Their Questions or Comments:</strong> $contactComment</p>";

/* Is the OS Windows or Mac or Linux? */
if (strtoupper(substr(PHP_OS,0,3)==='WIN')){
	$eol="\r\n";
}elseif (strtoupper(substr(PHP_OS,0,3)==='MAC')){
	$eol="\r";
}else{
	$eol="\n";
}

/* Set Common Headers */
$headers = 'From: '.$storeName.' Contact Form <'.$storeEmail.'>'.$eol;
$headers .= 'Reply-To:'.$contactName.'<'.$contactEmail.'>'.$eol;
$headers .= 'Return-Path:'.$contactName.'<'.$contactEmail.'>'.$eol;    // These two to set reply address.
$headers .= "Message-ID: <".$now." TheSystem@".$_SERVER['SERVER_NAME'].">".$eol;
$headers .= "X-Mailer: PHP v".phpversion().$eol;          // These two are used to help avoid spam-filters.
$headers .= 'MIME-Version: 1.0'.$eol;
$headers .= 'Content-type: text/html; charset=iso-8859-1' .$eol;

/* Send the message using mail() function */
mail($storeEmail, "Your ".$storeName." Contact Form Has Been Submitted", $message, $headers);

/* Redirect visitor to the thank you page on success...error page on failue. */
if(mail){
	header('Location: /THANKYOU.html?form=contact');
	exit();
}else{
	header('Location: /ERRORS.html?form=contact&pbm=sent');
	exit();
}
?>