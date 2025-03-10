import { SectionViewModel } from 'rsg-components/Section';
import { ComponentViewModel } from 'rsg-components/ReactComponent';
import getFilterRegExp from './getFilterRegExp';
import filterComponentsByName from './filterComponentsByName';

/**
 * Fuzzy filters sections by section or component name.
 *
 * @param {Array} sections
 * @param {string} query
 * @return {Array}
 */
export default function filterSectionsByName(
	sections: (SectionViewModel | ComponentViewModel)[],
	query: string
): SectionViewModel[] {
	const regExp = getFilterRegExp(query);

	return sections
		.map(sectionOrComponent => {
			const section = sectionOrComponent as SectionViewModel;
			return {
				...section,
				sections: section.sections ? filterSectionsByName(section.sections, query) : [],
				components: section.components ? filterComponentsByName(section.components, query) : [],
			};
		})
		.filter(
			section =>
				section.components.length > 0 ||
				section.sections.length > 0 ||
				regExp.test(section.name || '-')
		);
}
