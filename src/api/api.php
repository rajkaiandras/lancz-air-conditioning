<?php
if (isset($_GET['run']) && function_exists($_GET['run'])){
  contact();
} else {
  echo 'Function not Found';
}


  function contact()
  {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
      header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

      $formdata = json_decode(file_get_contents('php://input'), true);
      
      if(!empty($formdata)) {
          $painter = $formdata['painter'];
          $name = $formdata['name'];
          $price = $formdata['price'];
          $message = $formdata['message'];
          $subject = $formdata['subject'];

          $contactData = array(
              'painter' => $painter,
              'name' => $name,
              'price' => $price,
              'message' => $message,
              'subject' => $subject,
              'created_at' => date('Y-m-d H:i:s', time())
          );

          sendemail($contactData);
      }
  }

  function sendemail($contactData)
  {
      $message = '<p>Valaki kapcsolatba szeretne lépni veled a következő alkotással kapcsolatban:</p><br />';
      $message .= '<p><strong>Alkotó: </strong>'.$contactData['painter'].'</p>';
      $message .= '<p><strong>Cím: </strong>'.$contactData['name'].'</p>';
      $message .= '<p><strong>Ár: </strong>'.$contactData['price'].'</p>';
      $message .= '<p><strong>Kapcsolat: <br /></strong>'.$contactData['message'].'</p>';

      $success = mail('gabor@mikusgyula.hu', 'Kapcsolat - bronzszobor', $message, 'Content-Type: text/html; charset=utf-8', '-f blackaillas@gmail.com');
    
      if (!$success) {
          $errorMessage = error_get_last()['message'];
      }

      echo $success;
  }

?>