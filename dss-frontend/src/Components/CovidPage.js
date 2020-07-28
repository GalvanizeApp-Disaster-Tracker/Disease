import React, { Fragment } from 'react'

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageContent,
} from '@elastic/eui';

import CovidTable from './CovidTable'

const CovidPage = () => {

  return (
    <Fragment>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>COVID-19 Cases & Deaths</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <h2>Content header</h2>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <CovidTable />
        </EuiPageContent>
      </EuiPageBody>
    </Fragment>
  )
}

export default CovidPage