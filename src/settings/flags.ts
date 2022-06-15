interface IFlags {
  menu: {
    variant: "permanent" | "persistent" | "temporary" | undefined
  }
}

export const flags:IFlags = {
  menu: {
    variant: "temporary"
    // variant: "permanent"
  }
}
