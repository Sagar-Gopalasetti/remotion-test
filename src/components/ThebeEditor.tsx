import React, { useState, useEffect } from 'react';
import { ThebeServerProvider, useThebeServer } from 'thebe-react';
import thebe from 'thebe-core';

const ThebeSetup: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const { connect } = useThebeServer();

  useEffect(() => {
    const initializeThebe = async () => {
      await thebe.bootstrap({
        requestKernel: true,
        mountActivateWidget: true,
        mountStatusWidget: true,
        binderOptions: {
          repo: 'executablebooks/thebe-binder-base',
          ref: 'main',
        },
        kernelOptions: {
          path: '/',
          kernelName: 'python3',
        },
      });
    };

    initializeThebe();
  }, []);

  const handleConnect = async () => {
    try {
      await connect();
      setConnected(true);
      console.log('Connected to Jupyter Kernel');
    } catch (error) {
      console.error('Failed to connect to kernel:', error);
    }
  };

  return (
    <div>
      <button onClick={handleConnect} disabled={connected}>
        {connected ? 'Connected to Kernel' : 'Connect to Kernel'}
      </button>
      {/* Additional UI components for code execution can be added here */}
    </div>
  );
};

const ThebeSetupWrapper: React.FC = () => {
  const options = {
    kernelOptions: {
      path: '/',
      kernelName: 'python3',
    },
    binderOptions: {
      repo: 'executablebooks/thebe-binder-base',
      ref: 'main',
    },
  };

  return (
    <ThebeServerProvider connect={false} config={{}} options={options}>
      <ThebeSetup />
    </ThebeServerProvider>
  );
};

export default ThebeSetupWrapper;