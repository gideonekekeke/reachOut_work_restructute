module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eds-color': '#8661e3',
        'dwhite':'#FEFEFF',
        'ttext':"#FF6666",
        'gid-col' : '#8661ef',
        't-com' : '#dccc7b',
         'navColor':'#796139',
      'm-col' : '#f8f7f4'
      },
      width:{
        'edwdith':"100%",
        'box':'35rem',
        'insideBox':'25rem',
        'buttonww':'auto', 
        'myWidth':"500px",
        'cardWidth':'300px'
      },
      height: {
        'edheight':"100%",
        '112':"auto",
        'dheight':'25em',
        "heroHeight":"600px",
        'autoHeight':"auto",
        'cardHeight':'430px',
        'inside':'250px'
       
      },
        zIndex: {
        'myz': '10001',
      },
      margin: {
        'dtop': '-180px',
      }
    },
  },
  plugins: [],
}
