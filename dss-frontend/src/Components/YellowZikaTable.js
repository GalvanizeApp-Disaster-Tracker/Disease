import React, { Fragment, useState, useEffect } from 'react'

import {
  EuiSpacer,
  EuiInMemoryTable
} from '@elastic/eui'

import Empty from './Common/Empty'
import Loader from './Common/Loader'

const YellowZikaTable = () => {
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

  const columns = [
    {
      field: 'reporting_area',
      name: 'Reporting Area',
      sortable: true,
    },
    {
      field: 'mmwr_year',
      name: 'Year',
      sortable: true,
    },
    {
      field: 'mmwr_week',
      name: 'MMWR Week',
      sortable: true,
    },
    {
      field: 'zika_virus_disease_non_4',
      name: 'Zika Cases YTD',
      sortable: true,
    },
    {
      field: 'yellow_fever_cum_2020',
      name: 'Yellow Fever Cases YTD',
      sortable: true,
    },
    {
      field: 'zika_virus_disease_non',
      name: 'Zika Cases in last 7 days',
      sortable: true,
    },
    {
      field: 'yellow_fever_current_week',
      name: 'Yellow Fever Cases in last 7 days',
      sortable: true,
    },
  ];

  if (loading) {
    return <Loader />
  } else if (error) {
    return <Empty error={error} />
  } else if (data !== []) {
    return (
      <Fragment>
        <EuiSpacer size="l" />
        <EuiInMemoryTable
          items={data}
          columns={columns}
          pagination={true}
          sorting={true}
        />
      </Fragment>
    )
  }
}

export default YellowZikaTable