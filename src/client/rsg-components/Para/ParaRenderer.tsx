import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';

export const styles = ({ space, color, fontFamily }: Theme) => ({
	para: {
		marginTop: 0,
		marginBottom: space[2],
		color: color.base,
		fontFamily: fontFamily.base,
		fontSize: 'inherit',
		lineHeight: 1.5,
	},
});

interface ParaProps extends JssInjectedProps {
	semantic?: 'p';
	children: React.ReactNode;
}

export const ParaRenderer: React.FunctionComponent<ParaProps> = ({
	classes,
	semantic,
	children,
}) => {
	const Tag = semantic || 'div';

	return <Tag className={classes.para}>{children}</Tag>;
};

ParaRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	semantic: PropTypes.oneOf(['p']),
	children: PropTypes.node.isRequired,
};

export default Styled<ParaProps>(styles)(ParaRenderer);
