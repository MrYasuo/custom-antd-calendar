import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [tempStartDate, setTempStartDate] = useState(null);
	const [tempEndDate, setTempEndDate] = useState(null);
	const [dateEditState, setDateEditState] = useState(false);
	const [content, setContent] = useState(null);
	const [teacher, setTeacher] = useState(null);
	const [checkStart, setCheckStart] = useState(false);
	const [checkEnd, setCheckEnd] = useState(false);
	const [lecture, setLecture] = useState(null);
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
