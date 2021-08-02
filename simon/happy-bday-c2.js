
var pidgeyCount = 0;
function show_image(src, width, height, alt) {
	var img = document.createElement("img");
	img.id = "pgy";
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
	
	// set the position
	img.style.position = 'absolute';
	img.style.top = (document.body.clientHeight - 300) * Math.random() + 'px';
	img.style.left = (document.body.clientWidth - 210) * Math.random() + 'px';

	$("#pidgey-container").append(img);
	
	setTimeout(() => {
		$("#pgy").remove();
	}, 700);
}


$('body').on('click','img',function(){
	pidgeyCount = pidgeyCount + 1;
	$("#pidgey-count").html(pidgeyCount);
});

const pgyInterval = setInterval(() => { 
	show_image("../img/pidgey.png", 300, 300, 'foo')
}, 700);
	
setTimeout(() => {
	clearTimeout(pgyInterval);
}, 10000);

setTimeout(() => {
	if (pidgeyCount < 15) {
		$("#sorry").show();
	} else {
		$("#success").show();
	}
}, 12000);

$("#pidgey-count").html(pidgeyCount);