import "./index.css";

export default function FaqItem() {
  return (
    <div className="faq-item">
      <div className="faq-item__icon">Q:</div>
      <div className="faq-item__details">
        <h1 className="faq-item__headline">How much is the fish?</h1>
        <p>
          A: THE FISH IS PRECISSELY 5$, seeing how because of the ongoing
          economic crises, fishermen and fisherwomen overseas have been
          struggling to upgrade their fishing gear in a long time.
        </p>
      </div>
    </div>
  );
}
