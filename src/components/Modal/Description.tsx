import { useModalContext } from "@/contexts";
import { EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Select, Space, Typography } from "antd";
import moment from "moment";

const teacherLists = [
	{
		label: "Nguyễn Văn A",
		value: "Nguyen Van A",
	},
	{
		label: "Nguyễn Văn B",
		value: "Nguyen Van B",
	},
];

const Description = () => {
	const { startDate, content, setContent, teacherName, setTeacherName } =
		useModalContext();
	const handleCheckboxDisabled = () => {
		if (moment(startDate).isSame(moment(), "day")) return false;
		return true;
	};
	return (
		<Space direction="vertical">
			{content ? (
				<Typography.Text
					editable={{
						onChange: (value) => setContent(value),
					}}>
					<small>{content}</small>
				</Typography.Text>
			) : (
				<Space.Compact style={{ width: "100%" }}>
					<Input
						placeholder="Title"
						style={{ width: "80%" }}
						onPressEnter={(e) =>
							setContent((e.target as HTMLInputElement).value)
						}
						allowClear
					/>
				</Space.Compact>
			)}
			<Select
				options={teacherLists}
				defaultValue={teacherName}
				placeholder={"Select teacher"}
				onChange={(value) => setTeacherName(value)}></Select>
			<Checkbox disabled={handleCheckboxDisabled()}>Start</Checkbox>
			<Checkbox>End</Checkbox>
		</Space>
	);
};

export default Description;
