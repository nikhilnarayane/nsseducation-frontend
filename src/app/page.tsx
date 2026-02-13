
import Image from "next/image";
import styles from "./page.module.css";
import { Box } from '@mui/material';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
// import Home from '../pages/Home/page';
import AboutUs from './pages/AboutUs/page';
import Courses from './pages/Courses/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import CourseForm from './pages/CourseForm/page';
import Results from './pages/Results/page';
import PaymentSuccess from './pages/PaymentSuccess/page';
import Link from "next/link";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/pages/Home');
  return (
    <div className={styles.page}>
         
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              {/* <Navbar /> */}
              {/* <Box component="main" sx={{ flexGrow: 1 }}>
                  <Link  href="/Home">Home</Link>
                  <Link  href="/AboutUs">AboutUs</Link>
                  <Link  href="/Courses">Courses</Link>
                  <Link  href="/Login">Login</Link>
                  <Link  href="/Signup">Sign Up</Link>
                  <Link  href="/CourseForm/:courseId">Course Form</Link>
                  <Link  href="/results">Results</Link>
                  <Link  href="/PaymentSuccess"></Link>
              </Box> */}
              {/* <main className={styles.main}>
              </main>
              <Footer /> */}
            </Box>

      
    </div>
  );
}
