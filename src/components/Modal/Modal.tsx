import { Checkbox, ModalProps, Select, Typography } from "antd";
import { Modal, Space } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCalendarContext, useModalContext } from "@/contexts";
import Title from "./Title";
import DateRange from "./DateRange";
import Description from "./Description";

interface MyModalProps extends ModalProps {
	data: any;
}

const MyModal = ({ data = {}, ...props }: MyModalProps) => {
	const {
		isModalOpen,
		setIsModalOpen,
		setTitle,
		setStartDate,
		setEndDate,
		setDateEditState,
		setContent,
		setTeacherName,
	} = useModalContext();
	const { currentDate } = useCalendarContext();

	useEffect(() => {
		setTitle(data.title);
		setStartDate(data.startDate);
		setEndDate(data.endDate);
		setDateEditState(!(data.startDate && data.endDate) ? true : false);
		setContent(data.content);
		setTeacherName(data.teacherName);
	}, [
		data.title,
		data.teacherName,
		data.content,
		data.startDate,
		data.endDate,
		currentDate,
	]);
	return (
		<Modal
			{...props}
			maskClosable={false}
			open={isModalOpen}
			onOk={() => setIsModalOpen(false)}
			onCancel={() => setIsModalOpen(false)}
			title={
				<Space direction="vertical" style={{ width: "100%" }}>
					<Title />
					<DateRange />
				</Space>
			}>
			<Description />
		</Modal>
	);
};

export default MyModal;
