
import Hapi from 'hapi'


const init = () => {
    const server = new Hapi.Server({
        port: 3030,
        routes: {
            cors: true
        }
    })

    server.route({
        method: "GET",
        path: '/screen1',
        handler: async (req, res) => {
            console.log("Triggered")
            return "Screen 1 Data Retrived"
        }
    })
     server.route({
        method: "GET",
        path: '/screen2',
        handler: async (req, res) => {
            console.log("Triggered")
            return "Screen 2 Data Retrived"
        }
    })

    server.start()
    console.log("RUNNING ON ",server.info.uri)
}

init()



