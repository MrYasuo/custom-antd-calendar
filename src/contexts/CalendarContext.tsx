import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Moment } from "moment";

interface CalendarContextInterface {
	currentDate: Moment | null;
	setCurrentDate: (date: Moment | null) => void;
}

const CalendarContext = createContext<CalendarContextInterface | null>(null);

const CalendarContextProvider = ({ children }: { children: ReactNode }) => {
	const [currentDate, setCurrentDate] = useState<Moment | null>(null);
	return (
		<CalendarContext.Provider value={{ currentDate, setCurrentDate }}>
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
