import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Loading from '@/components/Loading'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <React.Suspense fallback={<Loading />}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            )}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.Suspense>
  )
}

export default App
