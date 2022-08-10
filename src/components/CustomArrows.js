/* eslint-disable react/prop-types */
import React from 'react';

export function CustomPrevArrow(props) {
  const {
    className, disabled, onClick, onKeyPressHandler,
  } = props;

  return (
    <div
      className={className}
      style={{
        background: `${disabled ? '#efefef' : '#97BF0F'}`,
        borderRadius: '0 50px 50px 0',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        padding: '15px 10px 15px 15px',
        position: 'absolute',
        left: '0px',
        zIndex: 50,
        cursor: 'pointer',
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      <img alt="prev" className="w-50" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/36/ffffff/external-Chevron-arrows-tanah-basah-glyph-tanah-basah-4.png" />
    </div>
  );
}

export function CustomNextArrow(props) {
  const {
    className, disabled, onClick, onKeyPressHandler,
  } = props;
  return (
    <div
      className={className}
      style={{
        background: `${disabled ? '#efefef' : '#97BF0F'}`,
        borderRadius: '50px 0 0 50px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '15px 10px 15px 15px',
        position: 'absolute',
        right: '0px',
        zIndex: 50,
        cursor: 'pointer',
      }}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      <img alt="next" className="w-50" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/36/ffffff/external-Next-Page-arrows-tanah-basah-glyph-tanah-basah-3.png" />

    </div>
  );
}
