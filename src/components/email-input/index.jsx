import "./index.css";

export default function EmailInput(props) {
  return (
    <div className="email-input">
      <label className="email-input__label">{props.label}</label>
      <input
        className="email-input__input"
        type="email"
        onChange={(e) => props.handleEmailInput(e.target.value)}
        value={props.email}
        placeholder="somethingVeryCool@gmail.com"
      />
    </div>
  );
}
