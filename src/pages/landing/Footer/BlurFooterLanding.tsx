import { BlurPc } from './BlurPcFooterLanding';
import { BlurMobile } from './BlurMobileFooterLanding';

function BlurFooterLanding() {
  return (
    <>
      <BlurPc position="absolute" style={{ filter: 'blur(50px)' }} />

      <BlurMobile position="absolute" style={{ filter: 'blur(80px)' }} />
    </>
  );
}

export default BlurFooterLanding;
