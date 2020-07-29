import React, { Fragment } from 'react'

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiImage,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
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
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPanel paddingSize="m" hasShadow>
          Rabies is usually spread through an animal bite. Animals most likely to spread rabies include dogs, bats, coyotes, foxes, skunks, and raccoons.
          Symptoms include fever, headache, excess salivation, muscle spasms, paralysis, and mental confusion.
          Seek immediate medical attention after a bite or suspected bite. There is no specific treatment for rabies. Once symptoms appear, it's nearly always fatal. A vaccine can prevent infection.
          </EuiPanel>
        <EuiSpacer />
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem grow={false}>
            <EuiPanel betaBadgeLabel="Awareness" hasShadow>
              <EuiImage
                size="xl"
                hasShadow
                alt="The Office Rabies Awareness"
                url={process.env.PUBLIC_URL + "./rabies.jpg"}
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel betaBadgeLabel="Stats" hasShadow>
              <RabiesTable />
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageBody>
    </Fragment>
  )
}

export default RabiesPage