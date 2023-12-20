import ScrollableCanvas from '../ScrollableCanvas.js';
import MetaInfluencerDetailContent from './MetaInfluencerDetailContent.js';


function MetaInfluencerPage({ language }) {


  return (
    <div className='meta-influencer-page'>
      <div className='meta-influencer-canvas'>
        <ScrollableCanvas
          glbUrl="/assets/model/meta-influencer.glb"
          scale={[0.9, 0.9, 0.9]}
        />
      </div>
      <MetaInfluencerDetailContent language={language} />
    </div>
  );
}


export default MetaInfluencerPage;