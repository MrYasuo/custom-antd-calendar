import type { Moment } from "moment";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const CalendarContext = createContext<CalendarContextInterface | null>(null);

const CalendarContextProvider = ({ children }: { children: ReactNode }) => {
	const [currentDate, setCurrentDate] = useState<Moment | null>(null);
	const [teachersList, setTeachersList] = useState<Teacher[]>([]);
	const [lecturesList, setLecturesList] = useState<Lecture[]>([]);
	const [currentId, setCurrentId] = useState<number | null>(null);
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
