let counter = 10;
function PullUpImpure() {
  counter = counter + 1;
  console.log('counter: ', counter);
  return (
    <p>
      나는 턱걸이를 {counter}개 했습니다.
    </p>
  );
}

export default PullUpImpure;