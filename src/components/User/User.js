import Nav from "../Nav/Nav";
import "./User.css";

function User() {
  return (
    <div className="userPage">
      <Nav />
      <div className="User">
        <div className="formBox">
          <h1>My Page</h1>
          <form>
            <input placeholder='John Doe'/>
            <input placeholder='email@example.com'/>
            <input placeholder='8881231234'/>
            <label for="cars">Select your Moon Sign:</label>
            <select id="moonSigns" name="moonSigns">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <div className="autoFillBox">
              <p>
                your Moon Sign will show here once you have selected the sign
                above.
              </p>
              <p>
                your monthly oracle reading will appear here if you have your
                Moon Sign selected.
              </p>
            </div>

            <div className="bigInputBox">
              <textarea placeholder="set your new moon intentions here" />
              <textarea placeholder="set your full moon release here" />
            </div>
            <button type="submit">Save</button>
          </form>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default User;
