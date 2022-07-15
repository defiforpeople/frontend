import { BlurPc } from './BlurPcFooterLanding';
import { BlurMobile } from './BlurMobileFooterLanding';

function BlurFooterLanding() {
  return (
    <>
      <BlurPc position="absolute" style={{ filter: 'blur(60px)' }} />

      <BlurMobile position="absolute" style={{ filter: 'blur(70px)' }} />
    </>
  );
}

export default BlurFooterLanding;
