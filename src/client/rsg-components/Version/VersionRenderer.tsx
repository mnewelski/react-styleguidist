import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';

const styles = ({ color, fontFamily, fontSize }: Theme) => ({
	version: {
		color: color.light,
		margin: [[5, 0, 0, 0]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		fontWeight: 'normal',
	},
});

interface VersionProps extends JssInjectedProps {
	children?: React.ReactNode;
}

export const VersionRenderer: React.FunctionComponent<VersionProps> = ({ classes, children }) => {
	return (
		<p aria-label="version" className={classes.version}>
			{children}
		</p>
	);
};

VersionRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.node,
};

export default Styled<VersionProps>(styles)(VersionRenderer);
