import css from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <section className={css.block}>
            <h2 className={css.title}>{title}</h2>
            {children}
        </section>
    );
};

Section.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;