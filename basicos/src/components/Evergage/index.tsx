import { useEffect, FC, Fragment } from 'react';

export interface EvergageScriptProps {
  account: string;
  dataset: string;
  cookieDomain: string;
  sitemap?: any;
}

const EvergageScript: FC<EvergageScriptProps> = props => {
  const { dataset, account, cookieDomain, sitemap } = props;
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `(
        function (f, r, n, d, b, y) {
          b = f.createElement(r), y = f.getElementsByTagName(r)[0];
          b.async = 1; b.src = n;
          y.parentNode.insertBefore(b, y);}
        )( 
          document, 
          'script', 
          '//cdn.evgnet.com/beacon/${account}/${dataset}/scripts/evergage.min.js'
        );`;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  useEffect(() => {
    console.log(window.Evergage);
    window.Evergage.init({
      cookieDomain: cookieDomain
    }).then(() => {
      window.Evergage.initSitemap(sitemap);
    });
  }, []);

  return (<Fragment></Fragment>);
}

export default EvergageScript;
