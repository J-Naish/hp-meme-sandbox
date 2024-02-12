import ScrollableCanvas from '../ScrollableCanvas.js';
import MetaInfluencerDetailContent from './MetaInfluencerDetailContent.js';


function MetaInfluencerPage({ language }) {
  return (
    <div className='meta-influencer-page'>
      <MetaInfluencerDetailContent language={language} />
    </div>
  );
}


export default MetaInfluencerPage;