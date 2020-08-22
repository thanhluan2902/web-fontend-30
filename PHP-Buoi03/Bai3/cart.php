<?php
    session_start();
    $data_cart = $_SESSION['cart'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>	
    <title>Document</title>
    
    <style>
        table {
            border:1px black solid;
        }
        th,td {
            text-align: center;
            border: 1px red solid;
        }
    
    </style>
</head>
<body>
    <div class="container">
        <?php
            // session_start();
            $i=0;
        ?>
        <table width="100%">

            <tr>
				<th colspan="6"></th>
				<th><a href="listSP.php">Tiếp tục mua hàng</a></th>
			</tr> 

            <tr>
                <th colspan="7">Thông tin giỏ hàng (Hiện có <?php echo $i ?> sản phẩm trong giỏ)</th>
            </tr>
            <tr>
				<th width="5%">ID</th>
                <th width="20%">Tên sản phẩm</th>
                <th width="15%">Đơn giá</th>
                <th width="10%">Số lượng</th>
				<th width="10%">Thành tiền</th>
                <th width="20%">Thời gian cập nhật</th>
                <th width=20%></th>
			</tr>

        <?php $tong=0;foreach($data_cart as $key => $value){ ?>
            <tr>
                <td><?php echo $value['msp']; ?></td>
                <td><?php echo $value['tenSP']; ?></td>
                <td><?php echo $value["dongia"]; ?></td>
                <td><?php echo $value['soLuong']; ?></td>
                <td><?php echo $value['soLuong']*$value["dongia"]; ?></td>
                <td><?php echo "31/12/2000" ?></td>
                <td><a href="delete.php?msp=<?php echo $key; ?>">Xóa khỏi giỏ hàng</a></td>
            </tr>
        <?php 
            $tong += $value['soLuong']*$value["dongia"];
        } ?>

        <tr>
            <td colspan='4'><strong>Tổng tiền</strong></td>
            <td><strong><?php echo $tong; ?></strong></td>
            <td colspan='2'></td>
        </tr>
        </table>
    </div>
</body>
</html>