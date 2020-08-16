<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function sapXepTangDan($arrs) {
            $temp;
            for($i = 0; $i < count($arrs)-1; $i++) {
                for($j = $i+1; $j < count($arrs); $j++) {
                    if($i > $j) {
                        $temp = $arrs[$i];
                        $arrs[$i] = $arrs[$j];
                        $arrs[$j] = $temp;
                    }
                }
            }
            return $arrs;
        }

        $arrs = [100,3,6,2,4,8,10,20];
        echo "Mảng vừa nhập là :   ";
        print_r($arrs);

        echo "<br><br>Mảng sắp xếp tăng dần là : ";
        sort($arrs);
        print_r($arrs);

    ?>
</body>
</html>