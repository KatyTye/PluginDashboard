export function doConsoleMessage() {
	console.clear()

	setTimeout(() => {
		console.clear()
		console.log(`%c[ SEssentials ]%cModern Minecraft Plugin%c
╭──────────────────────────────────────────────────────────────╮
│  All-in-one Bukkit essentials plugin built for flexibility,  │
│  performance, and style.                                     │
│                                                              │
│  Elevate your community with enterprise-grade server         │
│  management, powerful tools, and a seamless gameplay         │
│  experience.                                                 │
│                                                              │
│  > Welcome to the future of server essentials.               │
└──────────────────────────────────────────────────────────────┘%c
`,	"display: block; width: 100%; text-align: center; font-weight: bold; color: orange; margin: 25px 0; font-size: 4rem;",
	"font-weight: bold; display: block; text-align: center; font-size: 2rem;","display: block; text-align: center;", "display: block; margin-bottom: 25px")
	}, 750)
}