'use client';

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export default function Input({label, name, ...props}: InputProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-1 font-semibold">
                {label}
            </label>
            <input 
                {...props} 
                name={name}
                id={name}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}