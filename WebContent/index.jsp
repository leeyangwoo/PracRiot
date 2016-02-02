<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Welcome</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="js/script.js" type='text/javascript'></script>
</head>
<body>
  <div class="container">
    <div id="temp" class="jumbotron">
      <h1>Riot api</h1>
      <mark>소환사 이름을 검색해보세요</mark>
    </div>
    <div class="row" id="inputDiv">
    <!--  <form role="form"> -->
        <div class="form-group col-xs-2">
          <label for="sumName">소환사 이름:</label>
          <input type="text" class="form-control" id="sumName" name="name" placeholder="소환사명">
        </div>
        <button type="button" class="btn btn-success" id="btnSearch">검색</button>
    <!--  </form> -->
    </div>
    <div class="row" id="resultName">
        name
    </div>
    <div class="row" id="resultLevel">
        lv
    </div>
    <div class="row" id="resultId">
        id
    </div>
    <div class="row" id="resultTier">

    </div>

  </div>
</body>
</html>
