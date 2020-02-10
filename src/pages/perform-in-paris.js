import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function PerformInParisPage() {
  return (
    <Layout>
      <div
        css={css`
          & h3 {
            font-size: 1rem;
            font-weight: 700;
          }

          & h4 {
            margin-bottom: 0;
          }
        `}
      >
        <p>
          For most events you can reach out directly to the organizers via
          Facebook Messenger. Make sure to send a personalized message with the
          exact dates you'll be in Paris. Some shows may ask you to submit a
          video.
        </p>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin-left: -16px;
            margin-right: -16px;
            & > div {
              width: 100%;
              @media screen and (min-width: 624px) {
                flex: 1;
              }
              padding-left: 16px;
              padding-right: 16px;
            }
          `}
        >
          <div>
            <h2>Open Mics</h2>
            <Events>
              <Events.Day>Tuesday</Events.Day>
              <Events.ContactLink href="https://m.me/ComedyTimeBootlegBar">
                Comedy Time
              </Events.ContactLink>
              <Events.ContactLink href="https://m.me/coucoucomedy">
                Coucou Comedy
              </Events.ContactLink>
              <Events.ContactLink href="https://m.me/funnymonkParis">
                Funny Monk Comedy Show
              </Events.ContactLink>
              <Events.ContactLink href="https://www.instagram.com/comedy_breakfast/">
                Comedy For Breakfast
              </Events.ContactLink>
            </Events>
            <Events>
              <Events.Day>Wednesday</Events.Day>
              <Events.ContactLink href="https://forms.gle/hMJiazVvVm6t85N28">
                Comedy Lab Open Mic
              </Events.ContactLink>
              <p>Signup with Google Forms</p>
            </Events>
            <Events>
              <Events.Day>Thursday</Events.Day>
              <Events.ContactLink href="https://m.me/thecomedycroissant">
                The Comedy Croissant
              </Events.ContactLink>
            </Events>
            <Events>
              <Events.Day>Saturday</Events.Day>
              <Events.ContactLink href="https://m.me/wildopenmic/">
                The Wild Open Mic
              </Events.ContactLink>
              <Events.ContactLink href="https://m.me/marieconnollycomedy/">
                Joke Or Croak
              </Events.ContactLink>
            </Events>
          </div>
          <div>
            <h2>Shows</h2>
            <Events>
              <Events.Day>Tuesday</Events.Day>
              <Events.ContactLink href="mailto:frenchfriedcomedy@gmail.com">
                French Fried Comedy Night
              </Events.ContactLink>
              <p>Signup via email</p>
            </Events>
            <Events>
              <Events.Day>Friday</Events.Day>
              <Events.ContactLink href="https://m.me/comedylabparis/">
                Comedy Lab Comedy Show
              </Events.ContactLink>
              <Events.ContactLink href="https://m.me/libertyegalitycomedy/">
                Liberty Egality Comedy
              </Events.ContactLink>
            </Events>
            <Events>
              <Events.Day>Satuday</Events.Day>
              <Events.ContactLink href="https://m.me/GBACN/">
                Great British American Comedy Night
              </Events.ContactLink>
            </Events>
            <Events>
              <Events.Day>Sunday</Events.Day>
              <Events.ContactLink href="https://m.me/NewYorkComedyNight/">
                The New York Comedy Night
              </Events.ContactLink>
            </Events>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Events(props) {
  return (
    <ul
      css={css`
        margin: 0;
        margin-bottom: 24px;
        list-style: none;

        & a {
          line-height: 1.75;
        }

        & > li:first-child {
          margin-bottom: 16px;
        }
        & > li:not(:first-child) {
          margin-bottom: 8px;
        }
      `}
      {...props}
    />
  )
}

Events.Day = function Day(props) {
  return (
    <li>
      <strong {...props} />
    </li>
  )
}

Events.ContactLink = function ContactLink(props) {
  return (
    <li>
      <a target="_blank" rel="noopener noreferrer" {...props} />
    </li>
  )
}
