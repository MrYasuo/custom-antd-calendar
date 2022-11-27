import { useCalendarContext, useModalContext } from "@/contexts";
import { Select, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const Lecture = ({ lectureId }: { lectureId: number | null }) => {
	const { setLecture } = useModalContext();
	const { lecturesList } = useCalendarContext();
	return (
		<>
			<Space>
				<Typography.Text>Lecture:</Typography.Text>
				<Select
					options={lecturesList}
					fieldNames={{ label: "name", value: "id" }}
					value={lectureId}
					placeholder={"Select lecture"}
					onChange={(value) => setLecture(value)}></Select>
				{lectureId && <Link to={`/lecture/${lectureId}`}>Go to lecture</Link>}
			</Space>
		</>
	);
};

export default Lecture;
