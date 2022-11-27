interface ModalContextInterface {
	isModalOpen: boolean;
	setIsModalOpen: (flag: boolean) => void;
	title: string | null;
	setTitle: (title: string | null) => void;
	startDate: string | null;
	setStartDate: (date: string | null) => void;
	endDate: string | null;
	setEndDate: (date: string | null) => void;
	tempStartDate: Moment | null;
	setTempStartDate: (date: Moment | null) => void;
	tempEndDate: Moment | null;
	setTempEndDate: (date: Moment | null) => void;
	dateEditState: boolean;
	setDateEditState: (flag: boolean) => void;
	content: string | null;
	setContent: (content: string | null) => void;
	teacher: number | null;
	setTeacher: (id: number | null) => void;
	checkStart: boolean;
	setCheckStart: (flag: boolean) => void;
	checkEnd: boolean;
	setCheckEnd: (flag: boolean) => void;
	lecture: number | null;
	setLecture: (id: number | null) => void;
}

interface Teacher {
	id: number;
	name: string;
}

interface Lecture {
	id: number;
	name: string;
}

interface MyModalProps extends ModalProps {
	data: Partial<DateDataType>;
}
