import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<RecoilRoot> <App /> </RecoilRoot>);
});
