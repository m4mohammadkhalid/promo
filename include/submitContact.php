<?php
header("Content-type: application/json");

$returnData = array();
$data       = $_POST;

if (!empty($_POST['name'])) {
    $name    = $data['name'];
    $email   = $data['email'];
    $message = $data['message'];

    $message = '
    	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">
		    <head>
		        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		        <title>Contact Inquiry | ToAng</title>
		    </head>
		    <body style="font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;box-sizing:border-box;margin:0 auto;line-height:1.4;color:#74787e">
		        <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" style="width:100%;-premailer-width:100%;margin:0;padding:0">
		            <tr>
		                <td align="center">
		                    <table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="width:100%;-premailer-width:100%;margin:0;padding:0">
		                        <tr>
		                            <td class="email-masthead" style="background-color:#292929;text-align:center;padding:15px 0;">
		                                <a href="/" class="email-masthead_name" target="_blank" style="font-size:24px;font-weight:700;color:#fff;text-decoration:none">
		                                    <img src="Logo" alt="logo">
		                                </a>
		                            </td>
		                        </tr>
		                        <tr>
		                            <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #edeff2;width:100%;margin:0;padding: 20px 0;-premailer-width:100%;border-bottom:1px solid #edeff2">
		                                <table class="email-body_inner" align="center" cellpadding="0" cellspacing="0" style="width:700px;margin:0 auto;-premailer-width:570px;padding:0">
		                                    <tbody>
		                                        <tr>
		                                            <td colspan="2">
		                                                <p style="font-size: 14px">
		                                                    A Contact request has been placed on your website <a href="" target="_blank" style="text-decoration: none;color: #3f9ce8;">www.WebURL.com</a>
		                                                    Details are as below:
		                                                </p>
		                                            </td>
		                                        </tr>
		                                        <tr>
		                                            <td style="font-size: 14px;width: 15%">Name: </td>
		                                            <td style="font-size: 14px;">' . $name . '</td>
		                                        </tr>
		                                        <tr>
		                                            <td style="font-size: 14px;">Email: </td>
		                                            <td style="font-size: 14px;">' . $email . '</td>
		                                        </tr>
		                                        <tr>
		                                            <td style="font-size: 14px;">Message: </td>
		                                            <td style="font-size: 14px;">' . $message . '</td>
		                                        </tr>
		                                        <tr>
		                                            <td colspan="2">
		                                                <p style="font-size: 14px">
		                                                    Regards,
		                                                    Website
		                                                </p>
		                                            </td>
		                                        </tr>
		                                    </tbody>
		                                </table>
		                            </td>
		                        </tr>
		                        <tr>
		                            <td style="background-color:#292929;text-align:center;width:700px;margin:0 auto;-premailer-width:570px;padding:0">
		                                <p style="color: #FFF;">&copy; <script> document.write(new Date().getFullYear()) </script> <a href="/" target="_blank" style="text-decoration: none;color: #3f9ce8;">ToAng</a>. All rights reserved.</p>
		                            </td>
		                        </tr>
		                    </table>
		                </td>
		            </tr>
		        </table>
		    </body>
		</html>
    ';

    $to      = 'testing@webdomain.co.in';
    //enter your email
    $subject = 'Contact Inquiry | ToAng';

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: ToAng<noreply@webdomain.com>' . "\r\n";

    // mail($to, $subject, $message, $headers);

    $returnData['errorcode'] = 1;
    $returnData['response']  = 'Contact submited successfully.';
} else {
    $returnData['errorcode'] = 0;
    $returnData['response']  = 'Something went wrong. Please try again.';
}

echo json_encode($returnData, JSON_PRETTY_PRINT);
