import React from 'react';
import { Button } from '@fluentui/react-components';

const Examples: React.FC = () => {
  return (
    <>
        <div className="pt-4">
            <Button appearance="primary" onClick={() => alert('hello')}>Hello World</Button>
        </div>
        <div className="pt-4">
            <Button appearance="primary" onClick={() => alert('hello')}>Hello World</Button>
        </div>
    </>
  );
};

export default Examples;
