import { useState } from "react";
import { Employees } from "./Employee.type";

type Props = {
  backBtn: () => void;
  onSubmitProp: (data: Employees) => void;
};

const AddEmployee = (props: Props) => {
  const { backBtn, onSubmitProp } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    const data: Employees = {
      id: new Date().toJSON().toString(),
      name: name,
      email: email,
      phone: phone
    };
    backBtn();
    onSubmitProp(data);
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
          <input type="submit" value="Add" className="inputbtn" />
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
