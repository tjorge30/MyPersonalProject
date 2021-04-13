function Authentication() {
    return (
      <div className="authArea">
        <input autocomplete='on' type='email' placeholder='email'></input><br/>
        <input autocomplete='on' type='text' placeholder='password'></input><br/>
        <button>login</button><br/>
        <button>register</button><br/>
      </div>
    );
  }
  
  export default Authentication;