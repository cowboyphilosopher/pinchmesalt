'use client';

import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <head>
        <title>PINCH ME</title>
      </head>
      <div className='bg-gray-900 text-white h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-center'>
          <img
            src="/images/pinch.gif"
            alt="pinch Image"
            className="max-w-full h-auto"
            style={{ width: '100%' }}
          />
          <div className='instagram-media'>
            <div style={{ padding: '16px' }}>
              <a href='https://www.instagram.com/crmbizdev/'>
                Follow PinchMeSalt on Instagram
              </a>
              <p className='mt-4 text-lg'>PinchMeSalt@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
