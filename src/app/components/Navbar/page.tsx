"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Button,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
import Image from "next/image";
import { MouseEvent } from "react";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/pages/AboutUs" },
    { name: "Courses", path: "/pages/Courses" },
    { name: "Results", path: "/pages/Results" },
    { name: "Gallery", path: "/pages/Gallery" },
    { name: "Contact Us", path: "/pages/Contact" },
  ];

const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
  setAnchorElUser(event.currentTarget);
};

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <SchoolIcon sx={{ mr: 1 }} />
        EduLearn
      </Typography>

      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <Link
              href={page.path}
              style={{ width: "100%", textDecoration: "none", color: "inherit" }}
            >
              <ListItemText primary={page.name} sx={{ textAlign: "center" }} />
            </Link>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <Link href="/login" style={{ width: "100%", textDecoration: "none", color: "inherit" }}>
            <ListItemText primary="Login" sx={{ textAlign: "center" }} />
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link href="/signup" style={{ width: "100%", textDecoration: "none", color: "inherit" }}>
            <ListItemText primary="Sign Up" sx={{ textAlign: "center" }} />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          {/* <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
          <Image src="/logo.png" alt="Navkranti Education" width={70} height={60} />
            {/* <Typography
              variant="h6"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              EDULEARN
            </Typography> */}
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>

            <Drawer
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                sx={{ color: "white" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};

export default Navbar;
