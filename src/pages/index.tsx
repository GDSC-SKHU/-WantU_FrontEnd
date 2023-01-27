import MainBody from '../components/Main/MainBody';
import MainFirstArea from '../components/Main/MainFirstBody';

import Nav from '../components/Nav';
export default function Home() {
  return (
    <>
      <Nav />
      <MainBody children={<MainFirstArea />} />
    </>
  );
}
