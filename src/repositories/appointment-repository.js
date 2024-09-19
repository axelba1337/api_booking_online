// src/repositories/appointment-repository.js

import Appointment from "../models/appointment-model.js";

class AppointmentRepository {
    static async create(appointmentData) {
        // Membuat instance baru dari Appointment dan menyimpannya ke database
        const appointment = await Appointment.create(appointmentData);
        return appointment;
    }

    static async get(uuid) {
        return await Appointment.findOne({ where: { uuid } });
    }

    static async update(uuid, appointmentData) {
        const appointment = await Appointment.findOne({ where: { uuid } });
        if (appointment) {
            return await appointment.update(appointmentData);
        }
        return null;
    }

    static async delete(uuid) {
        const appointment = await Appointment.findOne({ where: { uuid } });
        if (appointment) {
            await appointment.destroy(); // Soft delete
            return appointment;
        }
        return null;
    }

    static async getAll() {
        return await Appointment.findAll();
    }
}

export default AppointmentRepository;