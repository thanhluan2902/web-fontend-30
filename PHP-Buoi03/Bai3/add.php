<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>add</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <form action="add_process.php" method="POST" role="form">
            <legend><center>THÊM MỚI NGƯỜI DÙNG</center></legend>
            
            <div class="form-group">
                <label for="">Mã sinh viên</label>
                <input type="text" class="form-control" id="" placeholder="Nhập mã sinh viên" name="user">
            </div>
            
            <div class="form-group">
                <label for="">Họ và tên</label>
                <input type="text" class="form-control" id="" placeholder="Nhập vào họ tên" name="name">
            </div>  

            <div class="form-group">
                <label for="">Số điện thoại</label>
                <input type="text" class="form-control" id="" placeholder="Nhập vào số điện thoại" name="phone">
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="Email" class="form-control" id="" placeholder="Nhập vào email" name="email">
            </div>

            <div class="form-group">
                <label for="">Giới tính</label>
                <br>
                <input type="radio"  id=""name="sex" value="Nam">Nam
                <input type="radio"  id=""name="sex" value="Nữ">Nữ
                <input type="radio"  id=""name="sex" value="Khác">Khác
            </div>

            <div class="form-group">
                <label for="">Địa chỉ</label>
                <input type="text" class="form-control" id="" placeholder="Nhập vào địa chỉ" name="address">
            </div>
            
            <button type="submit" class="btn btn-primary">Thêm</button>
        </form>
    </div>
</body>
</html>