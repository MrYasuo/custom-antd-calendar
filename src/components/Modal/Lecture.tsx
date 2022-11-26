import { Select, Space, Typography } from "antd";
import { lectureLists } from "@/utils";
import { useModalContext } from "@/contexts";
import { Link } from "react-router-dom";

const Lecture = ({ lectureId }: { lectureId: number | null }) => {
	const { setLecture } = useModalContext();
	return (
		<>
			<Space>
				<Typography.Text>Lecture:</Typography.Text>
				<Select
					options={lectureLists}
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
