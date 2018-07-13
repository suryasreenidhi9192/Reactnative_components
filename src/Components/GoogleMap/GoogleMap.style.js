import { css } from 'styled-components';

import { DESKTOP, MOBILE } from '../../../constants';

const commonStyles = css`
  .map-list {
    .map-marker {
      color: white;
    }
  }
`;

export default {
  [DESKTOP]: css`
    ${commonStyles};
  `,
  [MOBILE]: css`
    ${commonStyles};
  `,
};
