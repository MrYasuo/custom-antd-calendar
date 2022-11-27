import { ClvCalendar } from "@/components";
import { CalendarContextProvider, ModalContextProvider } from "@/contexts";

const App = () => {
	return (
		<div className="App">
			<CalendarContextProvider>
				<ModalContextProvider>
					<ClvCalendar />
				</ModalContextProvider>
			</CalendarContextProvider>
		</div>
	);
};

export default App;
