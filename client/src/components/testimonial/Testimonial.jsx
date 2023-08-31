import { CircleSign } from "../circleSign/CircleSign";
import { TestimonialCard } from "../testimonialCard/TestimonialCard";
import "./Testimonial.scss";
export function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial__container">
        <p className="testimonial__subtitle">Testimonial</p>
        <h1 className="testimonial__title">What Our Customer Saying?</h1>
        <div className="testimonial__content">
          <TestimonialCard
            name="Sara Taylor"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
            position="Consumer"
            rating="5"
          />
        </div>
        <div className="testimonial__achievements achievements">
          <CircleSign amount="100%" achievement="Organic" />
          <CircleSign amount="285" achievement="Active Product" />
          <CircleSign amount="350+" achievement="Organic Orchads" />
          <CircleSign amount="25+" achievement="Years of Farming" />
        </div>
      </div>
    </section>
  );
}
