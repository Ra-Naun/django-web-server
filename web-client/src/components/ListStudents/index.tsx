import React from 'react';
import { Table } from 'reactstrap';
import PhotoModal from '../PhotoModal';
import ModalStudent from '../ModalStudent';
import RemoveStudent from '../RemoveStudent';

export type Student = {
  pk: string;
  name: string;
  email: string;
  document: string;
  phone: string;
  file: File | null;
  photo: string;
  registrationDate: string;
};

type ListStudentsProps = {
  students: Array<Student>;
  resetState: () => void;
};

const ListStudents = (props: ListStudentsProps) => {
  const { students } = props;
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Document</th>
          <th>Phone</th>
          <th>Registration</th>
          <th>Photo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!students || students.length <= 0 ? (
          <tr>
            <td colSpan={6} align="center">
              <b>Пока ничего нет</b>
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.pk}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.document}</td>
              <td>{student.phone}</td>
              <td>{student.registrationDate}</td>
              <td>
                <PhotoModal student={student} />
              </td>
              <td>
                <ModalStudent create={false} student={student} resetState={props.resetState} isNewStudent={false} />
                &nbsp;&nbsp;
                <RemoveStudent pk={student.pk} resetState={props.resetState} />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default ListStudents;
