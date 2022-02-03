import React, { useContext } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './Footer.css';
import { AppContext } from '../../store/app-context';

export default function Footer() {
    const ctx = useContext(AppContext);

    return (
        <Card className="footer-container">
            <Button onClick={ctx.onValidate} name="Validate Answer" />
            <Button onClick={ctx.onValidate} name="Show Answer" />
        </Card>
    );
}
