import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageProps from './components/RenderProps/LikeImageProps';
import LikePostProps from './components/RenderProps/LikePostProps';

function App() {

  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/*part-1 HOC logic */}
      <h1>Blog using HOC</h1>
      <div className='buttons'>
        <LikeImage/>
        <LikePost/>
      </div>

      {/*part-2 render props */}
      <h1>Blog using Render props</h1>
      <LikeImageProps/>
      <LikePostProps/>
    </div>
  );
}

export default App;
