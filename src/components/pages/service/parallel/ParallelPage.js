import ScrollableCanvas from '../ScrollableCanvas.js';
import ParallelDetailContent from './ParallelDetailContent.js';


function ParallelPage({ language }) {
  return (
    <div className='parallel-page'>
      <div className='parallel-canvas'>
        <ScrollableCanvas
          glbUrl="/assets/model/parallel.glb"
          scale={[0.9, 0.9, 0.9]}
        />
      </div>
      <ParallelDetailContent language={language} />
    </div>
  );
}


export default ParallelPage;