import AppointmentService from "../services/appointment-service.js";


class AppointmentController {
    static async create(req, res) {
        try {
            const appointment = await AppointmentService.create(req.body);
            res.status(201).json(appointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async get(req, res) {
        try {
            const appointment = await AppointmentService.get(req.params.uuid);
            if (appointment) {
                res.status(200).json(appointment);
            } else {
                res.status(404).json({ message: "Appointment not found" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const updatedAppointment = await AppointmentService.update(req.params.uuid, req.body);
            res.status(200).json(updatedAppointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            await AppointmentService.delete(req.params.uuid);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const appointments = await AppointmentService.getAll();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default AppointmentController;