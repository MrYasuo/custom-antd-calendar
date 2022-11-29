import { useModalContext } from "@/contexts";
import { Input, Space, Typography } from "antd";

const Title = () => {
	const { title, setTitle } = useModalContext();
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
						onPressEnter={(e) => setTitle(e.target.value)}
						allowClear
					/>
				</Space.Compact>
			)}
		</>
	);
};

export default Title;
