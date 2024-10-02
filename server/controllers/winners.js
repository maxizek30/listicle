import { pool } from "../config/database.js";

const getWinners = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM winners");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default {
  getWinners,
};
