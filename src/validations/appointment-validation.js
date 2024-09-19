// src/validations/appointment-validation.js

import { z } from "zod";

export const appointmentSchema = z.object({
    faskes_uuid: z.number().optional(),
    pasien_uuid: z.string().optional(),
    penjamin_uuid: z.string().optional().refine(val => val === 'umum/tunai', {
        message: "Hanya metode pembayaran umum/tunai yang diizinkan",
    }),
    account_uuid: z.string().optional(),
    tanggal_daftar: z.string().optional(),
    lokasi_uuid: z.string().optional(),
    dokter_uuid: z.string().optional(),
    jadwal_dokter_uuid: z.string().optional(),
    jadwal_praktek: z.string().optional(),
    kode_booking: z.string().nonempty(), // pastikan diisi
    no_antrian: z.string().nonempty(),
    no_antran_poli: z.string().nonempty(),
    status: z.number().optional(),
});
