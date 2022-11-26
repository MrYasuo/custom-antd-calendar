import { useModalContext } from "@/contexts";
import { Checkbox, Space } from "antd";
import moment from "moment";

const Check = () => {
	const { startDate, checkStart, setCheckStart, setCheckEnd } =
		useModalContext();
	const handleCheckStartDisabled = () =>
		!moment(startDate).isAfter(moment(), "day");
	return (
		<Checkbox.Group>
			<Space direction="vertical">
				<Checkbox
					value="start"
					disabled={handleCheckStartDisabled()}
					onChange={(e) => setCheckStart(e.target.value)}>
					Start
				</Checkbox>
				<Checkbox
					value="end"
					disabled={!checkStart}
					onChange={(e) => setCheckEnd(e.target.value)}>
					End
				</Checkbox>
			</Space>
		</Checkbox.Group>
	);
};

export default Check;
