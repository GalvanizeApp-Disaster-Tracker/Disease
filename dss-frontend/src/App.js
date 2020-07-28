import React, { Fragment } from 'react';

import {
  EuiTabbedContent,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
} from '@elastic/eui'

import Header from './Components/Header'
import YellowZikaPage from './Components/YellowZikaPage'
import RabiesPage from './Components/RabiesPage'
import CovidPage from './Components/CovidPage'

function App() {
  return (
    <Fragment>
      <Header />
      <EuiPage>
        <EuiPageBody component="div">
          <EuiPageContent>
            <EuiFlexGroup gutterSize="xl">
              <EuiFlexItem>
                <EuiTabbedContent
                  tabs={[
                    {
                      id: 'covid',
                      name: 'COVID-19',
                      content: (
                        <CovidPage />
                      )
                    },
                    {
                      id: 'rabies',
                      name: 'Rabies',
                      content: (
                        <RabiesPage />
                      )
                    },
                    {
                      id: 'yellowzika',
                      name: 'Yellow Fever/Zika Virus',
                      content: (
                        <YellowZikaPage />
                      )
                    }
                  ]}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </Fragment>
  );
}


export default App;
