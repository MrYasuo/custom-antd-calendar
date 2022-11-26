import { Popover } from "antd";
import Card from "./Card";
import type { PopoverProps } from "antd";

const MyPopover = (props: PopoverProps) => {
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<Popover
				content={
					<>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</>
				}
				placement="topLeft"
				{...props}
			/>
		</div>
	);
};

export default MyPopover;
