import { Select, Space, Typography } from "antd";
import { teacherLists } from "@/utils";
import { useModalContext } from "@/contexts";

const Teacher = ({ teacherId }: { teacherId: number | null }) => {
	const { setTeacher } = useModalContext();
	return (
		<>
			<Space>
				<Typography.Text>Teacher:</Typography.Text>
				<Select
					options={teacherLists}
					fieldNames={{ label: "name", value: "id" }}
					value={teacherId}
					placeholder={"Select teacher"}
					onChange={(value) => setTeacher(value)}></Select>
			</Space>
		</>
	);
};

export default Teacher;
