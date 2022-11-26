const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const daysOfWeek = $$("th");
daysOfWeek.forEach((day) => {
	if (day.innerText == "Sat" || day.innerText == "Sun") {
		day.style.color = "red";
	}
	day.style.fontWeight = "bold";
});
