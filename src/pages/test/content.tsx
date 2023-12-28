import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Content = () => {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLDivElement>('.box')
      console.log(boxes)
      boxes.forEach(box => {
        gsap.from(box, {
          x: -300,
          scrollTrigger: box,
          opacity: 0,
          duration: 1,
        })
      })
    },
    { scope: '.container' }, // we can use ref for container as well
  )
  return (
    <div className='container' ref={container}>
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>{' '}
      <div className='box'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veritatis possimus aspernatur distinctio
        quibusdam enim labore reprehenderit corrupti nisi, ad, magnam tempora aliquam, molestiae minus facere? Beatae
        non dolores eos iure cupiditate quaerat, repellendus a sit, mollitia nesciunt sint expedita officia eaque
        commodi delectus ab. Quae provident quam ut perferendis quas voluptatibus animi ea atque at, esse maiores
        voluptates non eos vitae mollitia itaque beatae, quis ipsa nulla expedita enim possimus amet impedit doloribus!
        Quae natus voluptate nemo temporibus quasi corporis debitis officia dolores sit dignissimos fugiat, delectus
        laudantium ratione atque neque, voluptas doloremque voluptates sed. Suscipit error unde labore.
      </div>
    </div>
  )
}

export default Content
