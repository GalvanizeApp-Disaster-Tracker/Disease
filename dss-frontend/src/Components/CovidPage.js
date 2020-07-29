import React, { Fragment, useState, useEffect } from 'react'

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

import CovidTable from './CovidTable'
import CovidMap from './CovidMap'

const CovidPage = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/data/covid`)
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
                <h1>COVID-19 Cases & Deaths</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
            <EuiPageHeaderSection>
              <h2>Current as of: {new Date(Date.now() - (86400 * 1000)).toLocaleString()}</h2>
            </EuiPageHeaderSection>
          </EuiPageHeader>
          <EuiPanel paddingSize="m" hasShadow>
            CDC reports aggregate counts of COVID-19 cases and death numbers daily online. Data on the COVID-19 website and CDC’s COVID Data Tracker are based on these most recent numbers reported by states, territories, and other jurisdictions. This data set of “United States COVID-19 Cases and Deaths by State over Time” combines this information. However, data are dependent on jurisdictions’ timely and accurate reporting.
            </EuiPanel>
          <EuiSpacer />
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem>
              <EuiPanel betaBadgeLabel="Stats" hasShadow>
                <CovidTable
                  data={data}
                />
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiPanel betaBadgeLabel="Map" hasShadow>
                <CovidMap
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

export default CovidPage