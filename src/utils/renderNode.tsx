import React from 'react';

export default function (
  Component: React.ComponentType<any>,
  content: any,
  defaultProps: any = {},
) {
  if (content === null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content(defaultProps);
  }
  if (content === true) {
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string') {
    if (content.length === 0) return null;
    return <Component {...defaultProps}>{content}</Component>;
  }
  if (typeof content === 'number') {
    return <Component {...defaultProps}>{content}</Component>;
  }
  return <Component {...defaultProps} {...content} />;
}
