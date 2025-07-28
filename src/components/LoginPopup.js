const LoginPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-box">
        <button className="btn-close float-end" onClick={onClose}></button>
        <h4 className="mb-3">Login</h4>
        <form>
          <div className="mb-3">
            <label className="mb-2">Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="mb-2">Password:</label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;