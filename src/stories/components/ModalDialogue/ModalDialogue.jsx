import React, { useState } from "react";
import { Modal, Button } from "antd";
import PropTypes from "prop-types";
import "./modalDialogue.css";

/**
 * Primary UI component for user interaction
 */
export const ModalDialogue = ({
  title,
  htmlContent,
  onCancelClick,
  onOkClick,
  onShowModalClick,
  textContent,
  formName,
  ...props
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    setIsModalVisible(true);
    onShowModalClick(e);
  };

  const handleOk = (event) => {
    setIsModalVisible(false);
    onCancelClick(event);
  };

  const handleCancel = (event) => {
    setIsModalVisible(false);
    onOkClick(event);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="story-modal"
      >
        <div
          id="modalDialogue"
          data-testid="modalDialogue"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </Modal>
    </>
  );
};

ModalDialogue.propTypes = {
  /**
   * Title contents
   */
  title: PropTypes.string.isRequired,
  /**
   * It can be html or Text content including some form
   */
  htmlContent: PropTypes.string,
  /**
   * Optional click handler
   */
  onCancelClick: PropTypes.func,
  /**
   * Optional click handler
   */
  onOkClick: PropTypes.func,
  /**
   * Optional click handler
   */
  onShowModalClick: PropTypes.func,
};

ModalDialogue.defaultProps = {
  title: "",
  onCancelClick: undefined,
  onShowModalClick: undefined,
  onOkClick: undefined,
};
