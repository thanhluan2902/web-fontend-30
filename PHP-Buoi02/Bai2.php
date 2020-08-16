<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $arrs = [1,2,3,4,5,6,7,8,9,10];
        echo "Mảng truyền vào là : ";
        print_r($arrs);
        echo "<br><br>Mảng đảo ngược là : ";
        // for($i = count($arr) ; $i >= 0; $i--) {
        //     echo $arr[$i]." - ";
        // }

        rsort($arrs);  
		print_r($arrs);

    ?>
</body>
</html>