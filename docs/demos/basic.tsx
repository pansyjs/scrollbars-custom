import React from 'react';
import ScrollbarReact from '@pansy/custom-scrollbar-react';
import '../../scrollbar.less';

export default () => {
  return (
    <ScrollbarReact
      style={{
        maxHeight: 300,
      }}
      autoHide={false}
    >
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
      <p>123</p>
      <p>124</p>
    </ScrollbarReact>
  )
}
