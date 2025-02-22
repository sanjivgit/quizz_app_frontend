import React, { PropsWithChildren } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

/**
 * | Author- Bijoy Paitandi
 * | Created for- LoaderSkeleton
 * | Status- done
 */

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      style={{
        display: 'block',
        lineHeight: 4,
        marginBottom: '0.1rem',
      }}

      className="w-full"
    >
      {children}
    </div>
  );
}


const LoaderSkeleton = () => {
  return (
    <>
      <Skeleton wrapper={Box} count={10} duration={1}/>
    </>
  );
};

export default LoaderSkeleton;
