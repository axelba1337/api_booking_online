// src/services/appointment-service.js

import AppointmentRepository from "../repositories/appointment-repository.js";
import { toEpoch } from "../utils/epoch.js";

export default class AppointmentService {
    static async create(appointmentData) {
        // Mengonversi tanggal daftar ke epoch timestamp
        appointmentData.tanggal_daftar = toEpoch(appointmentData.tanggal_daftar);
        return await AppointmentRepository.create(appointmentData);
    }

    static async get(uuid) {
        return await AppointmentRepository.get(uuid);
    }

    static async update(uuid, appointmentData) {
        // Mengonversi tanggal daftar ke epoch timestamp
        if (appointmentData.tanggal_daftar) {
            appointmentData.tanggal_daftar = toEpoch(appointmentData.tanggal_daftar);
        }
        return await AppointmentRepository.update(uuid, appointmentData);
    }

    static async delete(uuid) {
        const appointment = await AppointmentRepository.get(uuid);
        if (!appointment) return null; // Jika tidak ditemukan

        // Set deletedAt menjadi epoch timestamp
        appointment.deletedAt = Math.floor(Date.now() / 1000);
        await appointment.save(); // Simpan perubahan
        return appointment;
    }

    static async getAll() {
        return await AppointmentRepository.getAll();
    }
}