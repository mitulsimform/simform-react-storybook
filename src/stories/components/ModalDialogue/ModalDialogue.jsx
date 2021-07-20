import React, { useState } from 'react';
import {Modal, Button } from 'antd'
import PropTypes from 'prop-types';
import './modalDialogue.css';

/**
 * Primary UI component for user interaction
 */
export const ModalDialogue = ({ primary, backgroundColor, size, label, ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <Button type="primary" onClick={showModal}>
      Open Modal
      </Button>
      <Modal title={label} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

ModalDialogue.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large','Xlarge']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ModalDialogue.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
