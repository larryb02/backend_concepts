import { CssVarsProvider } from '@mui/joy';
import extendTheme from '@mui/joy/styles/extendTheme';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Link from '@mui/joy/Link';


const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {},
    },
  },
  cssVarPrefix: 'joy',
});

export default function LoginForm() {
  return (
    <CssVarsProvider theme={darkTheme} defaultMode="dark">
      <Sheet
        sx={{
          width: 400,
          mx: 'auto',
          my: 8,
          py: 4,
          px: 3,
          borderRadius: 'md',
          boxShadow: 'lg',
          backgroundColor: 'background.body',
        }}
        variant="outlined"
      >
        <Typography level="h4" component="h1" sx={{ mb: 2 }}>
          Sign in
        </Typography>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit" variant="solid" color="primary">
            Log in
          </Button>
          <Link href="#"><Typography>
            No account? Click here to sign up!</Typography></Link>
        </Box>
      </Sheet>
    </CssVarsProvider>
  );
}
