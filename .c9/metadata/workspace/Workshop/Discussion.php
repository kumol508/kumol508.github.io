{"filter":false,"title":"Discussion.php","tooltip":"/Workshop/Discussion.php","undoManager":{"mark":44,"position":44,"stack":[[{"start":{"row":0,"column":0},"end":{"row":66,"column":2},"action":"insert","lines":["<?php","/*","This first bit sets the email address that you want the form to be submitted to.","You will need to change this value to a valid email address that you can access.","*/","$webmaster_email = \"name@example.com\";","","/*","This bit sets the URLs of the supporting pages.","If you change the names of any of the pages, you will need to change the values here.","*/","$feedback_page = \"feedback_form.html\";","$error_page = \"error_message.html\";","$thankyou_page = \"thank_you.html\";","","/*","This next bit loads the form field data into variables.","If you add a form field, you will need to add it here.","*/","$email_address = $_REQUEST['email_address'] ;","$comments = $_REQUEST['comments'] ;","","/*","The following function checks for email injection.","Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.","*/","function isInjected($str) {","\t$injections = array('(\\n+)',","\t'(\\r+)',","\t'(\\t+)',","\t'(%0A+)',","\t'(%0D+)',","\t'(%08+)',","\t'(%09+)'","\t);","\t$inject = join('|', $injections);","\t$inject = \"/$inject/i\";","\tif(preg_match($inject,$str)) {","\t\treturn true;","\t}","\telse {","\t\treturn false;","\t}","}","","// If the user tries to access this script directly, redirect them to the feedback form,","if (!isset($_REQUEST['email_address'])) {","header( \"Location: $feedback_page\" );","}","","// If the form fields are empty, redirect to the error page.","elseif (empty($email_address) || empty($comments)) {","header( \"Location: $error_page\" );","}","","// If email injection is detected, redirect to the error page.","elseif ( isInjected($email_address) ) {","header( \"Location: $error_page\" );","}","","// If we passed all previous tests, send the email then redirect to the thank you page.","else {","mail( \"$webmaster_email\", \"Feedback Form Results\",","  $comments, \"From: $email_address\" );","header( \"Location: $thankyou_page\" );","}","?>"],"id":1}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["e"],"id":2}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["m"],"id":3}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["a"],"id":4}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["n"],"id":5}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["l"],"id":6}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["i"],"id":7}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["k"],"id":8}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["a"],"id":9}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["n"],"id":10}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["d"],"id":11}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["o"],"id":12}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["k"],"id":13}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"remove","lines":["e"],"id":14}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"remove","lines":["l"],"id":15}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["p"],"id":16}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"remove","lines":["m"],"id":17}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"remove","lines":["a"],"id":18}],[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"remove","lines":["x"],"id":19}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["e"],"id":20}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["y"],"id":21}],[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["a"],"id":22}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["h"],"id":23}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["o"],"id":24}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["o"],"id":25}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":31},"action":"remove","lines":["eedback_form"],"id":26}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"remove","lines":["f"],"id":27}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["D"],"id":28}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["i"],"id":29}],[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["s"],"id":30}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["c"],"id":31}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["u"],"id":32}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["s"],"id":33}],[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["i"],"id":35}],[{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["o"],"id":36}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["n"],"id":37}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":27},"action":"remove","lines":["hank_you"],"id":38}],[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["t"],"id":39}],[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["T"],"id":40}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["h"],"id":41}],[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["a"],"id":42}],[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["n"],"id":43}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["k"],"id":44}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["s"],"id":45}]]},"ace":{"folds":[],"scrolltop":418.5,"scrollleft":0,"selection":{"start":{"row":13,"column":24},"end":{"row":13,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"php-start","mode":"ace/mode/php"}},"timestamp":1477207335114,"hash":"fb1a4ce91804793c614f5f46746534dea09108ad"}