import React from 'react';
import { createRoot } from 'react-dom/client';
import PixelNest from './components/PixelNest';
import './styles.css';

class ErrorBoundary extends React.Component<React.PropsWithChildren, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <main className="empty" style={{ minHeight: '100vh' }}><h1>Something went wrong.</h1><p>Your saved ideas are still in this browser.</p><button className="primary" onClick={() => window.location.reload()}>Try again</button><a className="outline" href="#/" onClick={() => this.setState({ failed: false })}>Go Home</a></main>;
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(<ErrorBoundary><PixelNest /></ErrorBoundary>);
