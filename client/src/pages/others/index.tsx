import React from 'react';
import './index.css';

interface OtherProps {
  pageId?: string | undefined;
}
const Others: React.FC<OtherProps> = ({ pageId }) => {
  return (
    <div className="other" id={pageId}>
      <ul className="">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  );
};

export default Others;
