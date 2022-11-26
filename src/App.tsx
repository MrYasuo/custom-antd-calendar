import { Calendar } from "@/components";
import { CalendarContextProvider, ModalContextProvider } from "@/contexts";

const App = () => {
	return (
		<div className="App">
			<CalendarContextProvider>
				<ModalContextProvider>
					<Calendar />
				</ModalContextProvider>
			</CalendarContextProvider>
		</div>
	);
};

export default App;
