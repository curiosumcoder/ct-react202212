import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';

const renderMFE = (MFE, emitter = {}) => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          <MFE {...emitter} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default renderMFE;
