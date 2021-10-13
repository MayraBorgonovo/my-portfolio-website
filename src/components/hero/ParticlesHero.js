import Particles from 'react-particles-js';
import sphere from '../../assets/sphere1.svg';

const ParticlesHero = () => {
  return (
    <Particles width='100vw' height="100vh"
        params={{
          particles: {
            number: {
              value: 5,
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
              out_mode: "bounce",
              attract: {
                enable: true,
              }
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
              value: 30,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 3,
                sync: false,
              },
            },
          }
        }}
      />
  )
}

export default ParticlesHero;
