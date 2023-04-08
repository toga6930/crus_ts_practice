import { useState } from "react";
import { Employees } from "./Employee.type";

type Props = {
  data: Employees;
  backBtn: () => void;
  updateBtn: (data: Employees) => void;
};

const EditEmployee = (props: Props) => {
  const { data, backBtn, updateBtn } = props;

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);

  const nameChange = (e: any) => {
    setName(e.target.value);
  };
  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e: any) => {
    setPhone(e.target.value);
  };
  const submitBtn = (e: any) => {
    e.preventDefault();
    const updateData: Employees = {
      id: data.id,
      name: name,
      email: email,
      phone: phone
    };
    updateBtn(updateData);
    backBtn();
  };
  return (
    <div>
      <form onSubmit={submitBtn}>
        <div>
          <label>Name : </label>
          <input type="text" value={name} onChange={nameChange} />
        </div>
        <div>
          <label>Email : </label>
          <input type="text" value={email} onChange={emailChange} />
        </div>
        <div>
          <label>Phone : </label>
          <input type="text" value={phone} onChange={phoneChange} />
        </div>
        <div>
          <input
            type="button"
            value="Back"
            className="inputbtn"
            onClick={backBtn}
          />
          <input type="submit" value="Update" className="inputbtn" />
        </div>
      </form>
    </div>
  );
};
export default EditEmployee;
