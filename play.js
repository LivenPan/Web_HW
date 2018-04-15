var my = new Object();
// loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;



$(document).ready(function () {
    $.ajax({
        dataType: 'jsonp',
        url: 'https://cdn.voicetube.com/assets/captions/63259_zh_tw.js'}).always(
            function(){my.captions=captions;
            console.log(my.captions);
    });
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

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
      //event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  // The function indicates that when playing a video (state=1),
  // the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;    
      }
  }
  function stopVideo() {
      player.stopVideo();
  }
/*$(document).addEventListener('google-youtube-ready',function(){
	$.each(my.captions.en,function(i){
		my.captions.en[i].cn = '';
		if(my.captions.hasOwnProperty('zh-Hant')){
			my.captions.en[i].cn = my.captions['zh-Hant'][i].text;
		};
	});
	my.sentences = my.captions.en;
	console.log("event");
});*/

