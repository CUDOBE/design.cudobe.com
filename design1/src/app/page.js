'use client';
import React from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, 
  Box, Badge, Stack, useTheme, useMediaQuery, Paper, Avatar 
} from '@mui/material';
import { 
  ShieldOutlined, 
  CurrencyExchangeOutlined, 
  FactCheckOutlined, 
  LocalShippingOutlined, 
  RuleOutlined, 
  TrendingUpOutlined,
  ArrowForward,
  PlayCircleFilledOutlined
} from '@mui/icons-material';

export default function CudobeLanding() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const problems = [
    { title: "Trust Gap", desc: "Escrow-backed payments released only when trade conditions are met.", icon: <ShieldOutlined sx={{ fontSize: 32 }} />, color: "#3f51b5" },
    { title: "Dollar Scarcity", desc: "Seamless USDC settlement for regions with banking liquidity crises.", icon: <CurrencyExchangeOutlined sx={{ fontSize: 32 }} />, color: "#00c853" },
    { title: "Smart Documents", desc: "AI-driven reconciliation of Invoice, Bill of Entry, and FEMA norms.", icon: <FactCheckOutlined sx={{ fontSize: 32 }} />, color: "#2196f3" },
    { title: "Shipping Guard", desc: "Prevent port fines with automated cargo numbering & packaging audits.", icon: <LocalShippingOutlined sx={{ fontSize: 32 }} />, color: "#ff9100" },
    { title: "Real-time Compliance", desc: "Instant updates on arcane customs rules across global ports.", icon: <RuleOutlined sx={{ fontSize: 32 }} />, color: "#00bcd4" },
    { title: "Pharma/B2C Scale", desc: "Generate 100s of error-free trade docs in seconds, not days.", icon: <TrendingUpOutlined sx={{ fontSize: 32 }} />, color: "#d500f9" },
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#ffffff', overflowX: 'hidden' , mb:-5 }}>
      {/* --- Sleek Navbar --- */}
      <AppBar position="sticky" elevation={2} sx={{ 
        backdropFilter: 'blur(20px)', 
        bgcolor: 'rgba(255,255,255,0.8)', 
        borderBottom: '1px solid rgba(0,0,0,0.05)' 
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 900, 
              background: 'linear-gradient(45deg, #051937, #008793)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1.5px'
            }}>
              Cudobe
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              {!isMobile && (
                <Stack direction="row" spacing={4} sx={{ mr: 4 }}>
                  {['Product', 'Network', 'Compliance'].map((item) => (
                    <Typography key={item} variant="body2" sx={{ 
                      fontWeight: 600, color: '#444', cursor: 'pointer',
                      '&:hover': { color: 'primary.main' }
                    }}>{item}</Typography>
                  ))}
                </Stack>
              )}
              <Button variant="contained" disableElevation sx={{ 
                borderRadius: '12px', px: 4, py: 1.2, fontWeight: 700,
                textTransform: 'none', boxShadow: '0 10px 20px rgba(33, 150, 243, 0.3)'
              }}>
                Launch App
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- Premium Hero Section --- */}
      <Box sx={{ 
        pt: { xs: 8, md: 6 }, 
        pb: { xs: 8, md: 12 }, 
        background: 'radial-gradient(circle at top right, #f0f7ff, #ffffff)' 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ 
                    bgcolor: 'primary.main', color: 'white', px: 2, py: 0.5, 
                    borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: 1
                  }}>
                    Now Live: Stablecoin Rails
                  </Typography>
                </Box>
                <Typography variant="h1" sx={{ 
                  fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' }, 
                  lineHeight: 1.1, color: '#051937' 
                }}>
                  The Operating System for <Box component="span" sx={{ color: 'primary.main' }}>Global Trade.</Box>
                </Typography>
                <Typography variant="h6" sx={{ color: '#546e7a', fontWeight: 400, maxWidth: 500, lineHeight: 1.6 }}>
                  Bridge the trust gap with African and Middle Eastern markets using automated escrows and regulated USDC payments.
                </Typography>
                <Stack direction="row" spacing={3} sx={{ pt: 2 }}>
                  <Button variant="contained" size="large" endIcon={<ArrowForward />} sx={{ 
                    borderRadius: 4, px: 5, py: 2, fontSize: '1.1rem' 
                  }}>
                    Start Trading
                  </Button>
                  <Button variant="text" size="large" startIcon={<PlayCircleFilledOutlined />} sx={{ fontWeight: 700 }}>
                    How it works
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            </Grid>
        </Container>
      </Box>
      {/* --- Problem Grid (Glassmorphism Effect) --- */}
      <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: '#051937' }}>Built for Complex Borders</Typography>
          <Typography variant="body1" sx={{ color: '#78909c', fontSize: '1.2rem' }}>Solving the archaic friction points of MSME exporters.</Typography>
        </Box>
        
        
         <Grid container spacing={6}>
          {problems.map((p, i) => (
            <Grid item xs={12} sm={6} md={6} key={i}> {/* md changed to 6 */}
              <Card sx={{ 
                height: '180px', p: 2, borderRadius: 6, border: '1px solid #f0f0f0',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': { 
                  transform: 'translateY(-6px)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                  borderColor: 'primary.light'
                }
              }}>
                <Avatar sx={{ 
                  bgcolor: p.color, width: 124, height: 24, mb: 8,
                  boxShadow: `0 10px 10px ${p.color}44`
                }}>
                  {p.icon}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#051937' }}>{p.title}</Typography>
                <Typography variant="body1" sx={{ color: '#546e7a', lineHeight: 1.7 }}>
                  {p.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>

      {/* --- Stablecoin CTA --- */}
      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            borderRadius: 10, overflow: 'hidden', 
            background: 'linear-gradient(135deg, #051937 0%, #004d40 100%)',
            position: 'relative'
          }}>
            <Grid container>
              <Grid item xs={12} md={7} sx={{ p: { xs: 6, md: 10 }, color: 'white' }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>Defeat Dollar Shortages</Typography>
                <Typography variant="h6" sx={{ opacity: 0.8, mb: 5, fontWeight: 300 }}>
                  We provide the infrastructure to bypass the banking gridlocks in Angola, Nigeria, and beyond using regulated USDC rails.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary" sx={{ 
                    bgcolor: '#00e676', color: '#051937', fontWeight: 800, px: 4, py: 1.5,
                    '&:hover': { bgcolor: '#00c853' }
                  }}>
                    Join Private Beta
                  </Button>
                </Stack>
              </Grid>
              {!isMobile && (
                <Grid item md={5} sx={{ 
                  background: 'url(https://importexportfederation.com/wp-content/uploads/2023/11/19964835_6184552.jpg?x71030)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 400
                }} />
              )}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* --- Footer --- */}
      <Box sx={{ py: 10, textAlign: 'center', borderTop: '1px solid #eee' }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main', mb: 2 }}>Cudobe</Typography>
        <Typography variant="body2" sx={{ color: '#999' }}>
          © 2026 Cudobe Technologies. Mumbai • Delhi • Dubai
        </Typography>
      </Box>
    </Box>
  );
}