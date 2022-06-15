export interface IMenuItem {
  title: string;
  description?: string;
  url: string;
  // route: string;
}

export const menuItems:IMenuItem[] = [
  {
    title: "Open Broadcaster",
    url: "http://localhost:8080",
    // route: "open-broadcaster"
  },
  {
    title: "Live Assist",
    url: "http://localhost:8081",
    // route: "live-assist"
  },
  {
    title: "Documentation",
    url: "http://localhost:8080",
    // route: "docs"
  },
  {
    title: "Studio Dashboard",
    url: "http://localhost:3000",
    // route: "studio-dashboard"
  },
  {
    title: "Help",
    url: "http://localhost:8080",
    // route: "help"
  },
  {
    title: "Radio Eastern Homepage",
    url: "https://radioeasternfm.com.au",
    // route: "radio-eastern-home"
  }
]
