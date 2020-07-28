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

  const columns = [
    {
      field: 'state',
      name: 'State',
      sortable: true,
    },
    {
      field: 'submission_date',
      name: 'Date',
      sortable: true,
    },
    {
      field: 'conf_cases',
      name: 'Confirmed Cases',
      sortable: true,
    },
    {
      field: 'new_case',
      name: 'New Cases',
      sortable: true,
    },
    {
      field: 'conf_death',
      name: 'Confirmed Deaths',
      sortable: true,
    }
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