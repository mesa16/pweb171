<?php
include (Member.php);
$member = new Member ('51015001');
 ?>
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>Test php</title>
     <style type="text/css">
      body{
        background-color: #<?= $member->warna ?>;
      }
      </style>
   </head>
   <body>
     <h1>Hallo, <?= $member->nama ?></h1>
   </body>
 </html>
