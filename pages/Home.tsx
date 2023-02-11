import { useRouter } from 'next/router'
import Image from 'next/image'
import home from '../public/home.png'
import { Text, Page, Code, Link, Snippet } from '@vercel/examples-ui'

import board from '../public/board.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

function Home() {
  const { route } = useRouter()
  const viewport = route.replace('/_viewport/', '')
  const style: React.CSSProperties = {
    margin: '0 3em 0em 3em'
  };

  const style2: React.CSSProperties = {
    padding: '3em 3em 3em 3em'
  };

  const style3: React.CSSProperties = {
    padding: '0em 0em 3em 0em'
  };


  const image_1: React.CSSProperties = {
    scale: '0.4',
    width:'500px',
    height: '500px'
  }

  const flex_box: React.CSSProperties = {
      display: 'flex'
  }
  return (
    <>
    <Header />
    <div style={{backgroundColor: '#ffe0b2'}}>
      <div style={style2}>
        <section className="flex flex-col gap-6 mt-12" style={{backgroundColor: '#ffe0b2'}}>
          <div>
            <Text variant="h1"> Eldy</Text>
          </div>
            <div style={flex_box}>
            <div style={image_1}>
              <Image  src={home} alt="Middleware logging implementation" />
          </div>
            <div>
              <Text variant="h2">Team Misson</Text>
              <Text>Our teams goal is to make everyone enjoy an easy and convenient digital world, not a difficult and complex digital world.
              Unique thing about this app Practical information access and utilization, such as search methods Simple buttons and intuitive clicks aimed at the elderly</Text>
            </div>
          </div>

        <div style={flex_box}>
        <div style={{backgroundColor:'#ffff8d'}}></div>
          <div >
            <Text variant="h2">Unique thing about this app</Text>
            <Text> Practical information access and utilization, such as search methods
                    Simple buttons and intuitive clicks aimed at the elderly 
            </Text>
          </div>
          <div style={image_1}>
            <Image  src={home} alt="Middleware logging implementation" />
          </div>
        </div>

        <div style={flex_box}>
          <div style={image_1}>
            <Image  src={home} alt="Middleware logging implementation" />
          </div>
          <div>
            <Text variant="h2">Unique thing about this app</Text>
            <Text> 
              Practical information access and utilization, such as search methods
              Simple buttons and intuitive clicks aimed at the elderly 
            </Text>
          </div>
        </div>
        </section>
        <section className="flex flex-col gap-6 mt-12" style={{backgroundColor: '#ffe0b2'}}>
        <Text variant="h2">
          SDGs 10: Reduced inequalities
        </Text>
        <Text>
            Digital divide is a matter of inequality and disadvantages beyond  inconvenience. It leads to social and economic gaps. We develop customized digital education services for the elderly to address digital gaps and inequalities. 
            For example, online banking, which is difficult for the elderly, causes inefficiency in banking.
            The elimination of inequality over the digital divide provides everyone with opportunities for fair education, information gathering, and information utilization.
        </Text>
        </section>
      </div>
    </div>



















    <div style={style}>
      <section className="flex flex-col  mt-6">
          <Text variant="h2">Used technologies</Text>
          <Image src={board} alt="Middleware logging implementation" />
          <Text>
            The 00 app will be a friendly guide for you.
            Get free training on OOO app
            (I will also add a kind explanation.)
          </Text>
      </section>
    </div>


    <div style={{backgroundColor: '#ffe0b2'}}>
      <div style={style}>
      <section className="flex flex-col gap-6 mt-12">
        <section className="flex flex-col gap-6 mt-12" style={{backgroundColor: '#ffe0b2'}}>
          <Text variant="h2">Download</Text>
          <Text>
            The 00 app will be a friendly guide for you.
            Get free training on OOO app
            (I will also add a kind explanation.)
          </Text>
        </section>
          <Text variant="h2">Example of Tutorials</Text>

        <div style={flex_box}>
          <div style={image_1}>
            <Image  src={home} alt="Middleware logging implementation" />
          </div>
          <div style={image_1}>
            <Image  src={home} alt="Middleware logging implementation" />
          </div>
          <div style={image_1}>
            <Image  src={home} alt="Middleware logging implementation" />
          </div>
        </div>
        <Text>
          Finding useful information is easier than you think.
          Internet banking is not so difficult either.
        </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <div style= {style3}>
        <Text variant="h2">Team member</Text>
        <Text>
          In the middleware, we now check the User-Agent header and rewrite to
          the correct page:
        </Text>
        </div>
      </section>
      </div>
    </div>
    <Footer />
    </>
  )
}


export default Home
