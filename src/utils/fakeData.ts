import { PresetStatusColorType } from "antd/es/_util/colors";

interface DateDataType {
	id: number;
	type?: PresetStatusColorType;
	content?: string;
	title?: string;
	description?: string;
	startDate?: string;
	endDate?: string;
	teacher?: {
		name?: string;
	};
}

interface MonthDataType {
	[key: number]: {
		[key: number]: DateDataType[];
	};
}

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
			},
			{
				id: 2,
				type: "success",
				content: "This is usual event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
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
			},
			{
				id: 2,
				type: "success",
				content: "This is usual event.",
				title: "Title event",
				description: "description...",
				startDate: "2022-11-08 20:54:23",
				endDate: "2022-11-08 21:54:23",
			},
		],
	},
};

export { fakeMonthData };
