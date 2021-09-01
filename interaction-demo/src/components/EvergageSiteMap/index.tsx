import {FC,useEffect} from 'react'

export interface EvergageSiteMapProps {
    account: string;
    dataset: string;
    trackerUrl?:string;
    cookieDomain?:string;
}
 
const EvergageSiteMap: FC<EvergageSiteMapProps> = props => {
    const { dataset, account,trackerUrl, cookieDomain} = props;

    useEffect(() => {
        window.Evergage.init({
            account: account,
            dataset: dataset,
            trackerUrl: trackerUrl,
            cookieDomain: cookieDomain
        });
    }, []);

    return(<></>);
}
 
export default EvergageSiteMap;