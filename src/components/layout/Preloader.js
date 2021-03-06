import './Preloader.css';

const Preloader = () => {
  return (
    <section className='preloader-wrapper'>
      <svg id='logo' width="192" height="125" viewBox="0 0 192 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        id="path" 
        d="M10.96 62.624C10.96 62.624 -3.04 121.124 3.96 111.124C10.96 101.124 17.96 77.624 24.96 77.624C31.96 77.624 24.96 101.124 24.96 101.124C24.96 101.124 38.96 62.624 45.46 62.624C51.96 62.624 38.96 103.124 45.46 107.124C51.96 111.124 131.96 13.624 111.46 3.62401C90.96 -6.37599 51.96 107.124 51.96 107.124C51.96 107.124 86.46 54.124 101.46 77.624C116.46 101.124 54.96 137.624 60.46 116.124C65.96 94.624 190.96 101.124 190.96 101.124" 
        stroke="white" 
        strokeWidth="4" 
        strokeDasharray= '1000'
        strokeDashoffset= '988'
        />
      </svg>
    </section>
  );
};

export default Preloader;