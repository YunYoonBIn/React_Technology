import PropTypes from 'prop-types'; 

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다.
      <br />
      children 값은 {children}입니다.
    </div>
  );
}; 

MyComponent.defaultProps = {
  name: "Test",
};

MyComponent.protoTypes = {
  name: PropTypes.string
  // name의 프롭스가 지정한 형태와 일치하지 않으면
  // 경고 문구 출력
}
export default MyComponent;
