# lms frontend
### setup instuction
1. clone the project 

'''
 git clone https://github.com/Yogesh-3H4X/lms_frontend_hn.git
 
'''
2.  move into the directory
'''
cd lms_frontend_hn

'''
3. install dependencies

'''
npn i

'''
4. run the server 

'''
npm run dev

'''

### setup instruction for tailwind
[tail wind official instruction doc ] (https://v3.tailwindcss.com/docs/guides/vite)
 1. install tailwindcss
'''
npm install -D tailwindcss@3 postcss autoprefixer
'''
'''
creat tailwindcss init(creat fikle)

3. add file extention to tailwind config file in the content property
'''
["./src/**/*.{js,ts,jsx,tsx}"],
'''
4. at the tailwind directives at the index.css file

'''  
@tailwind base;
@tailwind components;
@tailwind utilities;
'''
6. adding pluggins and dependency
'''
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
'''
