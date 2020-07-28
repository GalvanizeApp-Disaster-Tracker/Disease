
import React, { useState } from 'react';

import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiText,
  EuiSpacer
} from '@elastic/eui';

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask onClick={closeModal}>
        <EuiModal onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>About</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiText>
              <p>
                Data is pulled from the Center for Disease Controls (CDC) National Notifiable Diseases Surveillance System.
              </p>
              <EuiSpacer size="xs"/>
              <p>
                From the CDC's website: To protect Americans from serious disease, the National Notifiable Diseases Surveillance System (NNDSS) helps public health monitor, control, and prevent about 120 diseases. These diseases are important to monitor nationwide and include infectious diseases such as Zika, foodborne outbreaks such as E. coli, and noninfectious conditions such as lead poisoning. About 3,000 public health departments gather and use data on these diseases to protect their local communities. Through NNDSS, CDC receives and uses these data to keep people healthy and defend America from health threats.
                NNDSS is a multifaceted program that includes the surveillance system for collection, analysis, and sharing of health data. It also includes policies, laws, electronic messaging standards, people, partners, information systems, processes, and resources at the local, state, territorial, and national levels.
              </p>
              <EuiSpacer />
              <a href="https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36">COVID-19 Sources</a>
              <EuiSpacer />
              <a href="https://data.cdc.gov/NNDSS/NNDSS-TABLE-1PP-Yellow-fever-to-Zika-virus-disease/bk9t-cq4b">Yellow Fever & Zika Sources</a>
              <EuiSpacer />
              <a href="https://data.cdc.gov/NNDSS/NNDSS-TABLE-1CC-Rabies-Animal-to-Rabies-Human/6kf3-4udg">Rabies Sources</a>
            </EuiText>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Close
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
  return (
    <div>
      <EuiButton onClick={showModal}>About</EuiButton>

      {modal}
    </div>
  )
}

export default About