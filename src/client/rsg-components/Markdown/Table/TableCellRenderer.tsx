import React from 'react';
import PropTypes from 'prop-types';

import Styled, { Theme, JssInjectedProps } from 'rsg-components/Styled';

const styles = ({ space, color, fontSize, fontFamily }: Theme) => ({
	td: {
		padding: [[space[0], space[2], space[0], 0]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.base,
		lineHeight: 1.5,
	},
	th: {
		composes: '$td',
		fontWeight: 'bold',
	},
});

interface TableCellProps extends JssInjectedProps {
	children: React.ReactNode;
	header?: boolean;
}

export const TableCellRenderer: React.FunctionComponent<TableCellProps> = ({
	classes,
	header,
	children,
}) => {
	if (header) {
		return <th className={classes.th}>{children}</th>;
	}

	return <td className={classes.td}>{children}</td>;
};

TableCellRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	header: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
TableCellRenderer.defaultProps = {
	header: false,
};

export default Styled<TableCellProps>(styles)(TableCellRenderer);
