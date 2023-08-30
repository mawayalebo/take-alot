/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true
    },
    images:{
        domains:[
            "media.takealot.com",
            "tpc.googlesyndication.com"
        ]
    }
}

module.exports = nextConfig
