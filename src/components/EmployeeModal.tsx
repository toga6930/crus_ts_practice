import { Employees } from "./Employee.type";

type Props = {
  onClose: () => void;
  data: Employees;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-container">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>ID : {data.id}</label>
          </div>
          <div>
            <label>Name : {data.name}</label>
          </div>
          <div>
            <label>Email : {data.email}</label>
          </div>
          <div>
            <label>Phone : {data.phone}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeModal;
