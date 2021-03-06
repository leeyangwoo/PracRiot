
$(document).ready(function(){

  var api_key = "d24228a4-c215-49ff-89a1-a5e31d5059be";


  $('#btnSearch').click(function(){             //Button Click
    var summonerNameI = $('#sumName').val();
    if (summonerNameI !== ""){
      $.ajax({
        url:
        'https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/'+summonerNameI+'?api_key='+api_key,
        type: 'GET',
        dataType:'json',
        data:{

        },
        success:function(json){
          var sumName_trim = summonerNameI.replace(/ /gi,"");
          sumName_trim = sumName_trim.toLowerCase().trim();

          var summonerLevel = json[sumName_trim].summonerLevel;
          var summonerName = json[sumName_trim].name;
          var summonerId = json[sumName_trim].id;

          $('#resultName').html(summonerName);
          $('#resultLevel').html(summonerLevel);
          $('#resultId').html(summonerId);
          callTier(summonerId);
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
          alert("error");
        }
      });
    }
  });

  $('#sumName').keyup(function(e){                       //Enter key
    if(e.keyCode == 13){
      var summonerNameI = $('#sumName').val();
      if (summonerNameI !== ""){
        $.ajax({
          url:
          'https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/'+summonerNameI+'?api_key='+api_key,
          type: 'GET',
          dataType:'json',
          data:{

          },
          success:function(json){
            var sumName_trim = summonerNameI.replace(/ /gi,"");
            sumName_trim = sumName_trim.toLowerCase().trim();

            var summonerLevel = json[sumName_trim].summonerLevel;
            var summonerName = json[sumName_trim].name;
            var summonerId = json[sumName_trim].id;

            $('#resultName').html(summonerName);
            $('#resultLevel').html(summonerLevel);
            $('#resultId').html(summonerId);
            callTier(summonerId);
          },
          error:function(XMLHttpRequest, textStatus, errorThrown){
            alert("error");
          }
        });
      }
    }
  });


}); //jQuery

function callTier(id){
  var api_key = "d24228a4-c215-49ff-89a1-a5e31d5059be";
  $.ajax({
    url:
    'https://kr.api.pvp.net/api/lol/kr/v2.5/league/by-summoner/'+id+'/entry?api_key='+api_key,
    type: 'GET',
    dataType: 'json',
    data:{

    },
    success:function(json){
      var summonerTier = json[id][0].tier;
      var summonerDiv = json[id][0].entries[0].division;
      var summonerPoint = json[id][0].entries[0].leaguePoints;
      var summonerWin = json[id][0].entries[0].wins;
      var summonerLoss = json[id][0].entries[0].losses;
      $('#resultTier').html(summonerTier+" "+summonerDiv+" "+summonerPoint+"점<br>"
                          +summonerWin+"승 "+summonerLoss+"패");


    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      alert("error");
    }
  });
}

/*                                             JS Fiddle - trim
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


/*                                                 Faker

  var summonerName = "sktt1faker";
  //var summonerName = "abc";

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
      document.getElementById("resultId").innerHTML = json[summonerName].name + json[summonerName].summonerLevel;
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      alert("error");
    }
  }); //ajax
*/
