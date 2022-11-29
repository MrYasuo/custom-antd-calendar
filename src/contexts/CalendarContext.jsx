import moment from "moment";
import { createContext, useContext, useState } from "react";

const CalendarContext = createContext();

const CalendarContextProvider = ({ children }) => {
	const [currentDate, setCurrentDate] = useState(moment());
	const [teachersList, setTeachersList] = useState([]);
	const [lecturesList, setLecturesList] = useState([]);
	const [currentId, setCurrentId] = useState(null);
	const value = {
		currentDate,
		setCurrentDate,
		teachersList,
		setTeachersList,
		lecturesList,
		setLecturesList,
		currentId,
		setCurrentId,
	};
	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
};

const useCalendarContext = () => {
	const context = useContext(CalendarContext);
	if (!context) {
		throw new Error(
			"useCalendarContext must be used within a CalendarContextProvider"
		);
	}
	return context;
};

export default CalendarContextProvider;
export { useCalendarContext };
