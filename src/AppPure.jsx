import './App.css'

import PullUpPure from './components/PullUpPure';
function AppPure(props) {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  );
}

export default AppPure;