import React, { Fragment } from 'react'

import {
  EuiSpacer,
  EuiProgress
} from '@elastic/eui'

const Loader = () => {
  return (
    <Fragment>
      <EuiSpacer />
      <EuiProgress size="xs" color="primary" />
    </Fragment>
  )
}

export default Loader