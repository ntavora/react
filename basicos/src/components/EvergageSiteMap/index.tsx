import EvergageScript from 'components/Evergage';
import { useEffect, FC, Fragment } from 'react';
export interface EvergageSiteMapProps {
    account: string;
    dataset: string;
    cookieDomain: string;
    sitemap?: any;
}

const EvergageSiteMap: FC<EvergageSiteMapProps> = props => {
    const { dataset, account, cookieDomain, sitemap } = props;

    useEffect(() => {
       
        window.Evergage.init({
            cookieDomain: cookieDomain
        }).then(() => {
            console.log(sitemap);
            window.Evergage.initSitemap(sitemap);
        });
    }, []);

    return (<Fragment> 
    <EvergageScript
        account={account}
        dataset={dataset}
        cookieDomain={cookieDomain}
        sitemap={sitemap}
    /></Fragment>);
}

export default EvergageSiteMap;
