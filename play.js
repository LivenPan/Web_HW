  
// loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;


/*get subtitle from voicetube*/
/*
$(document).ready(function () {
    $.ajax({
        dataType: 'jsonp',
        url: 'https://cdn.voicetube.com/assets/captions/63259_zh_tw.js'}).always(
            function(){my.captions=captions;
            console.log(my.captions);
    });
});*/

$(document).ready(function () {
	var ob;
	my_url = "./video_1.js";
	$.getJSON(my_url, function(json) {
		console.log(json.captions);
		/*var cols = ["id", "caption_id", "seq", "text", "translate_comment", "start", "dur", "is_scores", "created_at", "updated_at"];
    	for (var i = 0; i < json.en.length; i++) {
    		$('#subtitle').append('<a href="#" class="list-group-item">'+ my.captions.en[i][cols[3]]+'</a>');
  		}*/
	});

    //var cols = ["id", "caption_id", "seq", "text", "translate_comment", "start", "dur", "is_scores", "created_at", "updated_at"];
    //for (var i = 0; i < my.captions.en.length; i++) {
    //	$('#subtitle').append('<a href="#" class="list-group-item">'+ my.captions.en[i][cols[3]]+'</a>');

  	//}
  	
});

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    videoId: 'paVXPXoyDdo',
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,        // 讀取時自動播放影片
        controls: 1,        // 在播放器顯示暫停／播放按鈕
        showinfo: 0,        // 影片標題顯示
        modestbranding: 0,  // YouTube Logo顯示
        loop: 0,            // 影片循環播放
        fs: 0,              // 全螢幕按鈕顯示
        cc_load_policty: 0, // 字幕顯示
        iv_load_policy: 3,  // 影片註解顯示
        autohide: 0         // 當播放影片時隱藏影片控制列
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
  });
  }


  //check字幕的button id元素添加一个事件addEventListener
  /*let captionBtnEvent = JSON.parse(captions);
  document.getElementById("captionBtn1").addEventListener("click", captionBtn1Event);
  document.getElementById("captionBtn2").addEventListener("click", captionBtn2Event);
  document.getElementById("captionBtn3").addEventListener("click", captionBtn3Event);

  function captionBtn1Event() {
    var captionStartTime1 = console.log(
      captionBtnEvent.
    );
    var captionDurationTime1 = console.log(
      captionBtnEvent.
    );

    player.seekTo(seconds:captionStartTime1, allowSeekAhead:true);
    setTimeout(stopVideo, captionDurationTime1);
  }
  function captionBtn2Event() {
    var captionStartTime2 = console.log(
      captionBtnEvent.
    );
    var captionDurationTime2 = console.log(
      captionBtnEvent.
    );

    player.seekTo(seconds:captionStartTime2, allowSeekAhead:true);
    setTimeout(stopVideo, captionDurationTime2);
  }
  function captionBtn3Event() {
    var captionStartTime3 = console.log(
      captionBtnEvent.
    );
    var captionDurationTime3 = console.log(
      captionBtnEvent.
    );

    player.seekTo(seconds:captionStartTime3, allowSeekAhead:true);
    setTimeout(stopVideo, captionDurationTime3);
  }*/

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
      event.target.stopVideo();
  }

  function onPlayerStateChange(event) {
    
  }

  function stopVideo() {
        player.stopVideo();
  }

