import React from 'react'

export default function LinesAbout() {
  return (
      <>
          <>
              <div className="absolute inset-y-0 desktop:left-[80%] lg:left-[87%] left-[90%] w-0.5 bg-white20">
                  <div className="absolute desktop:top-[85%] xl:top-[90%] top-[85%] -mt-4 h-9 w-0.5 bg-white"></div>
              </div>

              {/* Горизонтальная линия с белым отрезком в центре */}
              <div className="absolute inset-x-0 desktop:top-[85%] xl:top-[90%] top-[85%] h-0.5 bg-white20">
                  <div className="absolute desktop:left-[80%] lg:left-[87%] left-[90%] -ml-4 w-9 h-0.5 bg-white"></div>
              </div>
          </>
      </>
  );
}
