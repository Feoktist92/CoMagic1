import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';

export const TimeComponent = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [updateTime, setUpdateTime] = useState(false);

    useEffect(() => {
        if (updateTime) {
            setCurrentDateTime(new Date());
            setUpdateTime(false);
        }
    }, [updateTime]);

    const handleUpdateDateTime = () => {
        setUpdateTime(true);
    };

    return (
        <div>
            <h3>Current Time: {currentDateTime.toLocaleString()}</h3>
            <Button randomColor={false} onClick={handleUpdateDateTime}>Update Time</Button>
        </div>
    );
}

