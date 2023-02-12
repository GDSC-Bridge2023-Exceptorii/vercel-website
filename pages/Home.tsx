import { useRouter } from 'next/router'
import Image from 'next/image'
import home from '../public/home.png'
import { Text, Page, Code, Link, Snippet } from '@vercel/examples-ui'

import board from '../public/board.jpg'
import main4 from '../public/main4.png'
import main2 from '../public/main2.png'
import main3 from '../public/main3.png'
import SDGs from '../public/SDGs.png'
import logo from '../public/logo.png'
import tutorial1 from '../public/tutorial1.png'
import tutorial2 from '../public/tutorial2.png'
import tutorial3 from '../public/tutorial3.png'
import QR from '../public/QR.png'
import tech from '../public/tech.png'
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
    scale: '0.8',
    width:'800px',
    height: '800px'
  }

  const image_2: React.CSSProperties = {
    width: '20%', /* 画像の横幅を 50% に設定 */
    height: 'auto', /* 画像の高さを自動調整 */
    margin: '0.5em 2em 0.5em 2em'
  }

  const image_3: React.CSSProperties = {
    width: '10%', /* 画像の横幅を 50% に設定 */
    height: 'auto' /* 画像の高さを自動調整 */
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
          <Image  src={logo} alt="Middleware logging implementation" />
          </div>
          <div style={flex_box}>
            <div style={image_1}>
              <Image  src={main4} alt="Middleware logging implementation" />
          </div>
            <div>
              <Text variant="h2">Products</Text>
              <Text>Our teams goal is to make everyone enjoy an easy and convenient digital world, not a difficult and complex digital world.
              Unique thing about this app Practical information access and utilization, such as search methods Simple buttons and intuitive clicks aimed at the elderly</Text>
            </div>
          </div>
          <div style={{backgroundColor:'#ffd180'}}>
            
          <div style={flex_box}>
            <div>
              <Text variant="h2">Team Misson</Text>
              <Text>Our teams goal is to make everyone enjoy an easy and convenient digital world, not a difficult and complex digital world.
              Unique thing about this app Practical information access and utilization, such as search methods Simple buttons and intuitive clicks aimed at the elderly</Text>
            </div>
            <div style={image_1}>
              <Image  src={main2} alt="Middleware logging implementation" />
          </div>
          </div>
          </div>

          <div style={flex_box}>
            <div style={image_1}>
              <Image  src={main3} alt="Middleware logging implementation" />
          </div>
            <div>
              <Text variant="h2">Unique thing about this app</Text>
              <Text>Practical information access and utilization, such as search methods
Simple buttons and intuitive clicks aimed at the elderly.Always with an eye on clarity, you can acquire knowledge one by one without fail. </Text>
            </div>
          </div>
        </section>










        <section className="flex flex-col gap-6 mt-12" style={{backgroundColor: '#ffe0b2'}}>
        <Text variant="h2">
          SDGs 10: Reduced inequalities
        </Text>
        <div style={image_3}>
          <Image  src={SDGs} alt="Middleware logging implementation" />
        </div>
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
          <Image src={tech} alt="Middleware logging implementation" />
          <Text>
            Eldy will be a friendly guide for you.
            Get free training on eldy.Eldy uses Machine Learning techniques to help classify fake news through training on thousands of real datasets, on summarizing articles and news, and on suggesting which tutorials each demographic of users should do first
          </Text>
          <Text> [Click it↓]</Text>
          <a href="https://www.youtube.com/watch?v=8ZY-vvBmx6U">the fake news detector</a>

      </section>
    </div>


    <div style={{backgroundColor: '#ffe0b2'}}>
      <div style={style}>
      <section className="flex flex-col gap-6 mt-6">
        <section className="flex flex-col " style={{backgroundColor: '#ffe0b2'}}>
          <Text variant="h2">Download</Text>
          <Image src={QR} alt="Middleware logging implementation" />
          <Text>
            eldy will be a friendly guide for you.
            Get free training on eldy
          </Text>
        </section>
          <Text variant="h2">Example of Tutorials</Text>

        <div style={flex_box}>
          <div style={image_2}>
            <Image  src={tutorial1} alt="Middleware logging implementation" />
          </div>
          <div style={image_2}>
            <Image  src={tutorial2} alt="Middleware logging implementation" />
          </div>
          <div style={image_2}>
            <Image  src={tutorial3} alt="Middleware logging implementation" />
          </div>
        </div>
        <div>
          <Text>
            Finding useful information is easier than you think.
            Internet banking is not so difficult either.
          </Text>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <div style= {style3}>
        <Text variant="h2">Team member</Text>
        </div>
        <div>Irfan NS</div>
        <div>Jaewon Cho</div>
        <div>yuwookyeong</div>
        <div>jeonge</div>
        <div>Seohyun Lee</div>
        <div>Yamaguchi Shuhei</div>
      </section>
      </div>
    </div>
    <Footer />
    </>
  )
}


export default Home
