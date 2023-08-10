'use client';

import Image from 'next/image'
import { Component1 } from './components/Rxjs/Component1';
import { Component2 } from './components/Rxjs/Component2';
import { Provider } from 'react-redux';
import Ronald from './pages/Ronald/Ronald';
import { configStore } from './redux/store';
import { ComponentRedux1 } from './components/redux/ComponentRedux';

export default function Home() {
  return (
    <>
      <Provider store={configStore}>
        <div className="mb-4">
          <h1>-Rxjs-</h1>
          <Component1 />
          <Component2 />
        </div>
        <div>
          <h1>-Context-</h1>
          <Ronald />
        </div>
        <div>
          <h1>-Redux-</h1>
          <ComponentRedux1 />
        </div>
      </Provider>
    </>
  )
}
