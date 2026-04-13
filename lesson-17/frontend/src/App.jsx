// src/App.jsx
import { Outlet } from 'react-router';

import Header from './components/Header';
import PageLayout from './components/layout/PageLayout';

export default function App() {
  return (
    <PageLayout header={<Header tagline="Find the right resources, right away" />}>
      <Outlet />
    </PageLayout>
  );
}