<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        // sử dụng strrev()  
        function Palindrome($string){   
            if (strrev($string) == $string){   
                return 1;   
            } 
            else{ 
                return 0; 
            } 
        }   
        
        $s = "znenrz";  
        if(Palindrome($s)){   
            echo "Chuỗi nhập vào là : 'Palindrome'";   
        }  
        else {   
        echo "Chuỗi nhập vào : không phải là 'Palindrome'";   
        }
    ?> 
</body>
</html>