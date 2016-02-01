
$(document).ready(function(){

  $('#temp').addClass("s");
  var summonerName = "sktt1faker";
  //var summonerName = "abc";
  var api_key = "d24228a4-c215-49ff-89a1-a5e31d5059be";
  $('#result').html("df");

  $.ajax({
    url:
    //'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+summonerName+'?api_key='+api_key,
    'https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/'+summonerName+'?api_key='+api_key,
    type: 'GET',
    dataType:'json',
    data:{

    },
    success:function(json){
      document.getElementById("result").innerHTML = json[summonerName].name + json[summonerName].summonerLevel;
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      alert("error");
    }
  }); //ajax


}); //jQuery
