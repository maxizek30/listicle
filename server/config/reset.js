import { pool } from "./database.js";
import "./dotenv.js";
import winnerData from "../data/winners.js";

const createWinnersTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS winners;

    CREATE TABLE IF NOT EXISTS winners (
        id SERIAL PRIMARY KEY,
        teamName TEXT NOT NULL,
        tournamentName TEXT NOT NULL,
        roster TEXT[] NOT NULL,
        date TEXT NOT NULL,
        imageUrl TEXT NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 Winners table created successfully");
  } catch (err) {
    console.error("⚠️ error creating winners table", err);
  }
};
const seedWinnersTable = async () => {
  await createWinnersTable();

  winnerData.forEach((winner) => {
    const insertQuery = {
      text: "INSERT INTO winners (teamName, tournamentName, roster, date, imageUrl) VALUES ($1, $2, $3, $4, $5)",
    };
    const values = [
      winner.teamName,
      winner.tournamentName,
      winner.roster,
      winner.date,
      winner.imageUrl,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting data", err);
        return;
      }
      console.log(`🎉 ${winner.teamName} inserted successfully`);
    });
  });
};
seedWinnersTable();
