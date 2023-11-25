/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
	'*': {
		boxSizing: 'border-box',
	} as const,
	'html, body, #root': {
		margin: 0,
		padding: 0,
		height: '100%',
	},
	'.h1-title': {
		fontFamily: 'Inter',
		fontSize: '48px',
		fontStyle: 'normal',
		fontWeight: '700',
	},
	'.h2-title': {
		fontFamily: 'Inter',
		fontSize: '36px',
		fontStyle: 'normal',
		fontWeight: '700',
	},
	'.h3-title': {
		fontFamily: 'Inter',
		fontSize: '24px',
		fontStyle: 'normal',
		fontWeight: '500',
	},
	'.h4-title': {
		fontFamily: 'Inter',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHight: '18px',
	},
	'.p1-text': {
		fontFamily: 'Inter',
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHight: '16px',
	},

	':root': {
		'--blue-1': '#6C47FF',
		'--blue-2': '#4F2CD9',
		'--blue-3': '#3213AC',
		'--blue-4': '#240C86',
		'--gray-0-white': '#FFF',
		'--gray-1': '#F8F8F8',
		'--gray-2': '#D9D9D9',
		'--gray-3': '#595959',
		'--gray-4-black': '#000',
		'--neutral-grey-10': '#262626',
		'--red-1': '#D73737',
		'--red-2': '#B72121',
	},
};
