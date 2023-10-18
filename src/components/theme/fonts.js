import localFont from 'next/font/local'
const fonts = localFont({
    src: [
      {
        path: `url('/fonts/open-sans-400') format('woff2')`,
        weight: '400',
        style: 'normal',
      },
      {
        path: './Roboto-Italic.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: './Roboto-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Roboto-BoldItalic.woff2',
        weight: '700',
        style: 'italic',
      },
    ],
  })

  export default fonts;