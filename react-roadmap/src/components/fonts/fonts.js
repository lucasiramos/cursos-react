import { createGlobalStyle } from 'styled-components';

import NotoSansJPRegular from './NotoSansJP-Regular.otf';
import NotoSansJPBold from './NotoSansJP-Bold.otf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Noto Sans';
		src: local('Noto Sans'),
		url(${NotoSansJPRegular}) format('otf'),
		url(${NotoSansJPBold}) format('otf');
		font-weight: 300;
		font-style: normal;
	}
`;