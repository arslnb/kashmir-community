import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr'

const tasweerFetcher = async () => {
  const result = await fetch(`https://api.unsplash.com/photos/random?client_id=4TzG_M4b_vp_MbB1ob1djmzGvUg5D-zt1HTcej3PZ6Q&orientation=portrait&query=kashmir`);
  return await result.json();
}

export default function Home() {
  const { data, error } = useSWR('get-tasweer', tasweerFetcher);
  const image = error ? "https://images.unsplash.com/photo-1609412536522-6a40327fc868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2964&q=80" : data?.urls.regular;
  const name = error ? "Asim Hamid" : data?.user.name
  const link = error ? "https://unsplash.com/photos/DI0u4RnUNwA" : data?.links.self

  console.log(data)
  return (
    <div>
      <Head>
        <title>Kashmir Community</title>
        <meta name="description" content="A space for Kashmiri's to hang out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-column flex-row-l">
          <div className="w-100 w-60-l pt4">
            <article>
              <header>
                <nav className="db dt-l w-100 border-box ph4">
                  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src="./trath-hyu-logo.svg" className="dib w6 h3" alt="Site Name" />
                  </a>
                  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Zeitgeist</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Coding Camp</a>
                    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Newsletter</a>
                    <a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Discord</a>
                  </div>
                </nav>
              </header>
              <div className="fl w-100">
                <section className="ph4 center">
                  <article className="pt4 bb b--black-10">
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                      <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                          <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="Photo of a dimly lit room with a computer interface terminal." />
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                          <h1 className="f3 fw1 baskerville mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
                          <p className="f6 f5-l lh-copy">
                            The tech giant says it is ready to begin planning a quantum
                            computer, a powerful cpu machine that relies on subatomic particles instead
                            of transistors.
                          </p>
                          <p className="f6 lh-copy mv0">By Robin Darnell</p>
                        </div>
                      </div>
                    </a>
                  </article>
                  <article className="bb b--black-10">
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                      <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                          <img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="Photo of a warehouse with stacked shelves." />
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                          <h1 className="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
                          <p className="f6 f5-l lh-copy">
                            A warehouse is a commercial building for storage of goods.
                            Warehouses are used by manufacturers, importers, exporters,
                            wholesalers, transport businesses, customs, etc. They are
                            usually large plain buildings in industrial areas of cities,
                            towns and villages.
                          </p>
                          <p className="f6 lh-copy mv0">By Robin Darnell</p>
                        </div>
                      </div>
                    </a>
                  </article>
                  <article className="pb4">
                    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                      <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                          <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="Photo of a whale's tale coming crashing out of the water." />
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                          <h1 className="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
                          <p className="f6 f5-l lh-copy">
                            Whale is the common name for a widely distributed and diverse
                            group of fully aquatic placental marine mammals. They are an
                            informal grouping within the infraorder Cetacea, usually
                            excluding dolphins and porpoises.
                          </p>
                          <p className="f6 lh-copy mv0">By Robin Darnell</p>
                        </div>
                      </div>
                    </a>
                  </article>
                </section>
              </div>
            </article>
            <footer className="ph4 pb4">
              <div className="mt5 pb4">
                <a href="/language/" title="Twitter" className="f6 dib pr2 mid-gray dim">Twitter</a>
                <a href="/terms/" title="Guidelines" className="f6 dib ph2 mid-gray dim">Guidelines</a>
                <a href="/privacy/" title="Contact" className="f6 dib pl2 mid-gray dim">Contact us</a>
              </div>
            </footer>
          </div>
          <div className="w-100 w-40-l mh10 image-holder">
            <div className="photo-credits"><span>Photo by <a href={link} target="_blank">{name}</a> on <a href={link} target="_blank">Unsplash</a></span></div>

            <div className="cover-as-pyethe" />
            <div className="cf w-100 image" style={{ backgroundImage: `url(${image})` }} />
          </div>
        </div>
      </main>
    </div>
  )
}
