import pool from "../../lib/db";
import { allowCors } from "../../lib/cors";


async function handler(req, res) {
    if (req.method != "GET") {
        return res.status(405).json({ error: "Método não permitido"});
    }
    try {
        const [result] = await pool.execute("SELECT 1");
        return res.status(200).json({ status: "online", message: "Base de dados está online"});
    } catch (error) {
        console.error("Erro ao connectar à base de dados", error);
        return res.status(500).json({status: "offline", error: "Erro ao connectar à base de dados"});
    }
}

export default allowCors(handler);