cd ~/Projects
mkdir DataDock
cd DataDock
React setup: 
remove other version: npm uninstall react react-dom @types/react @types/react-dom
install required version
npm install react@18.2.0 react-dom@18.2.0
npm install -D @types/react@18.2.55 @types/react-dom@18.2.19

Install vite setup with react-ts
npm create vite@latest . -- --template react-ts
npm install


npm uninstall react react-dom @types/react @types/react-dom
specify version of react: npm install react@18.2.0 react-dom@18.2.0
npm install -D @types/react@18.2.55 @types/react-dom@18.2.19


install elastic ui:
 npm install @elastic/eui @elastic/datemath @emotion/react @emotion/css
 add the elastic ui css: import '@elastic/eui/dist/eui_theme_light.css'



In src/main.tsx:

ts
import '@elastic/eui/dist/eui_theme_light.css'
Reason: EUI renders broken without explicit theme import.


npm run dev
Final stack:
React 18
TypeScript
Vite
Elastic UI

How the flow the project works: index.html → main.tsx → App.tsx → rest of the app

run from terminal: npm run dev
open in browser: http://localhost:5173

Production check: 
npm run build
npm run preview 


remove old vite and ts config info
rm -rf node_modules/.vite
rm -f tsconfig.tsbuildinfo
rm -rf dist
rm -rf node_modules
npm install
npm run build


clean build 
rm -rf node_modules
rm -rf node_modules/.vite
rm -rf dist
rm -f package-lock.json
npm install 
npm run dev


add tailwind
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


hard clear vite annoying cache 
check cache for example: grep -R "App.css" .
pkill -f vite
sed -i "/App\.css/d" src/App.tsx
sed -i "/App\.css/d" src/components/Header.tsx
rm -f src/App.css
grep -R "App.css" src
npm run build




pkill -f vite
rm -rf node_modules
rm -rf node_modules/.vite
rm -rf .vite
rm -rf dist
rm -rf .turbo
rm -rf .cache
npm cache clean --force
npm install
npm run build


WHen build fails consistently bcs of cache just do this
cat > src/components/Header.tsx <<'EOF'
import logo from '../assets/favicon.png'

export default function Header() {
  return (
    <header className="flex items-center justify-center h-[120px]">
      <img src={logo} alt="DataDock Logo" className="h-12 w-12" />
    </header>
  )
}
EOF
sed -n '1,20p' src/components/Header.tsx
grep -R "@elastic/eui" src
