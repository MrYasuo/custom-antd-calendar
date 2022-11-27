const fakeMonthData: MonthDataType = {
	11: {
		8: [
			{
				id: 1,
				type: "warning",
				content: "This is warning event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
				lectureId: 1,
				teacherId: 2,
			},
			{
				id: 2,
				type: "success",
				content: "This is usual event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
				lectureId: 2,
				teacherId: 1,
			},
		],
	},
	12: {
		1: [
			{
				id: 1,
				type: "warning",
				content: "This is warning event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
				lectureId: 1,
				teacherId: 2,
			},
			{
				id: 2,
				type: "success",
				content: "This is usual event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
				lectureId: 2,
				teacherId: 1,
			},
		],
	},
};

const fakeTeachersList = [
	{
		name: "Nguyễn Văn A",
		id: 1,
	},
	{
		name: "Nguyễn Văn B",
		id: 2,
	},
];

const fakeLecturesList = [
	{ name: "lecture 1", id: 1 },
	{ name: "lecture 2", id: 2 },
];

export { fakeMonthData, fakeTeachersList, fakeLecturesList };
