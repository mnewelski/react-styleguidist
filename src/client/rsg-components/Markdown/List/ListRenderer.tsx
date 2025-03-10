import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';

const styles = ({ space, color, fontFamily }: Theme) => ({
	list: {
		marginTop: 0,
		marginBottom: space[2],
		paddingLeft: space[3],
		fontSize: 'inherit',
	},
	ordered: {
		listStyleType: 'decimal',
	},
	li: {
		color: color.base,
		fontFamily: fontFamily.base,
		fontSize: 'inherit',
		lineHeight: 1.5,
		listStyleType: 'inherit',
	},
});

interface ListProps extends JssInjectedProps {
	ordered?: boolean;
	children: React.ReactNode;
}

export const ListRenderer: React.FunctionComponent<ListProps> = ({
	classes,
	ordered,
	children,
}) => {
	const Tag = ordered ? 'ol' : 'ul';

	const classNames = cx(classes.list, ordered && classes.ordered);

	return (
		<Tag className={classNames}>
			{Children.map(children, li =>
				React.isValidElement(li) ? cloneElement(li, { className: classes.li }) : li
			)}
		</Tag>
	);
};
ListRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	ordered: PropTypes.bool,
	children: PropTypes.node.isRequired,
};
ListRenderer.defaultProps = {
	ordered: false,
};

export default Styled<ListProps>(styles)(ListRenderer);
