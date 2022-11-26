import {
	Badge,
	Button,
	Calendar,
	Card,
	Divider,
	Select,
	Typography,
} from "antd";
import { PresetStatusColorType } from "antd/es/_util/colors";
import { locale } from "@/configs";
import type { Moment } from "moment";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { fakeMonthData } from "@/utils";
import Modal from "./Modal/Modal";
import { useScript } from "@/hooks";
import moment from "moment";
import { useCalendarContext, useModalContext } from "@/contexts";

interface DateDataType {
	id: number;
	type?: PresetStatusColorType;
	content?: string;
	title?: string;
	description?: string;
	startDate?: string;
	endDate?: string;
	teacher?: {
		name?: string;
	};
}

interface MonthDataType {
	[key: number]: {
		[key: number]: DateDataType[];
	};
}

const MyCalendar = () => {
	const { currentDate, setCurrentDate } = useCalendarContext();
	const { isModalOpen, setIsModalOpen } = useModalContext();
	const [currentId, setCurrentId] = useState<number>();
	const [currentMonth, setCurrentMonth] = useState<number>(
		moment().month() + 1
	);
	const [fullListData, setFullListData] = useState<MonthDataType>({});
	useEffect(() => {
		setFullListData(fakeMonthData);
	}, [currentMonth]);
	const getListData = (value: Moment | null) => {
		if (!value) return [];
		if (!fullListData[value.month() + 1]) return [];
		return fullListData[value.month() + 1][value.date()] || [];
	};
	const dateCellRender = (value: Moment) => {
		const listData = getListData(value);
		return (
			<>
				{listData.map((item, index) => {
					return (
						<Button
							type="text"
							key={index}
							onClick={() => {
								setCurrentId(item.id);
								setIsModalOpen(true);
							}}>
							<Badge text={item.content} status={item.type} />
						</Button>
					);
				})}
			</>
		);
	};
	useScript("/script.js");
	// @ts-ignore
	const headerRender = ({ value, onChange }) => {
		const monthsShort = moment.monthsShort();
		const monthOptions = monthsShort.map((month, idx) => (
			<Select.Option key={idx} value={idx}>
				{month}
			</Select.Option>
		));
		const currentMonth = value.month();

		return (
			<div style={{ padding: 8, display: "flex", width: "100%" }}>
				<Typography.Title level={4} style={{ width: "100%" }}>
					Custom header
				</Typography.Title>
				<Select
					size="middle"
					dropdownMatchSelectWidth={false}
					value={currentMonth}
					onChange={(newMonth) => {
						const now = value.month(newMonth);
						onChange(now);
						setCurrentMonth(newMonth + 1);
					}}>
					{monthOptions}
				</Select>
			</div>
		);
	};

	const getDataOfDateById = () => {
		const data = getListData(currentDate).find((item) => item.id === currentId);
		return data;
	};

	return (
		<div>
			<Calendar
				dateCellRender={dateCellRender}
				onSelect={(date) => {
					setCurrentDate(date);
					setIsModalOpen(true);
				}}
				headerRender={headerRender}
				onPanelChange={(date) => setCurrentMonth(date.month() + 1)}
				// @ts-ignore
				locale={locale}
			/>
			<Modal data={getDataOfDateById()}></Modal>
		</div>
	);
};

export default MyCalendar;
