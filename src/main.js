import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@it-incubator/ui-kit/dist/style.css';
import './styles/index.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { App } from './App';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
