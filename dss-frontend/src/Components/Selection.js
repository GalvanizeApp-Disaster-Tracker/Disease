import React, { useState } from 'react';

import { EuiSelect } from '@elastic/eui';

export default () => {
  const options = [
    { value: 'rabies', text: 'Rabies' },
    { value: 'yellowzika', text: 'Yellow Fever/Zika' },
    { value: 'covid', text: 'COVID-19' },
  ];

  const [value, setValue] = useState(options[2].value);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
      <EuiSelect
        id="pageSelection"
        options={options}
        value={value}
        onChange={e => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
  );
};