import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Student } from '../ListStudents';

import { API_STATIC_MEDIA } from '../../config';

type PhotoModalProps = {
  student: Student;
};

const PhotoModal = (props: PhotoModalProps) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <img onClick={toggle} src={API_STATIC_MEDIA + props.student.photo} alt="loading" style={{ height: 50 }} />
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader style={{ color: 'white', justifyContent: 'center', backgroundColor: '#212529' }}>Фото</ModalHeader>
        <ModalBody style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#212529' }}>
          <img src={API_STATIC_MEDIA + props.student.photo} alt="loading" />
        </ModalBody>
        <ModalFooter style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#212529' }}>
          {' '}
          <Button type="button" onClick={() => toggle()}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PhotoModal;
