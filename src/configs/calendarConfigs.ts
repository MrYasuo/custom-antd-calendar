import moment from "moment";

const locale = {
	lang: {
		locale: "vn",
		dayFormat: moment.updateLocale("vn", {
			weekdaysMin: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		}),
	},
};

export { locale };
