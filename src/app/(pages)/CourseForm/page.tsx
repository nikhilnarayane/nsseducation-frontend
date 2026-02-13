'use client'
import { Suspense } from 'react';
import CourseForm from './CourseForm';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Course Form...</div>}>
      <CourseForm />
    </Suspense>
  );
}
