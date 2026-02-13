
import CourseFormClient from './CourseFormClient';

export async function generateStaticParams() {
  return [
    { courseId: '1' },
    { courseId: '2' },
    { courseId: '3' },
    { courseId: '4' },
    { courseId: '5' },
  ];
}

export default function CoursePage() {
  return <CourseFormClient />;
}
