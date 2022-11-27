interface DateDataType {
	id: number;
	type: PresetStatusColorType;
	content: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	teacherId: number;
	lectureId: number;
}

interface MonthDataType {
	[key: number]: {
		[key: number]: DateDataType[];
	};
}

interface CalendarContextInterface {
	currentDate: Moment | null;
	setCurrentDate: (date: Moment | null) => void;
	teachersList: Teacher[];
	setTeachersList: (teachers: Teacher[]) => void;
	lecturesList: Lecture[];
	setLecturesList: (lectures: Lecture[]) => void;
	currentId: number | nul;
	setCurrentId: (id: number | null) => void;
}
