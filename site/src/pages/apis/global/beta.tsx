import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../../components/ApiReference';
import SpecVersionDropdown from '../../../components/SpecVersionDropdown';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    const options = [
      {title: "V1", link: "/apis/global"},
      {title: "V2", link: "/apis/global/v2"},
      {title: "Beta", link: "/apis/global/beta"}
    ];
    const version = "Beta"

    return (
        <Layout
          title={`Global API Beta Reference`}
          description=""
          keywords="Bandwidth,API,Global,Voxbone">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.globalSpec_beta} color={siteConfig.customFields.voxbonePurple} />
        </Layout>
    );
}
