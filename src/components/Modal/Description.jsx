import { useModalContext } from "@/contexts";
import { Input, Space, Typography } from "antd";

const Description = () => {
	const { content, setContent } = useModalContext();
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
						onPressEnter={(e) => setContent(e.target.value)}
						allowClear
					/>
				</Space.Compact>
			)}
		</Space>
	);
};

export default Description;
