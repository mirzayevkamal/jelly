import "./index.css";

export default function EmailInput(props) {
  return (
    <div className="email-input">
      <label className="email-input__label">{props.label}</label>
      <p className="email-input__text">{props.text}</p>
      <input
        className="email-input__input"
        type="email"
        onChange={(e) => props.handleEmailInput(e.target.value)}
        value={props.email}
        placeholder="Enter your e-mail address"
      />
    </div>
  );
}
