import React, { Fragment } from 'react'

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageContent,
} from '@elastic/eui';

import RabiesTable from './RabiesTable'

const RabiesPage = () => {

  return (
    <Fragment>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Animal & Human Rabies Cases</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <h2>Content header</h2>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <RabiesTable />
        </EuiPageContent>
      </EuiPageBody>
    </Fragment>
  )
}

export default RabiesPage