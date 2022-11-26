import { Checkbox, ModalProps, Select, Typography } from "antd";
import { Modal, Space } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useCalendarContext, useModalContext } from "@/contexts";
import Title from "./Title";
import DateRange from "./DateRange";
import Description from "./Description";
import Teacher from "./Teacher";
import Check from "./Check";
import Lecture from "./Lecture";

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
		setTeacher,
		setLecture,
		teacher,
		lecture,
	} = useModalContext();
	const { currentDate } = useCalendarContext();

	useEffect(() => {
		setTitle(data.title);
		setStartDate(data.startDate);
		setEndDate(data.endDate);
		setDateEditState(!(data.startDate && data.endDate) ? true : false);
		setContent(data.content);
		setTeacher(data.teacherId);
		setLecture(data.lectureId);
	}, [
		data.title,
		data.teacherId,
		data.lectureId,
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
			<Space direction="vertical">
				<Description />
				<Teacher teacherId={teacher} />
				<Lecture lectureId={lecture} />
				<Check />
			</Space>
		</Modal>
	);
};

export default MyModal;
