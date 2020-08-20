<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once("list.php");

        // setcookie('msg','Thêm mới thành công' , time() + 10);

        $sv = array[
            'code' = $_POST['code'],
            'name' = $_POST['name'],
            'email' = $_POST['sdt'],
            'sdt' = $_POST['email'],
            'gt' = $_POST['gt'],
            'address' = $_POST['address']
        ];
        $_SESSION['sv'] = $sv;

        // var_dump($_SESSION);

        // echo $_POST['code']."<br>";
        // echo $_POST['name']."<br>";
        // echo $_POST['email']."<br>";
        // echo $_POST['sdt']."<br>";
        // echo $_POST['gt']."<br>";
        // echo $_POST['address']."<br>";

        
    ?>
</body>
</html>