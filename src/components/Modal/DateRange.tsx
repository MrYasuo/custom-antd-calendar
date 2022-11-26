import { useModalContext } from "@/contexts";
import { EditOutlined } from "@ant-design/icons";
import { Button, DatePicker, Space, Typography } from "antd";
import moment from "moment";

const DateRange = () => {
	const {
		dateEditState,
		setDateEditState,
		setStartDate,
		setEndDate,
		tempStartDate,
		tempEndDate,
		startDate,
		endDate,
		setTempEndDate,
		setTempStartDate,
	} = useModalContext();
	const renderDateRange = () => {
		if (dateEditState && !(startDate && endDate)) {
			return (
				<Space>
					<DatePicker.RangePicker
						format={"DD/MM/YYYY HH:mm:ss"}
						showTime={true}
						onChange={(values) => {
							if (!values) return;
							setTempStartDate(values[0]);
							setTempEndDate(values[1]);
						}}
					/>
					<Button
						size="small"
						type="link"
						onClick={() => {
							setDateEditState(false);
							console.log(tempStartDate, tempEndDate);
							if (!tempStartDate || !tempEndDate) return;
							setStartDate(tempStartDate?.format("YYYY-MM-DD HH:mm:ss"));
							setEndDate(tempEndDate?.format("YYYY-MM-DD HH:mm:ss"));
						}}>
						Save
					</Button>
				</Space>
			);
		}
		if (dateEditState && startDate && endDate) {
			return (
				<Space>
					<DatePicker.RangePicker
						defaultValue={[moment(startDate), moment(endDate)]}
						format={"DD/MM/YYYY HH:mm:ss"}
						showTime={true}
						onChange={(values) => {
							if (!values) return;
							setTempStartDate(values[0]);
							setTempEndDate(values[1]);
						}}
					/>
					<Button
						size="small"
						type="text"
						danger
						onClick={() => {
							setDateEditState(false);
						}}>
						Cancel
					</Button>
					<Button
						size="small"
						type="link"
						onClick={() => {
							setDateEditState(false);
							if (!tempStartDate || !tempEndDate) return;
							setStartDate(tempStartDate?.format("YYYY-MM-DD HH:mm:ss"));
							setEndDate(tempEndDate?.format("YYYY-MM-DD HH:mm:ss"));
						}}>
						Save
					</Button>
				</Space>
			);
		}
		return (
			<Typography.Text>
				<Space>
					<small>
						{startDate} - {endDate}
					</small>
					<a
						onClick={(e) => {
							e.preventDefault();
							setDateEditState(true);
						}}>
						<EditOutlined />
					</a>
				</Space>
			</Typography.Text>
		);
	};
	return renderDateRange();
};

export default DateRange;
