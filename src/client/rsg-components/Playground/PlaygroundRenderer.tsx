import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps, Theme } from 'rsg-components/Styled';

export const styles = ({ space, color, borderRadius }: Theme) => ({
	root: {
		marginBottom: space[4],
	},
	preview: {
		padding: space[2],
		border: [[1, color.border, 'solid']],
		borderRadius,
		// the next 2 lines are required to contain floated components
		width: '100%',
		display: 'inline-block',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: space[1],
	},
	toolbar: {
		marginLeft: 'auto',
	},
	tab: {}, // expose className to allow using it in 'styles' settings
	padded: {
		// add padding between each example element rendered
		'& > *': {
			isolate: false,
			marginLeft: -space[1],
			marginRight: -space[1],
			'& > *': {
				isolate: false,
				marginRight: space[1],
				marginLeft: space[1],
			},
		},
	},
});

interface PlaygroundRendererProps extends JssInjectedProps {
	exampleIndex: number;
	name?: string;
	padded: boolean;
	preview: React.ReactNode;
	// TODO: need to find a better type here too
	previewProps: any;
	tabButtons: React.ReactNode;
	tabBody: React.ReactNode;
	toolbar: React.ReactNode;
}

export const PlaygroundRenderer: React.FunctionComponent<PlaygroundRendererProps> = ({
	classes,
	exampleIndex,
	name,
	padded,
	preview,
	previewProps,
	tabButtons,
	tabBody,
	toolbar,
}) => {
	const { className, ...props } = previewProps;
	const previewClasses = cx(classes.preview, className, { [classes.padded]: padded });
	return (
		<div className={classes.root} data-testid={`${name}-example-${exampleIndex}`}>
			<div className={previewClasses} {...props} data-preview={name} data-testid="preview-wrapper">
				{preview}
			</div>
			<div className={classes.controls}>
				<div className={classes.tabs}>{tabButtons}</div>
				<div className={classes.toolbar}>{toolbar}</div>
			</div>
			<div className={classes.tab}>{tabBody}</div>
		</div>
	);
};

PlaygroundRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	exampleIndex: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	padded: PropTypes.bool.isRequired,
	preview: PropTypes.node.isRequired,
	previewProps: PropTypes.object.isRequired,
	tabButtons: PropTypes.node.isRequired,
	tabBody: PropTypes.node.isRequired,
	toolbar: PropTypes.node.isRequired,
};

export default Styled<PlaygroundRendererProps>(styles)(PlaygroundRenderer);
