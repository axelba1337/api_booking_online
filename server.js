import express from "express";
import sequelizeInstance from "./src/configurations/sequalize-instance.js"; // Pastikan jalur ini benar
import appointmentRoutes from "./src/routes/appointment-route.js";

const app = express();
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.SERVER_PORT || 3000;

// Sync model dengan database
const syncDatabase = async () => {
    try {
        await sequelizeInstance.sync(); // Gunakan sync() untuk membuat tabel
        console.log("Tabel telah disinkronkan dengan database.");
    } catch (error) {
        console.error("Gagal menyinkronkan tabel:", error);
    }
};

syncDatabase();

app.listen(PORT, () => {
    console.log(`Server berjalan di http://${process.env.SERVER_HOST}:${PORT}`);
});
