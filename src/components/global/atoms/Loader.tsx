import React from "react";

/**
 * | Author- Sanjiv Kumar
 * | Created On- 03-02-2024
 * | Created for- Loader
 * | Status- done
 */


type LoaderProps ={
  className?: string;
}

const Loader:React.FC<LoaderProps> = (props) => {
  const {className} = props
  return (
    <>
      <div className={`w-full h-10 flex items-center justify-center ${className}`}>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </>
  );
};

export default Loader;
