import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';
import prismTheme from '../../../styles/prismTheme';

const styles = ({ space, color, fontSize, fontFamily, borderRadius }: Theme) => ({
	pre: {
		fontFamily: fontFamily.monospace,
		fontSize: fontSize.small,
		lineHeight: 1.5,
		color: color.base,
		whiteSpace: 'pre-wrap',
		wordWrap: 'normal',
		tabSize: 2,
		hyphens: 'none',
		backgroundColor: color.codeBackground,
		padding: [[space[1], space[2]]],
		border: [[1, color.codeBackground, 'solid']],
		borderRadius,
		marginTop: 0,
		marginBottom: space[2],
		...prismTheme({ color }),
	},
});

export interface PreProps {
	className?: string;
	children: React.ReactNode;
}

type PrePropsWithClasses = JssInjectedProps & PreProps;

export const PreRenderer: React.FunctionComponent<PrePropsWithClasses> = ({
	classes,
	className,
	children,
}) => {
	const classNames = cx(className, classes.pre);

	const isHighlighted = className && className.indexOf('lang-') !== -1;
	if (isHighlighted && children) {
		return <pre className={classNames} dangerouslySetInnerHTML={{ __html: children.toString() }} />;
	}
	return <pre className={classNames}>{children}</pre>;
};

PreRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Styled<PrePropsWithClasses>(styles)(PreRenderer);
