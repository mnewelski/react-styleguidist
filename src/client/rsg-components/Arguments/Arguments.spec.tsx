import React from 'react';
import { shallow } from 'enzyme';
import { ArgumentsRenderer, styles } from './ArgumentsRenderer';
import classes from '../../../../test/classes';

const props = {
	classes: classes(styles),
};

const args = [
	{
		name: 'Foo',
		description: 'Converts foo to bar',
		type: { name: 'Array' },
	},
	{
		name: 'Foo',
	},
];

it('renderer should render arguments', () => {
	const actual = shallow(<ArgumentsRenderer {...props} args={args} />);

	expect(actual).toMatchSnapshot();
});

it('renderer should render heading', () => {
	const actual = shallow(<ArgumentsRenderer {...props} args={[args[1]]} heading />);

	expect(actual).toMatchSnapshot();
});

it('renderer should render nothing for empty array', () => {
	const actual = shallow(<ArgumentsRenderer {...props} args={[]} />);

	expect(actual.getElement()).toBe(null);
});
