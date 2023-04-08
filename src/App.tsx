import React, { useState } from "react";
import { Employees, PageEnum } from "./components/Employee.type";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import "./styles.css";

export default function App() {
  const [employee, setEmployee] = useState([] as Employees[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataEdit, setDataEdit] = useState({} as Employees);

  const addEmployeeBtn = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };
  const addEmployee = (data: Employees) => {
    setEmployee([...employee, data]);
  };
  const editEmployee = (data: Employees) => {
    setShownPage(PageEnum.edit);
    setDataEdit(data);
  };
  const deleteEmployee = (data: Employees) => {
    const afterDelete = employee.filter((e) => e.id !== data.id);
    setEmployee(afterDelete);
  };
  const updateData = (data: Employees) => {
    const index = employee.findIndex((e) => e.id === data.id);
    if (index >= 0) {
      const afterUpdate = [...employee];
      afterUpdate[index] = data;
      setEmployee(afterUpdate);
    }
  };
  return (
    <div className="App">
      <section className="section">
        {shownPage === PageEnum.list && (
          <div>
            <input
              type="button"
              value="Add"
              onClick={addEmployeeBtn}
              className="inputbtn"
            />
            <EmployeeList
              list={employee}
              onEdit={editEmployee}
              onDelete={deleteEmployee}
            />
          </div>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee backBtn={showListPage} onSubmitProp={addEmployee} />
        )}
        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataEdit}
            backBtn={showListPage}
            updateBtn={updateData}
          />
        )}
      </section>
    </div>
  );
}
