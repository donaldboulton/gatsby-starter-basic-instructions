import * as React from 'react'
import { PureComponent } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles'
import { loadStarsPreset } from 'tsparticles-preset-stars'

class ParticlesContainer extends PureComponent<IProps> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine)
  }

  render() {
    const options = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        shape: {
          type: 'circle',
        },
        color: {
          value: ['#FF5A86', '#953AFE', '#FFC326', '#46C0FF'],
        },
      },
      preset: 'stars',
    }

    return <Particles className="background" options={options} init={this.customInit} />
  }
}

export default ParticlesContainer
