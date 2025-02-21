
export function allowCors(handler) {
    return async (req, res) => {
        res.setHeader("Acess-Control-Allow-Origin", "+");
        res.setHeader("Acess-Control-Allow-Credentials", "true");
        res.setHeader("Acess-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
        res.setHeader("Acess-Control-Allow-Headers", "Content-Type", "Authorization");
    

    if(req.method === "OPTIONS") return res.status(200).end();

    return handler(req, res);
    };
}

