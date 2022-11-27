import { ClvModal } from "@/components/Modal";
import { locale } from "@/configs";
import { useCalendarContext, useModalContext } from "@/contexts";
import { useScript } from "@/hooks";
import { fakeLecturesList, fakeMonthData, fakeTeachersList } from "@/utils";
import { Button, Calendar, Select, Typography } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import { useEffect, useState } from "react";

const ClvCalendar = () => {
	const {
		currentDate,
		setCurrentDate,
		setTeachersList,
		setLecturesList,
		currentId,
		setCurrentId,
	} = useCalendarContext();
	const { setIsModalOpen } = useModalContext();
	const [currentMonth, setCurrentMonth] = useState<number>(
		moment().month() + 1
	);
	const [fullListData, setFullListData] = useState<MonthDataType>({});
	useEffect(() => {
		setFullListData(fakeMonthData);
		setTeachersList(fakeTeachersList);
		setLecturesList(fakeLecturesList);
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
							{item.title + " " + item.teacherId}
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
		return data || {};
	};

	const handleSelect = (date: Moment) => {
		setCurrentDate(date);
		setIsModalOpen(true);
	};

	const handlePanelChange = (date: Moment) => {
		setCurrentMonth(date.month() + 1);
		setIsModalOpen(false);
	};

	return (
		<div className="ClvCalendar">
			<Calendar
				dateCellRender={dateCellRender}
				onSelect={handleSelect}
				headerRender={headerRender}
				onPanelChange={handlePanelChange}
				// @ts-ignore
				locale={locale}
			/>
			<ClvModal data={getDataOfDateById()}></ClvModal>
		</div>
	);
};

export default ClvCalendar;
