# Test Hexa

Technical test for Hexa Conservation by Rahmah Putri Azzahra

## Run Program

```sh
npm run dev

# or start the server and open the app in a new browser tab

npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

## Supabase Setup Steps
I use **User Management Starter** from Community Quickstart SQL script (with adjustment) after setting up Access Token from my account.
User login is using email and password

### ENV
```
SUPABASE_ACCESS_TOKEN=
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Source from [here](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit) and [here](https://supabase.com/docs/guides/auth/passwords?queryGroups=flow&flow=pkce&queryGroups=framework&framework=sveltekit)

## Libraries Used

```
- Supabase for auth
- MapLibre for map view
- d3-color for coloring map
```

## Challenges
There is a learning curve here because I mainly work on API development. Using a completely new framework was also a challenge. There is a lot of syntax that I have to get used too in Svelte.

I also knew how I approach what should I develop first is not the best. I was stuck in making authentication via Supabase. I underestimated the setup that I had to do. When developing in bootcamp and also my current work, I made my own authentication with getting the credential from database. I never used Supabase for authentication before, I only use it to store (free) database.

When I finished making, authentication I make the map. Now, this is also challenging because I had to change library. First I use Leaflet but I never achieved to show just world map. Then I decided to change to Maplibre and it is much better because many documentation or other project that used it recently.

Then, I struggled to load the polygon data because instead of just passing the whole json, i passed the features key that made the data doesn't rendered.

I definitely not focusing on the prettiest UI but more on the feature.

I don't use AI in here but I do grab codes from the web.

What I want to extend from this app:
1. Finished the requirement in the docs
2. Style it better
3. Add feature for user to tag a country (which they have visited or for other use)