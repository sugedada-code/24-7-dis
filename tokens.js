// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1254904198059917362",
        serverId: "1254884649247834152",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
