import React from 'react';
const FontAwesome = (props) => {
  return <i className={`fa fa-fw fa-${props.icon}`} aria-hidden="true" />
}
export default FontAwesome
