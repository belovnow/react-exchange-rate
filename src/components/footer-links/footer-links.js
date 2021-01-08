import './footer-links.css';

const CbrLink = () => {

    const icon = <i style={{ fontSize: '12px' }} className="em em-currency_exchange"></i>

    return (
            <a className='link-block-inner' href="https://www.cbr-xml-daily.ru/">
                {icon} API для курсов ЦБ РФ
            </a>
    );
};

const GithubLink = () => {

    const icon = <i style={{ fontSize: '12px' }} class="em em-fire" aria-role="presentation" aria-label=""></i>

    return (
            <a className='link-block-inner' href="https://github.com/belovnow">
                {icon} Мой GitHub
            </a>
        
    );
};

const FooterLinks = () => {

    return (
        <div className="link-block">
            <CbrLink />
            <GithubLink />
        </div>
    );
}

export default FooterLinks;