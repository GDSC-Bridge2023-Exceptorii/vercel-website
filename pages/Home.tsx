import { useRouter } from 'next/router'
import Image from 'next/image'
import Sample from '../public/sample.jpg'
import { Layout, Text, Page, Code, Link, Snippet } from '@vercel/examples-ui'

import board from '../public/board.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  const { route } = useRouter()
  const viewport = route.replace('/_viewport/', '')

  return (
    <>
    <Header />
    <Page>
      <section className="flex flex-col gap-6">
        <Text variant="h1">App name</Text>
        <Image src={Sample} alt="Middleware logging implementation" />
        <Text variant="h2">Team Misson</Text>
        <Text>Our teams goal is to make everyone enjoy an easy and convenient digital world, not a difficult and complex digital world.
          Unique thing about this app Practical information access and utilization, such as search methods Simple buttons and intuitive clicks aimed at the elderly</Text>

        <Text variant="h2">Unique thing about this app</Text>
        <Text> Practical information access and utilization, such as search methods
          Simple buttons and intuitive clicks aimed at the elderly </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">SDGs 10: Reduced inequalities</Text>
        <Text>Digital divide is a matter of inequality and disadvantages beyond  inconvenience. It leads to social and economic gaps. We develop customized digital education services for the elderly to address digital gaps and inequalities. 
          For example, online banking, which is difficult for the elderly, causes inefficiency in banking.
          The elimination of inequality over the digital divide provides everyone with opportunities for fair education, information gathering, and information utilization.
        </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">Download</Text>
        <Text>
          The 00 app will be a friendly guide for you.
          Get free training on OOO app
          (I will also add a kind explanation.)
        </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">Used technologies</Text>
        <Image src={board} alt="Middleware logging implementation" />
        <Text>
          The 00 app will be a friendly guide for you.
          Get free training on OOO app
          (I will also add a kind explanation.)
        </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">Example of Tutorials</Text>
        <Image src={Sample} alt="Middleware logging implementation" />
        <Text>
          Finding useful information is easier than you think.
          Internet banking is not so difficult either.
        </Text>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <Text variant="h2">Team member</Text>
        <Text>
          In the middleware, we now check the User-Agent header and rewrite to
          the correct page:
        </Text>
      </section>
    </Page>
    <Footer />
    </>
  )
}

Home.Layout = Layout

export default Home
