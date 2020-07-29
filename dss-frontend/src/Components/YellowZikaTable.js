import React, { Fragment } from 'react'

import {
  EuiSpacer,
  EuiInMemoryTable
} from '@elastic/eui'

const YellowZikaTable = ({
  data,
}) => {

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

export default YellowZikaTable