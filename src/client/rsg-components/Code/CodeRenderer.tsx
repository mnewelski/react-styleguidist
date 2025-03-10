import React from 'react';
import PropTypes from 'prop-types';
import Styled, { Theme, JssInjectedProps } from 'rsg-components/Styled';

const styles = ({ fontFamily }: Theme) => ({
	code: {
		fontFamily: fontFamily.monospace,
		fontSize: 'inherit',
		color: 'inherit',
		background: 'transparent',
		whiteSpace: 'inherit',
	},
});

interface CodeProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const CodeRenderer: React.FunctionComponent<CodeProps> = ({ classes, children }) => {
	return <code className={classes.code}>{children}</code>;
};
CodeRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled<CodeProps>(styles)(CodeRenderer);
