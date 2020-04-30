<script>
  import { Hero, Blurb } from "@sveltejs/site-kit";
  import Event from "components/Event.svelte";
  import Box from "components/Box.svelte";
  // export let events;
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    max-width: 120rem;
    margin: 10rem auto;
    padding: 0 var(--side-nav);
    grid-template-areas:
      "main main main main main"
      "side side side side side";
  }
  .text {
    grid-area: main;
  }

  .boxes {
    z-index: 1;
    grid-area: side;
  }
  @media (min-width: 900px) {
    .container {
      grid-template-areas: "main main main side side";
    }
  }

  ul {
    /* list-style: none; */
    margin: 0;
  }

  li li {
    margin: 0 2em;
  }

  h2 {
    margin-bottom: 0.5em;
  }
</style>

<Hero
  title="Community Events"
  tagline="Events"
  outline="svelte-logo-outline.svg"
  logotype="community-logotype.svg" />

<div class="container">
  <div class="text">
    <h3>Community Support</h3>
    <p>
      On this page we're listing Svelte-related community events and conferences
      that you can go to. If you're interested in meeting others that are also
      interested in Svelte you'll find your closest meetup here.
    </p>
    <p>
      If you want to read more about the different events just follow the links
      and see where they lead.
    </p>
    <h3>Organize</h3>
    <p>
      Are you looking to organize your own event? Here are some things to think
      about:
    </p>
    <h4>Venue - where to host?</h4>
    <p>
      Finding a place to host your event can be hard. The easiest way is most
      likely to ask your employer if they can host. If that's not an option you
      can look at Libraries or co-working spaces.
    </p>
    <h4>Agenda - what's going to happen at the event?</h4>
    <p>
      The agenda is also important. Are you going to host a talk yourself? Will
      you do a workshop? A good idea is to ask if other attendees are interested
      in either showing off something they've made or if they want to speak.
    </p>
    <h3>Add your own event</h3>
    <p>
      In order to add your own event to the list
      <a href="https://github.com/sveltejs/community/issues/" target="_blank">
        open an issue
      </a>
      and let us know the details!
    </p>
  </div>
  <div class="boxes">
    <Box color="#ededed">
      <h2>Your Meetup Here!</h2>

      <a href="https://github.com/sveltejs/community/issues/" target="_blank">
        Open an issue
      </a>
      and let us know the details!
    </Box>
    <Box color="#ededed">
      <h2>Europe</h2>
      <ul>
        <li>
          🇬🇧London
          <a
            href={'https://www.meetup.com/svelte/'}
            target="_blank"
            class="event-name">
            London Svelte Meetup
          </a>
          <!-- <span class="date">, November 4th</span> -->
        </li>
        <li>
          🇮🇪Dublin
          <a
            href={'https://www.downtomeet.com/Svelte-Dublin'}
            target="_blank"
            class="event-name">
            Svelte Dublin
          </a>
        </li>
        <li>
          🇧🇪Ghent/Antwerp
          <a href={'https://svelte.camp/'} target="_blank" class="event-name">
            SvelteCampe Belgium
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/wolfr_2">Johan Ronsse</a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇸🇪 Stockholm🇪
          <a
            href={'https://www.downtomeet.com/Svelte-Society-Stockholm'}
            target="_blank"
            class="event-name">
            Svelte Society Stockholm
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/kevmodrome">
                  Kevin Åberg Kultalahti
                </a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇳🇴Bergen
          <a
            href={'https://www.downtomeet.com/Svelte-Bergen'}
            target="_blank"
            class="event-name">
            Svelte Bergen
          </a>
        </li>
        <li>
          🇦🇹Vienna
          <a
            href={'https://www.meetup.com/Svelte-Vienna/'}
            target="_blank"
            class="event-name">
            Svelte Vienna
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/quantumjs">Nikos Katsikanis</a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇳🇱Amsterdam
          <a
            href={'https://www.meetup.com/nl-NL/Amsterdam-SvelteJS/'}
            target="_blank"
            class="event-name">
            Amsterdam SvelteJS
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/legkoletat">Mikhail Kuznetcov</a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇩🇪Hamburg
          <a
            href={'https://www.meetup.com/de-DE/Svelte-js-Meetup-Hamburg/'}
            target="_blank"
            class="event-name">
            Svelte js Meetup Hamburg
          </a>
        </li>
        <li>
          🇷🇺Moscow
          <a
            href={'https://www.downtomeet.com/Svelte-Russia-Meetups'}
            target="_blank"
            class="event-name">
            Svelte Russia Meetups
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/PaulMaly">Pavel Malyshev</a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇺🇦Ukraine
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/ValPaliy">Val Paliy</a>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>

    <Box color="#ededed">
      <h2>North America</h2>
      <ul>
        <li>
          🗽New York
          <a
            href={'https://www.downtomeet.com/Svelte-Society-NYC'}
            target="_blank"
            class="event-name">
            Svelte Society NYC
          </a>
          <!-- <span class="date">, November 4th</span> -->
        </li>
        <li>
          🌉Los Gatos
          <a
            href={'https://downtomeet.com/bayareasvelte'}
            target="_blank"
            class="event-name">
            Bay Area Svelte
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://profullstack.com">Anthony Ettinger</a>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>

    <Box color="#ededed">
      <h2>Asia</h2>
      <ul>
        <li>
          🇮🇳Bangalore
          <a
            href={'https://www.meetup.com/Svelte-JS-BLR-Meetup-Group/'}
            target="_blank"
            class="event-name">
            SvelteJS Bangalore
          </a>
          <ul>
            <li>
              <span class="date">
                Organizer:
                <a href="https://twitter.com/geekyants">Geekyants</a>
              </span>
            </li>
          </ul>
        </li>
        <li>
          🇹🇭Bangkok
          <ul>
            <li>
              <span class="date">
                Interested:
                <a href="https://twitter.com/akshay5995">Akshay Ram Vignesh</a>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  </div>
</div>
