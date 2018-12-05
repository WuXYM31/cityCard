var imgSrc = ["img/Holland.svg", "img/France.svg","img/India.svg","img/Italy.svg","img/China.svg","img/America.svg","img/Egypt.svg","img/London.svg","img/Russia.svg"]


$(document).ready(function(){
	var baseUrl = "audio/"
	var onaudio = "on.mp3"
	var offaudio = "off.mp3"

	$("#shuffle").click(function(){
		var i2, j2
		shuffleCard(imgSrc)
		for (i2 = 1; i2 < 4; i2++) {
			for (j2 = 1; j2 < 4; j2++){
				$("#card"+i2+j2).hide()
				$("#Card"+i2+j2).show()
			}
		}
		$("#wrapper div div").each(function(){
			if ($(this).attr("alt") == "negative"){
				$(this).attr("alt","positive")
			}
		})
	})

	$("#wrapper div div").each(function(){
		$(this).click(function(){
			switch($(this).attr("alt")){
				case "positive":
					$("#"+findContent($(this).children().eq(1).attr("id"))).css('display','block')
					$(this).children().eq(0).hide()
					new Audio(baseUrl+onaudio).play()
					$(this).attr("alt","negative")
				    break
				case "negative":
					$(this).children().eq(0).show()
					$(this).children().eq(1).hide()
					new Audio(baseUrl+offaudio).play()
					$(this).attr("alt","positive")
					break
			}
		})
	})
})

function shuffleCard(a) {
    var j, x, i,j1, x1, i1
    x1 = 0

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    for (i1 = 1; i1 < 4; i1++) {
			for (j1 = 1; j1 < 4; j1++){
				document.getElementById("card"+i1+j1).src = a[x1]
	  	  		x1++
			}
		}
}


function findContent(cardId) {
	return conId = cardId.charAt(0).toLowerCase() + cardId.slice(1);
}