import React from 'react';
import './index.css';

interface OtherProps {
  pageId?: string | undefined;
}
const Others: React.FC<OtherProps> = ({ pageId }) => {
  return <div id={pageId}>Other</div>;
};

export default Others;