<?php
    session_start();
    if(isset($_SESSION['sv'])) {
        $data_arr = $_SESSION['sv'];
    } else {
        $data_arr = array();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Document</title>
    <style>
        a {
            color : white;
        }
        a:hover {
            color : white;
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
               <center><h3> Danh sách sinh viên</h3></center>
            </div>
            <div class="panel-body">
                <button type="button" class="btn btn-primary"><a href="add.php">Thêm mới</a></button>
                <?php 
                if(isset($_COOKIE['msg'])){
                ?>
                    <div class="alert alert-success">
                        <strong>Thong bao: </strong> <?php echo $_COOKIE['msg']; ?>
                    </div>
                <?php }  ?>
                <br>
                <!-- <div></div> -->
                <br>
                <table class="table table-hover table-bordered">
                    <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Họ tên</th>
                        <th>Action</th>
                        <!-- <th></th> -->
                    </tr>
                    

                    <?php
                        $i = 0;
                        foreach($data_arr as $value) {
                            $i++;
                    ?>
                        <tr>
                            <td><?php  echo $i; ?></td>
                            <td><?php  echo $value['code']; ?></td>
                            <td><?php  echo $value['name']; ?></td>
                            <td>
                                <a href="detail.php?code=<?php echo $value['code']; ?>" class = "btn btn-success">Detail</a>
                                <a href="detail.php?code=<?php echo $value['code']; ?>" class = "btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    <?php } ?>
                 </table>
            </div>
        </div>
    </div>
</body>
</html>