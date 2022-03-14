import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newuser__title">New User</h1>
      <form className="newuser__form">
        <div className="newuser__item">
          <label>Username</label>
          <input type="text" placeholder="Maymun" />
        </div>
        <div className="newuser__item">
          <label>Full Name</label>
          <input type="text" placeholder="Kinochi Bola" />
        </div>
        <div className="newuser__item">
          <label>Email</label>
          <input type="text" placeholder="maymun@gmail.com" />
        </div>
        <div className="newuser__item">
          <label>Phone</label>
          <input type="text" placeholder="371617" />
        </div>
        <div className="newuser__item">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newuser__item">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newuser__item">
          <label>Gender</label>
          <div className="newuser-gender">
            <input type="radio" name="gender" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newuser__item">
          <label>Active</label>
          <select name="active" id="active" className="newuser__select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newuser__item">
          <button className="newuser-button">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
