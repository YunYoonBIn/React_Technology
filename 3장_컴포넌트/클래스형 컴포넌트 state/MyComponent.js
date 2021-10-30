import PropTypes from "prop-types";

const MyComponent = (props) => {
  const { name, favoriteNumber, children } = props;
  return (
    <div>
      이름 : {name}
      <br />
      좋아하는 숫자 : {favoriteNumber}
      <br />
      children : {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "Test",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
