import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import StudentForm from '../StudentForm';
import { Student } from '../ListStudents';

type ModalNewStudentProps = {
  create: true;
  student?: undefined;
  isNewStudent: true;
};
type ModalOldStudentProps = {
  create: false;
  student: Student;
  isNewStudent: false;
};

type ModalStudentProps = {
  resetState: () => void;
} & (ModalNewStudentProps | ModalOldStudentProps);

const ModalStudent = (props: ModalStudentProps) => {
  const [visible, setVisible] = useState(false);
  var button = <Button onClick={() => toggle()}>Редактировать</Button>;

  const toggle = () => {
    setVisible(!visible);
  };

  if (props.create) {
    button = (
      <Button color="primary" className="float-right" onClick={() => toggle()} style={{ minWidth: '200px' }}>
        Добавить студента
      </Button>
    );
  }
  return (
    <Fragment>
      {button}
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader style={{ justifyContent: 'center' }}>
          {props.create ? 'Добавить студента' : 'Редактировать студента'}
        </ModalHeader>
        <ModalBody>
          {/* @ts-ignore */}
          <StudentForm
            student={props.student}
            resetState={props.resetState}
            toggle={toggle}
            isNewStudent={props.isNewStudent}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ModalStudent;
