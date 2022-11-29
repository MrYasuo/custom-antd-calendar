import { useCalendarContext, useModalContext } from "@/contexts";
import { Modal, Space } from "antd";
import { useEffect } from "react";
import Check from "./Check";
import DateRange from "./DateRange";
import Description from "./Description";
import Lecture from "./Lecture";
import Teacher from "./Teacher";
import Title from "./Title";

const ClvModal = ({ data = {}, ...props }) => {
	const modalContext = useModalContext();
	const { currentDate, setCurrentId } = useCalendarContext();
	useEffect(() => {
		modalContext.setTitle(data.title);
		modalContext.setStartDate(data.startDate);
		modalContext.setEndDate(data.endDate);
		modalContext.setDateEditState(
			!(data.startDate && data.endDate) ? true : false
		);
		modalContext.setContent(data.content);
		modalContext.setTeacher(data.teacherId);
		modalContext.setLecture(data.lectureId);
	}, [
		data.title,
		data.teacherId,
		data.lectureId,
		data.content,
		data.startDate,
		data.endDate,
		currentDate,
	]);
	const handleOk = () => {
		modalContext.setIsModalOpen(false);
		setCurrentId(null);
	};
	const handleCancel = () => {
		modalContext.setIsModalOpen(false);
		setCurrentId(null);
	};
	return (
		<Modal
			{...props}
			maskClosable={false}
			open={modalContext.isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			title={
				<Space direction="vertical" style={{ width: "100%" }}>
					<Title />
					<DateRange />
				</Space>
			}>
			<Space direction="vertical">
				<Description />
				<Teacher teacherId={modalContext.teacher} />
				<Lecture lectureId={modalContext.lecture} />
				<Check />
			</Space>
		</Modal>
	);
};

export default ClvModal;
