import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';

const styles = ({ space, color, fontSize, fontFamily }: Theme) => ({
	details: {
		marginBottom: space[2],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.base,
	},
});

interface DetailsProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const DetailsRenderer: React.FunctionComponent<DetailsProps> = ({ classes, children }) => {
	return <details className={classes.details}>{children}</details>;
};

DetailsRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled<DetailsProps>(styles)(DetailsRenderer);
