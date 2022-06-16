export interface IFlags {
  menu: {
    variant: "permanent" | "persistent" | "temporary" | undefined;
    items: IMenuItem[];
  }
}

export interface IMenuItem {
  title: string;
  description?: string;
  url: string;
  icon: string;
  route?: string;
}

export const defaultFlags:IFlags = {
  menu: {
    variant: "temporary",
    items: [
      {
        title: "Open Broadcaster",
        url: "http://localhost:8080",
        icon: "cell_tower"
        // route: "open-broadcaster"
      },
      {
        title: "Live Assist",
        url: "http://localhost:8081",
        icon: "star"
        // route: "live-assist"
      },
      {
        title: "Documentation",
        url: "http://localhost:8080",
        icon: "library_books"
        // route: "docs"
      },
      {
        title: "Studio Dashboard",
        url: "http://localhost:3000",
        icon: "dashboard"
        // route: "studio-dashboard"
      },
      {
        title: "Help",
        url: "http://localhost:8080",
        icon: "help"
        // route: "help"
      },
      {
        title: "Radio Eastern Homepage",
        url: "https://radioeasternfm.com.au",
        icon: "radio"
        // route: "radio-eastern-home"
      },
      {
        title: "SMS Messages",
        url: "https://broadcastlaunch.com.au",
        icon: "sms"
        // route: "radio-eastern-home"
      }
    ]
  }
}
