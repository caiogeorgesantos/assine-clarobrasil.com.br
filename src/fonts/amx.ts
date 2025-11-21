import localFont from 'next/font/local';

export const amx = localFont({
  src: [
    { path: './amx/AMX-Light.woff2', weight: '300', style: 'normal' },
    { path: './amx/AMX-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: './amx/AMX-Regular.woff2', weight: '400', style: 'normal' },
    { path: './amx/AMX-Italic.woff2', weight: '400', style: 'italic' },
    { path: './amx/AMX-Medium.woff2', weight: '500', style: 'normal' },
    { path: './amx/AMX-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: './amx/AMX-Bold.woff2', weight: '700', style: 'normal' },
    { path: './amx/AMX-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: './amx/AMX-Black.woff2', weight: '900', style: 'normal' },
    { path: './amx/AMX-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-amx',
  display: 'swap',
});
