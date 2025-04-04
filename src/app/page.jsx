'use client';
import React from 'react';
import { CubeProvider } from "@cubejs-client/react";
import cubejsApi from '@/cubeClient.js';
import Dashboard from '@/components/Dashboard';

export default function Page() {
  return (
      <CubeProvider cubeApi={cubejsApi}>
        <Dashboard />
      </CubeProvider>
  );
}
