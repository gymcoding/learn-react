import './App.css'

import PullUpImpure from './components/PullUpImpure';
function AppPure(props) {
  return (
    <div>
      <PullUpImpure />
      <PullUpImpure />
      <PullUpImpure />
    </div>
  );
}

export default AppPure;