import React, { Fragment, useState, useEffect } from 'react'

import {
  EuiSpacer,
  EuiInMemoryTable
} from '@elastic/eui'

import Empty from './Common/Empty'
import Loader from './Common/Loader'

const RabiesTable = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/data/rabies`)
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
      field: 'rabies_animal_cum_2020',
      name: 'Animal Cases YTD',
      sortable: true,
    },
    {
      field: 'rabies_human_cum_2020',
      name: 'Human Cases YTD',
      sortable: true,
    },
    {
      field: 'rabies_animal_current_week',
      name: 'Animal Cases in last 7 days',
      sortable: true,
    },
    {
      field: 'rabies_human_current_week',
      name: 'Human Cases in last 7 days',
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

export default RabiesTable