import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Moment } from "moment";

interface ModalContextInterface {
	isModalOpen: boolean;
	setIsModalOpen: (flag: boolean) => void;
	title: string | null;
	setTitle: (title: string) => void;
	startDate: string | null;
	setStartDate: (date: string) => void;
	endDate: string | null;
	setEndDate: (date: string) => void;
	tempStartDate: Moment | null;
	setTempStartDate: (date: Moment | null) => void;
	tempEndDate: Moment | null;
	setTempEndDate: (date: Moment | null) => void;
	dateEditState: boolean;
	setDateEditState: (flag: boolean) => void;
	content: string | null;
	setContent: (content: string) => void;
	teacher: number | null;
	setTeacher: (id: number) => void;
	checkStart: boolean;
	setCheckStart: (flag: boolean) => void;
	checkEnd: boolean;
	setCheckEnd: (flag: boolean) => void;
	lecture: number | null;
	setLecture: (id: number) => void;
}

const ModalContext = createContext<ModalContextInterface | null>(null);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string | null>(null);
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string | null>(null);
	const [tempStartDate, setTempStartDate] = useState<Moment | null>(null);
	const [tempEndDate, setTempEndDate] = useState<Moment | null>(null);
	const [dateEditState, setDateEditState] = useState(false);
	const [content, setContent] = useState<string | null>(null);
	const [teacher, setTeacher] = useState<number | null>(null);
	const [checkStart, setCheckStart] = useState<boolean>(false);
	const [checkEnd, setCheckEnd] = useState<boolean>(false);
	const [lecture, setLecture] = useState<number | null>(null);
	const value = {
		isModalOpen,
		setIsModalOpen,
		title,
		setTitle,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		tempStartDate,
		setTempStartDate,
		tempEndDate,
		setTempEndDate,
		dateEditState,
		setDateEditState,
		content,
		setContent,
		teacher,
		setTeacher,
		checkStart,
		setCheckStart,
		checkEnd,
		setCheckEnd,
		lecture,
		setLecture,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};

const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error(
			"useModalContext must be used within a ModalContextProvider"
		);
	}
	return context;
};

export default ModalContextProvider;
export { useModalContext };
