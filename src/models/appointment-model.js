// src/models/appointment-model.js

import { DataTypes } from "sequelize";
import sequelizeInstance from "../configurations/sequalize-instance.js";
import { uuidv7 } from "uuidv7"; // Pastikan untuk mengimpor uuidv7

const Appointment = sequelizeInstance.define("appointment_online", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    uuid: {
        type: DataTypes.STRING(255),
        defaultValue: () => uuidv7(),
        unique: true,
        allowNull: false,
    },
    faskes_uuid: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    pasien_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    penjamin_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    account_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    tanggal_daftar: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    lokasi_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    dokter_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    jadwal_dokter_uuid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    jadwal_praktek: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    kode_booking: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    no_antrian: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    no_antran_poli: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'appointment_online',
    hooks: {
        beforeCreate: (appointment) => {
            appointment.createdAt = Math.floor(Date.now() / 1000);
        },
        beforeUpdate: (appointment) => {
            appointment.updatedAt = Math.floor(Date.now() / 1000);
        },
    },
    timestamps: true,
    paranoid: true,
});

export default Appointment;