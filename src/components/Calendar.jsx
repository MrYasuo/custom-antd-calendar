import { ClvModal } from "@/components/Modal";
import { locale } from "@/configs";
import { useCalendarContext, useModalContext } from "@/contexts";
import { useScript } from "@/hooks";
import { fakeLecturesList, fakeMonthData, fakeTeachersList } from "@/utils";
import { Button, Calendar, Select, Typography } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import "./ClvCalendar.css";

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
	const [fullListData, setFullListData] = useState({});
	useEffect(() => {
		setFullListData(fakeMonthData);
		setTeachersList(fakeTeachersList);
		setLecturesList(fakeLecturesList);
	}, [currentDate.month()]);
	const getListData = (value) => {
		if (!value) return [];
		if (!fullListData[value.month() + 1]) return [];
		return fullListData[value.month() + 1][value.date()] || [];
	};
	const dateCellRender = (value) => {
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

		return (
			<div style={{ padding: 8, display: "flex", width: "100%" }}>
				<Typography.Title level={4} style={{ width: "100%" }}>
					{`Year: ${value.year()}`}
				</Typography.Title>
				<Select
					size="middle"
					dropdownMatchSelectWidth={false}
					value={currentDate.month()}
					onChange={(newMonth) => {
						const clone = value.clone();
						const now = clone.month(newMonth);
						onChange(now);
						setCurrentDate(now);
						setIsModalOpen(false);
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

	console.table({
		currentDate: currentDate.date(),
		currentMonth: currentDate.month() + 1,
	});

	const handleSelect = (date) => {
		setCurrentDate(date);
		setIsModalOpen(true);
	};

	return (
		<div className="ClvCalendar">
			<Calendar
				dateCellRender={dateCellRender}
				onSelect={handleSelect}
				headerRender={headerRender}
				// @ts-ignore
				locale={locale}
			/>
			<ClvModal data={getDataOfDateById()}></ClvModal>
		</div>
	);
};

export default ClvCalendar;
