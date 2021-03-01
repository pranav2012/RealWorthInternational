import React from 'react';
import '../styles/index.scss';
import App from '../Container/App';
import {Helmet} from 'react-helmet';

export default () => {
  return(
    <>
      <Helmet>
        <title>RealWorthInternational</title>
          <meta name='description' content='REAL WORTH INTERNATIONAL is a fast growing service provider having
            experience and expertise in high quality fittings and valves for Instrumentation,
            Natural Gas, Hydraulic and Pneumatic applications.REAL WORTH INTERNATIONAL is spreading its wings in Asia, Africa and
            Europe. As a team, we are committed to deliver market-leading products that help
            improve performance for our clients all over the world.'/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <App/>
    </>
  );
}
