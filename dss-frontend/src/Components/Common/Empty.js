import React, { Fragment } from 'react'

import {
  EuiEmptyPrompt
} from '@elastic/eui'

const Empty = ({
  error
}) => {
  return (
    <Fragment>
      <EuiEmptyPrompt
        iconType="editorStrike"
        title={<h2>{error.message}</h2>}
        body={
          <Fragment>
            <p>
              Could be an error serverside or database connection
        </p>
            <p>You&rsquo;ll need spice to rule Arrakis, young Atreides.</p>
          </Fragment>
        }
      />
    </Fragment>
  )
}

export default Empty