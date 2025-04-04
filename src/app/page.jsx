'use client';
import React, { Suspense } from 'react';
import { CubeProvider } from "@cubejs-client/react";
import cubejsApi from '@/cubeClient.js';
import Dashboard from '@/components/Dashboard';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <CubeProvider cubeApi={cubejsApi}>
      <Dashboard />
      </CubeProvider>
    </Suspense>
  );
}
