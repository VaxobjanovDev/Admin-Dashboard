import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      <div className="user__title-container">
        <h1 className="user__title-title">Edit User</h1>
				<Link to='/newuser'>
        <button className="user-button">Create</button>
				</Link>
      </div>
      <div className="user__container">
        <div className="user__show">
          <div className="user__show-top">
            <img
              src="https://randomuser.me/api/portraits/women/66.jpg"
              alt="User"
              className="user-show-image"
            />
            <div className="user__show-title">
              <span className="user-username">Aletta Oucen</span>
              <span className="user-title">Software Engineer</span>
            </div>
          </div>
          <div className="user__show-bottom">
            <span className="user__show-bottom-title">Account Details</span>
            <div className="user__show-info">
              <AiOutlineUser className="user-show-icon" />
              <span className="user__show-info-title">oucen99</span>
            </div>
            <div className="user__show-info">
              <AiOutlineCalendar className="user-show-icon" />
              <span className="user__show-info-title">12.24.2001</span>
            </div>
            <span className="user__show-bottom-title">
              Contact Informations
            </span>
            <div className="user__show-info">
              <BiPhone className="user-show-icon" />
              <span className="user__show-info-title">371617</span>
            </div>
            <div className="user__show-info">
              <AiOutlineMail className="user-show-icon" />
              <span className="user__show-info-title">oucen99@gmail.com</span>
            </div>
            <div className="user__show-info">
              <IoLocationOutline className="user-show-icon" />
              <span className="user__show-info-title">
                New York || Greenlandiya
              </span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__update-title">Edit</span>
          <form className="user__update-form">
            <div className="user__update-left">
              <div className="user__update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="oucen99"
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Aletta Oucen"
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="oucen99@gmail.com"
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="371617"
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York || Greenlandiya"
                  className="user__update-input"
                />
              </div>
            </div>
            <div className="user__update-right">
              <div className="user__update-upload-image">
                <img
                  src="https://randomuser.me/api/portraits/women/66.jpg"
                  alt="User-change"
                  className="user__update-image"
                />
                <label for="file" className="upload">
                  <BsUpload />
                </label>
                <input type="file" id="file" className="upload-input" />
              </div>
              <button className="update-item-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
