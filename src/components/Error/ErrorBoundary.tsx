import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  error: any;
  errorInfo: any;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>
            The error has been reported, click{' '}
            <span onClick={() => {}}>here</span> to fill a report.
          </p>
          <p>
            <a href="/">Go back</a>
          </p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
