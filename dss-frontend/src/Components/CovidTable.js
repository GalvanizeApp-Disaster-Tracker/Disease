import React, { Fragment } from 'react'

import {
  EuiSpacer,
  EuiInMemoryTable
} from '@elastic/eui'

const RabiesTable = ({
  data,
}) => {

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
      field: 'tot_cases',
      name: 'Total Cases',
      sortable: true,
    },
    {
      field: 'new_case',
      name: 'New Cases',
      sortable: true,
    },
    {
      field: 'tot_death',
      name: 'Total Deaths',
      sortable: true,
    },
    {
      field: 'new_death',
      name: 'New Deaths',
      sortable: true
    }
  ];

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

export default RabiesTable