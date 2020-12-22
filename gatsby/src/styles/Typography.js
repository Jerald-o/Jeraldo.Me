import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/JeraldoBG.svg';

const Typography = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: AktivGrotesk;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
    color: var(--white);
  }
  
  .hero-body {
    font-family: AktivGrotesk;
    font-style: normal;
    font-weight: normal;
    color: var(--white);
    font-size:26.49px;
    line-height:34px;
  }
  .pre-title {
    font-family: AktivGrotesk;
    font-style: normal;
    font-weight: 500;
    font-size:19.06;
    line-height:24px;
    text-transform:uppercase;
  }
  .hero {
      background-image: url(${bg});
      background-size:cover;
      background-repeat:no-repeat;
      top:70px;
  }
`;

export default Typography;
