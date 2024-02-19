import React, { useState } from 'react';
import { Button } from '../Button/Button';
import cls from './Form.module.css';

export const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const { username, password, confirmPassword } = formData;
            alert(`Данные формы:
            Username: ${username}
            Password: ${password}
            Confirm Password: ${confirmPassword}`);
            setFormData({
                username: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

    const validateForm = () => {
        const { username, password, confirmPassword } = formData;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        const newErrors = {
            username: !username.trim() || !emailRegex.test(username.trim()) ? 'Invalid email' : '',
            password: !password.trim() || !passwordRegex.test(password.trim()) ? 'Password must be at least 8 characters and contain letters and numbers' : '',
            confirmPassword: !confirmPassword.trim() ? 'Confirm Password is required' : confirmPassword.trim() !== password.trim() ? 'Passwords do not match' : ''
        };

        const isValid = Object.values(newErrors).every(error => error === '');

        setErrors(newErrors);
        return isValid;
    };


    return (
        <form onSubmit={handleSubmit}>

            <label className={cls.label}>
                <span>Username:</span>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <div className={cls.error}>{errors.username && <span>{errors.username}</span>}</div>
            </label>


            <label className={cls.label}>
                <span>Password:</span>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className={cls.error}>{errors.password && <span>{errors.password}</span>}</div>
            </label>

            <label className={cls.label}>
                <span>Confirm Password:</span>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <div className={cls.error}>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</div>
            </label>
            <Button type="submit">Submit</Button>
        </form>
    );
};
