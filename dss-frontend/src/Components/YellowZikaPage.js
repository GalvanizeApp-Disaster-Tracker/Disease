import React, { Fragment } from 'react'

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageContent,
} from '@elastic/eui';

import YellowZikaTable from './YellowZikaTable'

const RabiesPage = () => {

  return (
    <Fragment>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Yellow Fever & Zika Virus Cases</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <h2>Content header</h2>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <YellowZikaTable />
        </EuiPageContent>
      </EuiPageBody>
    </Fragment>
  )
}

export default RabiesPage