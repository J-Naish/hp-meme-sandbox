import ScrollableCanvas from '../ScrollableCanvas.js';
import SheflaDetailContent from './SheflaDetailContent.js';


function SheflaPage({ language }) {
  return (
    <div className='shefla-page'>
      <div className='shefla-canvas'>
        <ScrollableCanvas
          glbUrl="/assets/model/shefla.glb"
          scale={[1, 1, 1]}
        />
      </div>
      <SheflaDetailContent language={language} />
    </div>
  );
}


export default SheflaPage;