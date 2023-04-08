import { useState } from "react";
import { Employees } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: Employees[];
  onEdit: (data: Employees) => void;
  onDelete: (data: Employees) => void;
};
const EmployeeList = (props: Props) => {
  const { list, onEdit, onDelete } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataShow, setDataShow] = useState(null as Employees | null);

  const onView = (data: Employees) => {
    setDataShow(data);
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        {list &&
          list.map((employee) => {
            return (
              <tbody>
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <div>
                      <input
                        type="button"
                        value="View"
                        className="actionbtn"
                        onClick={() => onView(employee)}
                      />
                      <input
                        type="button"
                        value="Edit"
                        className="actionbtn"
                        onClick={() => onEdit(employee)}
                      />
                      <input
                        type="button"
                        value="Delete"
                        className="actionbtn"
                        onClick={() => onDelete(employee)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      {showModal && dataShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataShow} />
      )}
    </div>
  );
};
export default EmployeeList;
