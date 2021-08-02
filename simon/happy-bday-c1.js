counter = 
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
		$("#p1-q4").show();
	}

	const q4v = $("#p1-q4-i").val();
	if (q4v==="alomomola") {
		$("#next-container").show();
	}
})


$("#pgy-challenge-btn").on('click', () => {
	location.href = "pidgey-challenge.html";
  });


