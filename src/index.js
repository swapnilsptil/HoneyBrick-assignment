import React from 'react';
import App from './App';
import './index.css'
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);