
$(".k-btn").on('click', () => {
	const q1v = $("#p1-q1-i").val();
	if (q1v==="2.41" || q1v==="2.42") {
		$("#p1-q2").show();
	}

	const q2v = $("#p1-q2-i").val();
	if (q2v==="13.13") {
		$("#p1-q3").show();
	}

	const q3v = $("#p1-q3-i").val();
	if (q3v==="347") {
		$("#next-container").show();
	}
})


$("#pgy-challenge-btn").on('click', () => {
	location.href = "pidgey-challenge.html";
  });


