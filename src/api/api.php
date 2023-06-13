<!-- e-mail sending api - PLACE TO THE ROOT FOLDER ON SERVER -->

<?php

  contact();

  function contact()
  {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
      header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

      $formdata = json_decode(file_get_contents('php://input'), true);
      
      if(!empty($formdata)) {
          $fullName = $formdata['fullName'];
          $offerSubject = $formdata['offerSubject'];
          $offerInformation = $formdata['offerInformation'];
          $phoneNumber = $formdata['phoneNumber'];
          $emailAddress = $formdata['emailAddress'];

          $contactData = array(
            'fullName' => $fullName,
            'offerSubject' => $offerSubject,
            'offerInformation' => $offerInformation,
            'phoneNumber' => $phoneNumber,
            'emailAddress' => $emailAddress,
            'created_at' => date('Y-m-d H:i:s', time())
          );

          sendemail($contactData);
      }
  }

  function sendemail($contactData)
  {
      $message = '<p>Ajánlatkérés érkezett a Lancz Klíma Weboldalról:</p><br />';
      $message .= '<p><strong>Név: </strong>'.$contactData['fullName'].'</p>';
      $message .= '<p><strong>Tárgy: </strong>'.$contactData['offerSubject'].'</p>';
      $message .= '<p><strong>Információ: </strong>'.$contactData['offerInformation'].'</p>';
      $message .= '<p><strong>Telefonszám: </strong>'.$contactData['phoneNumber'].'</p>';
      $message .= '<p><strong>E-mail: <br /></strong>'.$contactData['emailAddress'].'</p>';

      $success = mail('info@lanczklima.hu', 'Lancz Klíma - Ajánlatkérés', $message, 'Content-Type: text/html; charset=utf-8', '-f '.$contactData['emailAddress']);
    
      if (!$success) {
          $errorMessage = error_get_last()['message'];
      }

      echo $success;
  }

?>