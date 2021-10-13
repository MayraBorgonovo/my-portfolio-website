import Particles from 'react-particles-js';
import sphere from '../../assets/sphere1.svg';

const ParticlesAbout = () => {
  return (
    <Particles width='100vw' height="70vh"
        params={{
          particles: {
            number: {
              value: 3,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: "image",
              image: {
                src: sphere,
                height: 20,
                width: 23,
              },
            },
            color: {
              value: "#CD25C6"
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 5,
                sync: false,
              },
            },
          }
        }}
      />
  )
}

export default ParticlesAbout;
