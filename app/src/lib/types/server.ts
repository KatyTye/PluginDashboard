export type CodeBlockType = {
	name: string,
	created: string,
	last_updated: string,
	code: string
}

export type CodeBlockArrayType = CodeBlockType[]

export type PlayerType = {
	uuid: string
}

export type RankType = {
	id: number,
	name: string,
	color: string,
	prefix: string,
	suffix: string,
	members: number,
	priority: number,
	permissions: string[]
}

export type LocationType = {
	x: number,
	y: number,
	z: number,
	yaw?: number,
	pitch?: number,
	world: string
}

export type BanType = {
	status: boolean,
	violation: string,
	expire: string,
	time: string
}

export type MessageType = {
	name: string,
	content: string
}

export type PlayerInfoType = {
	name: string,
	display_name: string,
	staff: boolean
}

export type AnalyticsObjectType = {
	show: boolean,
	left: number,
	joined: number,
	time_spent: number
}

export type PlayerServerInfoType = {
	ban: BanType,
	rank: number,
	flying: boolean,
	godmode: boolean,
	gamemode: number,
	location: LocationType
}

export type PluginSettingsType = {
	allow_urls: boolean,
	spawn_on_join: boolean,
	force_respawn: boolean,
	force_gamemode: boolean,
	spawn_permission: boolean,
	allow_interfering: boolean,
	message_whitespace: boolean
}

export type ServerUsageType = {
	cpu: number,
	ram: number,
	max_ram: number
}

export type PluginInfoType = {
	ads: boolean,
	debug: boolean,
	active: boolean,
	features: boolean,
	commands: boolean,
	community: boolean,
	check_updates: boolean,
	supporter: boolean,
	migrated: boolean,
	version: string,
	installed: string,
	store?: string,
	discord?: string,
	type: string,
	settings: PluginSettingsType
}

export type ServerInfoType = {
	status: boolean,
	online: number,
	uptime: number,
	max_online: number,
	total_joined: number,
	timestamp: number,
	default_gamemode: number,
	usage: ServerUsageType,
	ping: {
		amount: number,
		value: number
	}
}

export type ApiInfoType = {
	ranking?: number,
	old_ranking?: number,
	testing: boolean
}

export type AnalyticsInfoType = {
	today: AnalyticsObjectType,
	week: AnalyticsObjectType,
	month: AnalyticsObjectType,
	year: AnalyticsObjectType,
	total: AnalyticsObjectType
}

export type OnlinePlayerType = PlayerType & {
	player_info: PlayerInfoType,
	server_info: PlayerServerInfoType,
	permissions: string[]
}

export type BannedPlayerType = PlayerType & {
	name: string,
	display_name: string,
	violation: string,
	expire: string,
	time: string
}

export type OppedPlayerType = PlayerType & {
	name: string,
	display_name: string,
	by: string
}

export type MessagesType = {
	defaults: MessageType[],
	features: MessageType[],
	commands: MessageType[]
}

export type RanksType = RankType[]

export type FullLocationType = LocationType & {
	name: string,
	price?: number,
	cooldown?: number
}

export type HomeLocationType = FullLocationType & { owner_uuid: string }

export type LocationsType = {
	cooldown: number,
	price: number,
	warps: FullLocationType[],
	spawns: FullLocationType[],
	homes: HomeLocationType[],
	customs: FullLocationType[]
}

export type BackupsType = {
	name: string,
	version: string,
	date: string
}

export type CommandType = {
	name: string,
	active: boolean,
	subcommands?: CommandType[]
}

export type CommandsType = {
	total: number,
	defaults: CommandType[],
	features: CommandType[]
}

export type ResultType = {
	api: ApiInfoType,
	ranks: RanksType,
	info: ServerInfoType,
	plugin: PluginInfoType,
	messages: MessagesType,
	backups: BackupsType[],
	locations: LocationsType,
	commands: CommandsType,
	codes: CodeBlockArrayType,
	analytics: AnalyticsInfoType,
	opped_players: OppedPlayerType[],
	online_players: OnlinePlayerType[],
	banned_players: BannedPlayerType[],
}

export type ServerResponseType = {
	status: number,
	message: string,
	claim_token: string,
	result: ResultType
}