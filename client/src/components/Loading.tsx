
import FadeLoader from "react-spinners/FadeLoader";
import { CSSProperties, FC, useEffect } from 'react';

const override: CSSProperties = {
  display: 'flex',
  justifyItems: 'center'
};

interface ILoadingApp {
  isloading: boolean;
}

const LoadingApp: FC<ILoadingApp> = ({ isloading }) => {
  return (
    <div className="backdrop-blur-xl bg-white/50 absolute min-h-full min-w-full left-0 top-0">
      <FadeLoader
        color='#403a44'
        loading={isloading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingApp;
