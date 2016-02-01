
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

/*
var sumName = "";

function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    var API_KEY = "";
    API_KEY = $("#theKey").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;

                sumName = json[SUMMONER_NAME_NOSPACES].name;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}

function Name() {
    alert(sumName);
}
*/
