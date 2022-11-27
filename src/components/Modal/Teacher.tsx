import { useCalendarContext, useModalContext } from "@/contexts";
import { Select, Space, Typography } from "antd";

const Teacher = ({ teacherId }: { teacherId: number | null }) => {
	const { setTeacher } = useModalContext();
	const { teachersList } = useCalendarContext();
	return (
		<>
			<Space>
				<Typography.Text>Teacher:</Typography.Text>
				<Select
					options={teachersList}
					fieldNames={{ label: "name", value: "id" }}
					value={teacherId}
					placeholder={"Select teacher"}
					onChange={(value) => setTeacher(value)}></Select>
			</Space>
		</>
	);
};

export default Teacher;
