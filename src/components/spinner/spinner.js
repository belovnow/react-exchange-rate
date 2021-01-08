import { useEffect, useState } from 'react';
import './spinner.css';

const Spinner = () => {

    const [iconId, setIconId] = useState(1);

    useEffect(() => {
        setTimeout(() => setIconId(() => iconId + 1), 1000);
        if (iconId > 12) { setIconId(1) };

        return () => clearTimeout();
    }, [iconId])

    const icon =
        <i className={`em em-clock${iconId}`}></i>;

    return (
        <div className="spinner-block">
            <span className="spinner-block-inner">
                {icon} Загрузка...
        </span>
        </div>
    );
}

export default Spinner;