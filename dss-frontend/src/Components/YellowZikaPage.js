import React, { Fragment, useEffect, useState } from 'react'

import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
} from '@elastic/eui';

import Empty from './Common/Empty'
import Loader from './Common/Loader'

import YellowZikaTable from './YellowZikaTable'
import YellowZikaChart from './YellowZikaChart'

const RabiesPage = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/data/yellow-zika`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error')
        }
      })
      .then(json => setData(json))
      .catch(err => setError(err))
    setLoading(false)
  }, [])

  if (loading) {
    return <Loader />
  } else if (error) {
    return <Empty error={error} />
  } else if (data !== []) {
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
            </EuiPageHeaderSection>
          </EuiPageHeader>
          <EuiPanel paddingSize="m" hasShadow>
            Zika virus is a member of the virus family Flaviviridae. It is spread by daytime-active Aedes mosquitoes, such as A. aegypti and A. albopictus. Its name comes from the Ziika Forest of Uganda, where the virus was first isolated in 1947. Zika virus is related to the dengue, yellow fever, Japanese encephalitis, and West Nile viruses. Since the 1950s, it has been known to occur within a narrow equatorial belt from Africa to Asia. From 2007 to 2016, the virus spread eastward, across the Pacific Ocean to the Americas, leading to the 2015–2016 Zika virus epidemic.
            </EuiPanel>
          <EuiSpacer />
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
              <EuiPanel betaBadgeLabel="Stats" hasShadow>
                <YellowZikaTable
                  data={data}
                />
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPanel betaBadgeLabel="Cases" hasShadow>
                <YellowZikaChart
                  data={data}
                />
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageBody>
      </Fragment>
    )
  }
}

export default RabiesPage