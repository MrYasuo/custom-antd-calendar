import { useModalContext } from "@/contexts";
import { EditOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";

const Title = () => {
	const { title, setTitle, setIsModalOpen } = useModalContext();
	return (
		<>
			{title ? (
				<Typography.Title
					level={5}
					editable={{ onChange: (value) => setTitle(value) }}>
					{title}
				</Typography.Title>
			) : (
				<Space.Compact style={{ width: "100%" }}>
					<Input
						placeholder="Title"
						style={{ width: "80%" }}
						onPressEnter={(e) => setTitle((e.target as HTMLInputElement).value)}
						allowClear
					/>
				</Space.Compact>
			)}
		</>
	);
};

export default Title;
