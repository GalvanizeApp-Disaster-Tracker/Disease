import React, { Fragment } from 'react';

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiIcon
} from '@elastic/eui';

const Header = () => {
  return (
    <Fragment>
      <EuiHeader>
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem border="none">
            <EuiIcon type="logoSecurity" size="xl" />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem border="none">
            About
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    </Fragment>
  )
}

export default Header